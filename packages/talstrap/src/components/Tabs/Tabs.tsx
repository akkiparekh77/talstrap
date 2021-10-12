import { Omit } from '@material-ui/core'
import MuiTabs, { TabsProps as MuiTabsProps } from '@material-ui/core/Tabs'
import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'

import { makeStyles, Theme } from '../../styles'

type StyleProps = Pick<TabsProps, 'value' | 'divider'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ divider }) => ({
    minHeight: theme.spacing(5),
    width: '100%',
    borderBottom: divider ? `1px solid ${theme.palette.divider}` : 'none',
  }),
  indicator: (props) => ({
    display: props.value === false ? 'none' : 'inline-block',
    height: 0,
    borderRadius: '4px 4px 1px 1px',
    borderLeft: '1px solid transparent',
    borderRight: '1px solid transparent',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  }),
}))

export interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: ChangeEvent<unknown>, value: MuiTabsProps['value']) => void
  /**
   * The value of the currently selected Tab. If you don't want any selected Tab, you can set this property to `false`.
   */
  value: MuiTabsProps['value']
  /**
   * If true, a 1px light border is added to the bottom of the tabs
   *
   * @default false
   */
  divider?: boolean
}

/**
 * This component is based on the `material-ui` Tabs.
 *
 * For a more complete list of props, see https://material-ui.com/api/tabs/.
 */
export const Tabs: FC<TabsProps> = ({ value, divider = false, classes: defaultClasses, ...other }) => {
  const classes = useStyles({ value, divider })

  return (
    <MuiTabs
      classes={{
        ...defaultClasses,
        root: clsx(classes.root, defaultClasses?.root),
        indicator: clsx(classes.indicator, defaultClasses?.indicator),
      }}
      value={value}
      {...other}
    />
  )
}
