import { FC, forwardRef } from 'react'

import { Link, LinkProps } from '../Link'
import { MenuItem, MenuItemProps } from './MenuItem'

export type MenuItemLinkProps = MenuItemProps & LinkProps

export const MenuItemLink: FC<MenuItemLinkProps> = forwardRef((props, ref) => (
  <MenuItem component={Link} ref={ref} {...props} />
))

MenuItemLink.displayName = 'MenuItemLink'
