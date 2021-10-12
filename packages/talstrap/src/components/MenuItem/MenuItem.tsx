import MuiMenuItem, { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem'
import { ChevronRight } from '@material-ui/icons'
import clsx from 'clsx'
import { FC, forwardRef } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Checkbox } from '../Checkbox'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    minHeight: theme.spacing(6),
    color: theme.palette.menu.default,
    fontSize: theme.typography.body2.fontSize,
    letterSpacing: theme.typography.body2.letterSpacing,
  },
  dense: {
    minHeight: theme.spacing(5),
  },
  icon: {
    position: 'absolute',
    right: theme.spacing(1.5),
    height: '1.125rem',
    width: '1.125rem',
  },
  cascaded: {
    paddingRight: theme.spacing(4),
  },
  selected: {
    color: theme.palette.menu.selected,
  },
  typography: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(-0.25, 0.5, -0.25, -0.5),
  },
}))

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * If `true`, the menu item will show an arrow on the right side.
   */
  cascaded?: boolean
  /**
   * The content of the component.
   */
  children?: MuiMenuItemProps['children']
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   * @default true
   */
  dense?: MuiMenuItemProps['dense']
  /**
   * If `true`, the menu item will be selected.
   * @default false
   */
  selected?: MuiMenuItemProps['selected']
  /**
   * If `true`, the menu item will show an checkbox on the left side.
   */
  showCheckbox?: boolean
}

/**
 * This component is based on the `material-ui` MenuItem.
 *
 * For a more complete list of props, see https://material-ui.com/api/menu-item/.
 */
export const MenuItem: FC<MenuItemProps> = forwardRef((props, ref) => {
  const {
    cascaded,
    children,
    classes: classesProp,
    className,
    dense = true,
    selected = false,
    showCheckbox,
    button, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...other
  } = props
  const classes = useStyles()

  return (
    <MuiMenuItem
      classes={{
        root: clsx(classes.root, { [classes.cascaded]: cascaded }, className),
        dense: classes.dense,
        selected: classes.selected,
        ...classesProp,
      }}
      dense={dense}
      selected={selected}
      ref={ref}
      {...other}
    >
      {showCheckbox && <Checkbox color="primary" checked={selected} className={classes.checkbox} />}
      {children}
      {cascaded && <ChevronRight className={classes.icon} />}
    </MuiMenuItem>
  )
})

MenuItem.displayName = 'MenuItem'
