import { useMediaQuery } from '@material-ui/core'
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@material-ui/pickers'
import { FC, forwardRef, MouseEvent as ReactMouseEvent, useState } from 'react'

import { useTheme } from '../../styles'
import { DatePickerContext } from './DatePickerContext'
import { DatePickerTextField } from './DatePickerTextField'

export const DATE_FORMAT = 'dd MMM yyyy'

export interface DatePickerProps extends MuiDatePickerProps {
  /**
   * If `true`, automatically accept date on selection.
   * @default true
   */
  autoOk?: MuiDatePickerProps['autoOk']
  /**
   * Disable future dates
   */
  disableFuture?: MuiDatePickerProps['disableFuture']
  /**
   * Disable past dates
   */
  disablePast?: MuiDatePickerProps['disablePast']
  /**
   * Format string
   * @default "dd MMM yyyy"
   */
  format?: MuiDatePickerProps['format']
  /**
   * The id of the input element.
   * Use this prop to make label and helperText accessible for screen readers.
   */
  inputId?: string
  /**
   * The label for the `DatePicker` input field.
   */
  label?: string
  /**
   * If `dense` or `normal`, will adjust vertical margins of this component.
   * In addition, setting this prop to `dense` will automatically render a dense input.
   */
  margin?: 'none' | 'normal' | 'dense'
  /**
   * Function called when a date is selected. Use to set value.
   */
  onChange: MuiDatePickerProps['onChange']
  /**
   * A function which is called when clicking the clear button.
   * Can be used to reset the value of the `DatePicker`.
   */
  onClear: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void
  /**
   * The value of the date picker.
   */
  value: MuiDatePickerProps['value']
  /**
   * The variant of the DatePicker. Defaults to "inline" for desktop and "dialog" for mobile.
   * @default "inline"
   */
  variant?: MuiDatePickerProps['variant']
}

/**
 * This component is based on the `material-ui` DatePicker.
 * The props of the TextField component can also be used.
 *
 * For a more complete list of props, see https://material-ui-pickers.dev/api/DatePicker.
 */
export const DatePicker: FC<DatePickerProps> = forwardRef(({
  autoOk = true,
  format = DATE_FORMAT,
  inputId,
  onClear,
  readOnly,
  value,
  variant,
  ...other
}, ref) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const defaultVariant = isMobile ? 'dialog' : 'inline'
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleClear = (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClear(event)
    event.stopPropagation()
  }

  return (
    <DatePickerContext.Provider value={{ inputId, isOpen, readOnly, handleOpen, handleClear }}>
      <MuiDatePicker
        PopoverProps={{
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          transformOrigin: { vertical: 'top', horizontal: 'left' },
          disableEnforceFocus: isOpen,
        }}
        DialogProps={{
          disableEnforceFocus: isOpen,
        }}
        ref={ref}
        variant={variant || defaultVariant}
        autoOk={autoOk}
        format={format}
        readOnly={readOnly} // From @material-ui/pickers, supported but not included in Storybook documentation
        value={value || null}
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        TextFieldComponent={DatePickerTextField as MuiDatePickerProps['TextFieldComponent']}
        {...other}
      />
    </DatePickerContext.Provider>
  )
})

DatePicker.displayName = "DatePicker"
