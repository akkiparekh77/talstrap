import { AnchorHTMLAttributes, FC, forwardRef } from 'react'

import { MenuItem, MenuItemProps } from './MenuItem'

export type MenuItemAnchorProps = MenuItemProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const MenuItemAnchor: FC<MenuItemAnchorProps> = forwardRef((props, ref) => (
  // TODO: remove after the ff. issue is fixed in material-ui
  // 'component' prop is not recognized by TypeScript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <MenuItem component="a" ref={ref} {...props} />
))

MenuItemAnchor.displayName = 'MenuItemAnchor'
