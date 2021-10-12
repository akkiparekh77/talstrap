import { createContext, MouseEvent as ReactMouseEvent } from 'react'

interface DatePickerContextProps {
  inputId?: string
  isOpen?: boolean
  readOnly?: boolean
  handleOpen?: () => void
  handleClear?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void
}

/**
 * Used to pass custom props to the DatePickerTextField.
 * This was done because the refs were not being passed properly when using a render function
 * as the TextFieldComponent prop of DatePicker instead of the component itself. The calendar
 * popup for the "inline" variant did not attach correctly to the input element because of this issue.
 */
export const DatePickerContext = createContext<DatePickerContextProps>({})
