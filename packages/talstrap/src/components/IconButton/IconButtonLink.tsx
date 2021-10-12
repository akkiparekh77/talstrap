import { FC, forwardRef } from 'react'

import { Link, LinkProps } from '../Link'
import { IconButton, IconButtonProps } from './IconButton'

export type IconButtonLinkProps = IconButtonProps & LinkProps

export const IconButtonLink: FC<IconButtonLinkProps> = forwardRef((props, ref) => (
  <IconButton component={Link} ref={ref} {...props} />
))

IconButtonLink.displayName = 'IconButtonLink'
