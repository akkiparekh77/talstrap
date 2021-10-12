import MuiCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import { FC, forwardRef } from 'react'

/**
 * This component is based on the `material-ui` Checkbox.
 *
 * For a more complete list of props, see https://material-ui.com/api/checkbox/
 */
export const Checkbox: FC<CheckboxProps> = forwardRef(({ children, color = 'primary', ...rest }, ref) => {
  return <MuiCheckbox ref={ref} color={color} {...rest} />
})
Checkbox.displayName = 'Checkbox'
