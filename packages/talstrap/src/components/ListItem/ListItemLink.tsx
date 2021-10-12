import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import { FC, forwardRef } from 'react'

import { Link, LinkProps } from '../Link'

export type ListItemLinkProps = ListItemProps & LinkProps

export const ListItemLink: FC<ListItemLinkProps> = forwardRef((props, ref) => (
  // TODO: remove after the ff. issue is fixed in material-ui
  // 'component' prop is not recognized by TypeScript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <ListItem component={Link} ref={ref} {...props} />
))

ListItemLink.displayName = 'ListItemLink'
