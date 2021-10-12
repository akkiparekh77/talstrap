import MuiTabContext, { TabContextProps as MuiTabContextProps } from '@material-ui/lab/TabContext'
import { FC } from 'react'

export interface TabContextProps extends MuiTabContextProps {
  /**
   * The value of the currently selected Tab.
   */
  value: MuiTabContextProps['value']
}

export const TabContext: FC<TabContextProps> = (props) => <MuiTabContext {...props} />
