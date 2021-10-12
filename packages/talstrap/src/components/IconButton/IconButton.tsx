import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton'
import { FC, forwardRef, ReactNode } from 'react'

export interface IconButtonProps extends MuiIconButtonProps {
  /**
   * The icon element.
   */
  children: ReactNode
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: MuiIconButtonProps['disabled']
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with
   * content above or below, without ruining the border size and shape).
   * @default false
   */
  edge?: MuiIconButtonProps['edge']
  /**
   * The size of the button. small is equivalent to the dense button styling.
   * @default "medium"
   */
  size?: MuiIconButtonProps['size']
}

/**
 * This component is based on the `material-ui` IconButton.
 *
 * For a more complete list of props, see https://material-ui.com/api/icon-button/.
 */
export const IconButton: FC<IconButtonProps> = forwardRef((props, ref) => {
  const { children, className, color = 'primary', disabled = false, edge = false, size = 'medium', ...other } = props

  return (
    <MuiIconButton className={className} color={color} disabled={disabled} edge={edge} size={size} ref={ref} {...other}>
      {children}
    </MuiIconButton>
  )
})

IconButton.displayName = 'IconButton'
