import Fab, { FabProps } from '@material-ui/core/Fab'
import { FC, forwardRef } from 'react'

import { Link, LinkProps } from '../Link'

export type FabLinkProps = FabProps & LinkProps

export const FabLink: FC<FabLinkProps> = forwardRef((props, ref) => <Fab component={Link} ref={ref} {...props} />)

FabLink.displayName = 'FabLink'
