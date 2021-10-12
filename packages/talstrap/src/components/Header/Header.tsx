import clsx from 'clsx'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'
import { AppBar, AppBarProps } from '../AppBar'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: theme.spacing(6),
    boxShadow: theme.shadows[0],
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.header.background,
    color: theme.palette.primary.contrastText,
  },
}))

export interface HeaderProps extends AppBarProps {
  /**
   * The content of the component.
   */
  children: AppBarProps['children']
}

/**
 * This component is based on the `material-ui` AppBar.
 *
 * For a more complete list of props, see https://material-ui.com/api/app-bar/.
 */
export const Header: FC<HeaderProps> = ({
  children,
  className: classNameProp,
  component = 'header',
  position = 'static',
  ...other
}) => {
  const classes = useStyles()

  return (
    <AppBar className={clsx(classes.root, classNameProp)} component={component} position={position} {...other}>
      {children}
    </AppBar>
  )
}
