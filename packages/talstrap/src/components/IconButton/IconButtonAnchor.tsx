import { AnchorHTMLAttributes, FC, forwardRef } from 'react'

import { IconButton, IconButtonProps } from './IconButton'

export type IconButtonAnchorProps = IconButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const IconButtonAnchor: FC<IconButtonAnchorProps> = forwardRef((props, ref) => (
  // TODO: remove after the ff. issue is fixed in material-ui
  // 'component' prop is not recognized by TypeScript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <IconButton component="a" ref={ref} {...props} />
))

IconButtonAnchor.displayName = 'IconButtonAnchor'
