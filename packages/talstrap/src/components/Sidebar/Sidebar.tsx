import { CSSProperties } from '@material-ui/styles'
import clsx from 'clsx'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Drawer, DrawerProps } from '../Drawer'

type StyleProps = Pick<SidebarProps, 'expandedWidth' | 'position'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: (props) => ({
    boxSizing: 'border-box',
    position: props.position,
    backgroundColor: theme.palette.background.default,
    width: theme.spacing(8) + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  expanded: (props) => ({
    width: props.expandedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  temporary: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export interface SidebarProps extends DrawerProps {
  /**
   * If `true`, the sidebar will be expanded. Has no effect when variant is `temporary`.
   */
  expanded?: boolean
  /**
   * The width of the sidebar when it is expanded.
   * @default 240
   */
  expandedWidth?: CSSProperties['width']
  /**
   * If `true`, the sidebar will be open. Has no effect when variant is `permanent`.
   */
  open: DrawerProps['open']
  /**
   * The positioning type.
   * @default "fixed"
   */
  position?: CSSProperties['position']
  /**
   * The variant to use.
   * @default "permanent"
   */
  variant?: DrawerProps['variant']
}

/**
 * This component is based on the `material-ui` Drawer.
 *
 * For a more complete list of props, see https://material-ui.com/api/drawer/.
 */
export const Sidebar: FC<SidebarProps> = ({
  classes: classesProp = {},
  expanded,
  expandedWidth = 240,
  open,
  position = 'fixed',
  variant = 'permanent',
  ...other
}) => {
  const classes = useStyles({ expandedWidth, position })
  const { paper, ...otherClasses } = classesProp

  return (
    <Drawer
      classes={{
        paper: clsx(
          classes.root,
          {
            [classes.expanded]: expanded,
            [classes.temporary]: variant === 'temporary',
          },
          paper
        ),
        ...otherClasses,
      }}
      open={open}
      variant={variant}
      PaperProps={{
        component: 'aside',
      }}
      {...other}
    />
  )
}
