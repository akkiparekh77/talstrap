import { FC, forwardRef } from 'react'

import { Link, LinkProps } from '../Link'
import { Button, ButtonProps } from './Button'

export type ButtonLinkProps = ButtonProps & LinkProps

export const ButtonLink: FC<ButtonLinkProps> = forwardRef((props, ref) => (
  <Button component={Link} ref={ref} {...props} />
))

ButtonLink.displayName = 'ButtonLink'
