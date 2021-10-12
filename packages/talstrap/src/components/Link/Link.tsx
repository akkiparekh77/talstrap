import { forwardRef } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

export type LinkProps = RouterLinkProps

export const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
))

Link.displayName = 'Link' // workaround for TS compilation error
