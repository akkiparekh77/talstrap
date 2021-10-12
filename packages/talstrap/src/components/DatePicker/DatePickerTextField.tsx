import { omit } from 'lodash-es'
import { forwardRef, useContext } from 'react'

import { CloseIcon, InsertInvitationIcon } from '../../icons'
import { IconButton } from '../IconButton'
import { TextField, TextFieldProps } from '../TextField'
import { DatePickerContext } from './DatePickerContext'

export interface DatePickerTextFieldProps extends TextFieldProps {}

export const DatePickerTextField = forwardRef<HTMLDivElement, DatePickerTextFieldProps>((props, ref) => {
  const { inputId, isOpen, readOnly, handleOpen, handleClear } = useContext(DatePickerContext)
  const { value, disabled } = props

  return (
    <TextField
      {...omit(props, ['DialogProps', 'PopoverProps'])} // prevent console error due to some DatePicker props being passed on to TextField
      {...(isOpen && { InputLabelProps: { shrink: true } })}
      InputProps={{
        endAdornment: (
          <IconButton
            onClick={value ? handleClear : handleOpen}
            size="small"
            color="default"
            edge="end"
            disabled={disabled || readOnly}
          >
            {value && !disabled && !readOnly ? <CloseIcon /> : <InsertInvitationIcon />}
          </IconButton>
        ),
      }}
      id={inputId}
      ref={ref}
    />
  )
})

DatePickerTextField.displayName = 'DatePickerTextField'
