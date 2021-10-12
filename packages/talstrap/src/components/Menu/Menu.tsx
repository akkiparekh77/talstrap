import MuiMenu, { MenuProps as MuiMenuProps } from '@material-ui/core/Menu'
import { CSSProperties } from '@material-ui/styles'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'

type StyleProps = Pick<MenuProps, 'width'>

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  paper: (props) => ({
    width: props.width,
  }),
}))

export interface MenuProps extends MuiMenuProps {
  /**
   * The width of the menu.
   * @default 200
   */
  width?: CSSProperties['width']
}

/**
 * This component is based on the `material-ui` Menu.
 *
 * For a more complete list of props, see https://material-ui.com/api/menu/.
 */
export const Menu: FC<MenuProps> = ({
  classes: classesProp,
  elevation = 2,
  MenuListProps,
  variant = 'menu',
  width = 200,
  ...other
}) => {
  const classes = useStyles({ width })

  return (
    <MuiMenu
      classes={{
        paper: classes.paper,
        ...classesProp,
      }}
      elevation={elevation}
      MenuListProps={{ disablePadding: true, ...MenuListProps }}
      variant={variant}
      {...other}
    />
  )
}
