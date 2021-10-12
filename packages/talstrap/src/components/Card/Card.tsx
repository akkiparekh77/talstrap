import MuiCard, { CardProps as MuiCardProps } from '@material-ui/core/Card'
import { FC, forwardRef, ReactNode } from 'react'

export interface CardProps extends MuiCardProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * If `true`, the card will use raised styling.
   */
  raised?: boolean
}

/**
 * This component is based on the `material-ui` Card.
 *
 * For a more complete list of props, see https://material-ui.com/api/card/
 */
export const Card: FC<CardProps> = forwardRef((props, ref) => {
  return <MuiCard ref={ref} {...props} />
})
Card.displayName = 'Card'
