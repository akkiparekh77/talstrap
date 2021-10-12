import { AnchorHTMLAttributes, FC, forwardRef } from 'react'

import { Button, ButtonProps } from './Button'

export type ButtonAnchorProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonAnchor: FC<ButtonAnchorProps> = forwardRef((props, ref) => (
  // TODO: remove after the ff. issue is fixed in material-ui
  // 'component' prop is not recognized by TypeScript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Button component="a" ref={ref} {...props} />
))

ButtonAnchor.displayName = 'ButtonAnchor'
