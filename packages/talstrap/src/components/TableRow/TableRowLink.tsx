import TableRow, { TableRowProps } from '@material-ui/core/TableRow'
import { FC } from 'react'

import { Link, LinkProps } from '../Link'

export type TableRowLinkProps = TableRowProps & LinkProps

export const TableRowLink: FC<TableRowLinkProps> = ({ ...props }) => <TableRow component={Link} {...props} />
