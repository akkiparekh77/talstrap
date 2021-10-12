import { InputAdornment } from '@material-ui/core'
import MuiAutocomplete, {
  AutocompleteChangeReason,
  AutocompleteProps as MuiAutocompleteProps,
} from '@material-ui/lab/Autocomplete'
import clsx from 'clsx'
import { debounce } from 'lodash-es'
import { ChangeEvent, FC, forwardRef, useCallback, useEffect, useState } from 'react'

import { ErrorIcon } from '../../icons'
import { makeStyles, Theme } from '../../styles'
import { CircularProgress } from '../CircularProgress'
import { TextField, TextFieldProps } from '../TextField'

export type AutocompleteValue = {
  value: unknown
  text: string
}

const useStyles = makeStyles((theme: Theme) => ({
  popper: {
    zIndex: theme.zIndex.modal,
  },
  textRoot: {
    padding: 0,
  },
  root: {
    padding: 0,
    '& [class*="MuiOutlinedInput-root"]': {
      padding: theme.spacing(0.625),
      paddingLeft: theme.spacing(1.125),
    },
  },
  rootWarning: {
    '& [class*="MuiOutlinedInput-root"]': {
      '& fieldset': {
        borderColor: theme.palette.warning.light,
      },
    },
    '& [class*="Mui-focused"]  [class*="MuiOutlinedInput-root"], &:hover [class*="MuiOutlinedInput-root"]': {
      '& fieldset': {
        borderColor: theme.palette.warning.main,
      },
    },
    '& [class*="MuiInputLabel-shrink"], [class*="MuiFormHelperText-root"]': {
      color: theme.palette.warning.main,
    },
  },
  adornmentWarning: {
    color: theme.palette.warning.main,
  },
}))

export interface AutocompleteTextFieldProps extends TextFieldProps {
  /**
   * When set to `true`, enables the warning mode which changes the styles and adds warning adornment.
   * @default false
   */
  warning?: boolean
}

export interface AutocompleteProps extends Partial<MuiAutocompleteProps<any, boolean, boolean, boolean>> {
  /**
   * To be used when using asychronously loaded options.
   *
   * Fired when input is entered into the autocomplete field and when the options
   * dropdown is opened
   *
   * A function that accepts a text value and returns a promise that will resolve to a an array of
   * `AutocompleteValue`. The `AutocompleteValue` signature is:
   * `{
   * value: unknown,
   * text: string
   * }`
   */
  dataService?: (value: string) => Promise<AutocompleteValue[]>
  /**
   * To be used when using asychronously loaded options.
   *
   * The dataValue specifies the default option to be shown in the component
   *
   * @default ''
   */
  dataValue?: string
  /**
   * The default value for the autocomplete. To be used when the component is not
   * controlled.
   */
  defaultValue?: unknown
  /**
   * Used to determine the spacing surrounding the component. If false, there
   * will be more spacing around the component.
   * @default true
   */
  dense?: boolean
  /**
   * To be used when using asychronously loaded options.
   *
   * The label for the autocomplete field.
   */
  label?: TextFieldProps['label']
  /**
   * To be used when using asychronously loaded options.
   *
   * Show loading text or not.
   * @default false
   */
  showLoadingInfo?: boolean
  /**
   * To be used when using asychronously loaded options.
   *
   * Show progress loader or not.
   * @default true
   */
  showLoader?: boolean
  /**
   * To be used when using asychronously loaded options.
   *
   * Text to be shown when loading options
   * @default 'Loading...'
   */
  loadingText?: MuiAutocompleteProps<any, boolean, boolean, boolean>['loadingText']
  /**
   * To be used when using asychronously loaded options.
   *
   * Fired when the input field is cleared
   */
  onClean?: () => void
  /**
   * To be used when using asychronously loaded options.
   *
   * Fired when an option is selected from the options dropdown
   *
   * A function that accepts a `AutocompleteValue`. The `AutocompleteValue` signature is:
   * `{
   * value: unknown,
   * text: string
   * }`
   *
   */
  onOptionSelect?: (data: AutocompleteValue, reason?: AutocompleteChangeReason) => void
  /**
   * To be used when using asychronously loaded options.
   *
   * Properties for the TextField component.
   */
  TextFieldProps?: AutocompleteTextFieldProps
}

export const Autocomplete: FC<AutocompleteProps> = forwardRef((props, ref) => {
  const {
    dataValue = '',
    dense = true,
    label,
    showLoadingInfo = false,
    showLoader = true,
    dataService,
    onOptionSelect,
    onClean,
    TextFieldProps: { warning = false, ...TextFieldProps } = {},
    ...restProps
  } = props
  const [options, setOptions] = useState<AutocompleteValue[]>([])
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(dataValue)
  const [loading, setLoading] = useState(false)
  const controlledOpen = props.dataService && {
    open: isOptionsOpen,
  }

  const controlledValue = !props.inputValue &&
    !props.onInputChange &&
    !props.options && {
      value: { text: inputValue },
    }
  const classes = useStyles()

  const debouncedSetAutoComplete = useCallback(
    debounce(async (value: string) => {
      if (dataService) {
        setLoading(true)
        if (showLoadingInfo) {
          setIsOptionsOpen(true)
        }
        const availableOptions = await dataService(value)

        if (!showLoadingInfo) {
          setIsOptionsOpen(true)
        }
        setOptions(availableOptions)
        setLoading(false)
      }
    }, 300),
    [dataService, showLoadingInfo]
  )

  const handleChange = (_e: ChangeEvent<unknown>, option: unknown, reason: AutocompleteChangeReason) => {
    if (option) {
      setInputValue((option as AutocompleteValue).text)
      setIsOptionsOpen(false)
      if (onOptionSelect) {
        onOptionSelect(option as AutocompleteValue, reason)
      }
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInputValue(value)
    debouncedSetAutoComplete(value)
    if (!value && onClean) onClean()
  }

  const handleOpen = () => !props.freeSolo && controlledOpen && debouncedSetAutoComplete('')

  const handleClose = () => !props.freeSolo && setIsOptionsOpen(false)

  const handleBlur = () => setIsOptionsOpen(false)

  useEffect(() => {
    setInputValue(dataValue)
  }, [dataValue])
  return (
    <MuiAutocomplete
      ref={ref}
      classes={{
        root: dense ? clsx(classes.root, warning && classes.rootWarning) : undefined,
        popper: classes.popper,
        inputRoot: classes.textRoot,
      }}
      options={options}
      getOptionLabel={(option) => (option as AutocompleteValue).text}
      onChange={handleChange}
      onOpen={handleOpen}
      onClose={handleClose}
      onBlur={handleBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          {...{
            ...TextFieldProps,
            margin: TextFieldProps?.margin || 'normal',
            fullWidth: TextFieldProps?.fullWidth != null ? TextFieldProps.fullWidth : true,
          }}
          classes={{
            root: classes.textRoot,
          }}
          InputProps={{
            ...params.InputProps,
            ...TextFieldProps?.InputProps,
            endAdornment: (
              <>
                {loading && showLoader ? <CircularProgress variant={'indeterminate'} size={23} thickness={6} /> : null}
                {warning ? (
                  <InputAdornment classes={{ root: classes.adornmentWarning }} position="end">
                    <ErrorIcon />
                  </InputAdornment>
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          inputProps={{
            ...params.inputProps,
            ...TextFieldProps?.inputProps,
            'data-testid': props['data-testid'],
          }}
          onChange={handleInputChange}
          label={label}
        />
      )}
      loading={loading}
      autoComplete
      {...controlledOpen}
      {...controlledValue}
      {...restProps}
    />
  )
})
