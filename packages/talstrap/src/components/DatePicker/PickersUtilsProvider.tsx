import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider'
import { FC } from 'react'

import { GlobalDatePickerCssOverride } from './GlobalDatePickerCssOverride'

export interface PickersUtilsProviderProps extends MuiPickersUtilsProviderProps {}

export const PickersUtilsProvider: FC<PickersUtilsProviderProps> = ({ children, ...props }) => (
  <MuiPickersUtilsProvider {...props}>
    <GlobalDatePickerCssOverride />
    {children}
  </MuiPickersUtilsProvider>
)
