import { Omit } from '@material-ui/core'
import MuiTextField, { OutlinedTextFieldProps as MuiOutlinedTextFieldProps } from '@material-ui/core/TextField'
import { Error as ErrorIcon } from '@material-ui/icons'
import { FC, forwardRef, useEffect, useRef } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Box } from '../Box'

type StyleProps = Pick<TextFieldProps, 'dense' | 'error' | 'fullWidth' | 'multiline' | 'select' | 'disableSpinners'>

const useTextFieldStyles = makeStyles<Theme, StyleProps>(() => ({
  root: ({ fullWidth }) => ({
    ...(fullWidth ? {} : { width: '328px' }),
  }),
}))

const useSelectStyles = makeStyles<Theme, StyleProps>(() => ({
  selectMenu: ({ error }) => ({
    '&$selectMenu': error ? { paddingRight: '55px' } : {},
  }),
}))

const useInputStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ error, select, disableSpinners }) => ({
    ...(error && select ? { paddingRight: 0 } : {}),
    ...(disableSpinners
      ? {
          '& input::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none !important',
            margin: 0,
          },
          '& input::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none !important',
            margin: 0,
          },
        }
      : {}),
    '&$focused': {
      caretColor: theme.palette.primary.main,
    },
  }),
  focused: () => ({}),
  disabled: {
    color: theme.palette.action.disabled,
    backgroundColor: theme.palette.action.disabledBackground,
  },
  input: ({ dense, multiline, error }) => ({
    ...(dense || multiline ? {} : { paddingTop: '14.5px', paddingBottom: '14.5px' }),
    ...(error ? { paddingRight: '35px' } : {}),
  }),
  multiline: {
    paddingTop: '14.5px',
    paddingBottom: '14.5px',
  },
  notchedOutline: {
    borderColor: theme.palette.text.hint,
  },
  errorEndAdornment: ({ select }) => ({
    position: 'absolute',
    right: theme.spacing(1.75),
    ...(select ? { marginRight: theme.spacing(2) } : {}),
  }),
  errorIcon: {
    color: theme.palette.error.main,
    pointerEvents: 'none',
  },
}))

const useInputLabelStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ error }) => ({
    transform: 'translate(14px, 18px)',
    fontWeight: theme.typography.fontWeightLight,
    '&$focused': {
      ...(error ? {} : { color: theme.palette.primary.main }),
    },
  }),
  focused: () => ({}),
  asterisk: {
    color: theme.palette.error.main,
  },
}))

const useFormHelperTextStyles = makeStyles<Theme>((theme) => ({
  root: {
    marginTop: theme.spacing(0.5),
    fontWeight: theme.typography.fontWeightLight,
    lineHeight: '1rem',
  },
}))

export interface TextFieldProps extends Omit<MuiOutlinedTextFieldProps, 'variant'> {
  /**
   * If `true`, will adjust vertical spacing.
   */
  dense?: boolean
  /**
   * If this is true, no spinners will show up if the input is of type=number
   * @default false
   */
  disableSpinners?: boolean
  /**
   * If `true`, the `input` element will be disabled.
   * @default false
   */
  disabled?: MuiOutlinedTextFieldProps['disabled']
  /**
   * If `true`, the label will be displayed in an error state.
   * @default false
   */
  error?: MuiOutlinedTextFieldProps['error']
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: MuiOutlinedTextFieldProps['fullWidth']
  /**
   * The helper text content.
   */
  helperText?: MuiOutlinedTextFieldProps['helperText']
  /**
   * The label content.
   */
  label?: MuiOutlinedTextFieldProps['label']
  /**
   * If `dense` or `normal`, will adjust vertical margins of this component.
   * In addition, setting this prop to `dense` will automatically render a dense input.
   */
  margin?: MuiOutlinedTextFieldProps['margin']
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   * @default false
   */
  multiline?: MuiOutlinedTextFieldProps['multiline']
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: MuiOutlinedTextFieldProps['placeholder']
  /**
   * If `true`, the label is displayed as required and the `input` element will be required.
   * @default false
   */
  required?: MuiOutlinedTextFieldProps['required']
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: MuiOutlinedTextFieldProps['rows']
  /**
   * Render a `Select` element while passing the Input element to `Select` as `input` parameter. If this option is set you must pass the options of the select as children.
   * @default false
   */
  select?: MuiOutlinedTextFieldProps['select']
}

/**
 * This component is based on the `material-ui` TextField.
 *
 * For a more complete list of props, see https://material-ui.com/api/text-field/.
 */
export const TextField: FC<TextFieldProps> = forwardRef((props, ref) => {
  const {
    children,
    disableSpinners,
    dense,
    error,
    fullWidth,
    inputRef,
    margin,
    multiline,
    select,
    type,
    InputProps,
    SelectProps = {},
    InputLabelProps,
    FormHelperTextProps,
    rows = 3,
    ...other
  } = props
  const TextFieldClasses = useTextFieldStyles({ fullWidth })
  const InputClasses = useInputStyles({ dense: dense || margin === 'dense', multiline, select, error, disableSpinners })
  const SelectClasses = useSelectStyles({ error })
  const InputLabelClasses = useInputLabelStyles({ error })
  const FormHelperTextClasses = useFormHelperTextStyles()

  const textFieldRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleWheel = (event: Event) => event.preventDefault()
    if (textFieldRef && textFieldRef.current && type === 'number') {
      textFieldRef.current.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (textFieldRef && textFieldRef.current) {
        textFieldRef.current.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <MuiTextField
      {...other}
      classes={{
        root: TextFieldClasses.root,
      }}
      InputProps={{
        ...InputProps,
        classes: {
          root: InputClasses.root,
          focused: InputClasses.focused,
          disabled: InputClasses.disabled,
          input: InputClasses.input,
          multiline: InputClasses.multiline,
          notchedOutline: InputClasses.notchedOutline,
        },
        ...(error
          ? {
              endAdornment: (
                <Box display="flex" alignItems="center" className={InputClasses.errorEndAdornment}>
                  <ErrorIcon className={InputClasses.errorIcon} />
                  {InputProps?.endAdornment}
                </Box>
              ),
            }
          : {}),
        margin: dense || margin === 'dense' ? 'dense' : 'none',
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          selectMenu: SelectClasses.selectMenu,
        },
        MenuProps: {
          ...SelectProps.MenuProps,
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          MenuListProps: {
            ...(SelectProps.MenuProps ? SelectProps.MenuProps.MenuListProps : {}),
            disablePadding: true,
          },
        },
      }}
      InputLabelProps={{
        ...InputLabelProps,
        classes: {
          root: InputLabelClasses.root,
          focused: InputLabelClasses.focused,
          asterisk: InputLabelClasses.asterisk,
        },
        margin: dense || margin === 'dense' ? 'dense' : undefined,
      }}
      FormHelperTextProps={{
        ...FormHelperTextProps,
        classes: {
          root: FormHelperTextClasses.root,
        },
      }}
      rows={rows}
      type={type}
      error={error}
      fullWidth={fullWidth}
      margin={margin}
      multiline={multiline}
      select={select}
      ref={type === 'number' ? textFieldRef : ref}
      inputRef={inputRef}
      variant="outlined"
    >
      {children}
    </MuiTextField>
  )
})

TextField.displayName = 'TextField' // workaround for TS compilation error
