import { FC } from 'react'

import { Link, LinkProps } from '../Link'
import { SidebarItem, SidebarItemProps } from './SidebarItem'

export type SidebarItemLinkProps = SidebarItemProps & LinkProps

export const SidebarItemLink: FC<SidebarItemLinkProps> = ({ ...props }) => <SidebarItem component={Link} {...props} />
