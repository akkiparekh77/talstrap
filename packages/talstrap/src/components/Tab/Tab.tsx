import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab'
import clsx from 'clsx'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    minHeight: theme.spacing(5),
    minWidth: 0,
    width: 'auto',
    padding: theme.spacing(0, 2),
    color: theme.palette.text.primary,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    letterSpacing: '0.061429em',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'visible',
  },
  selected: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  disabled: {
    color: theme.palette.action.disabled,
  },
  textColorInherit: {
    opacity: 1,
    '&$disabled': {
      opacity: 1,
    },
  },
}))

export interface TabProps extends MuiTabProps {
  /**
   * If `true`, the tab will be disabled.
   */
  disabled?: MuiTabProps['disabled']
  /**
   * The label element.
   */
  label?: MuiTabProps['label']
  /**
   * If `true`, the tab will be selected. When Tab is used inside Tabs, this prop is automatically set by the Tabs component based on the value.
   */
  selected?: MuiTabProps['selected']
  /**
   * 	You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value?: MuiTabProps['value']
}

/**
 * This component is based on the `material-ui` Tab.
 *
 *  For a more complete list of props, see https://material-ui.com/api/tab/.
 */
export const Tab: FC<TabProps> = ({ classes: defaultClasses, ...other }) => {
  const classes = useStyles()

  return (
    <MuiTab
      classes={{
        ...defaultClasses,
        root: clsx(classes.root, defaultClasses?.root),
        selected: clsx(classes.selected, defaultClasses?.selected),
        disabled: clsx(classes.disabled, defaultClasses?.disabled),
        textColorInherit: clsx(classes.textColorInherit, defaultClasses?.textColorInherit),
      }}
      {...other}
    />
  )
}
