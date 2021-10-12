import MuiTabPanel, { TabPanelProps as MuiTabPanelProps } from '@material-ui/lab/TabPanel'
import clsx from 'clsx'
import { FC, forwardRef } from 'react'

import { makeStyles, Theme } from '../../styles'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 0),
  },
}))

export interface TabPanelProps extends MuiTabPanelProps {
  /**
   * The value of the corresponding Tab. Must use the index of the Tab when no value was passed to Tab
   */
  value: MuiTabPanelProps['value']
}

/**
 * This component is based on the `material-ui` TabPanel.
 *
 * For a more complete list of props, see https://material-ui.com/api/tab-panel
 */
export const TabPanel: FC<TabPanelProps> = forwardRef(({ className, ...rest }, ref) => {
  const classes = useStyles()
  return <MuiTabPanel className={clsx(classes.root, className)} ref={ref} {...rest} />
})

TabPanel.displayName = 'TabPanel'
