import MuiCardContent, { CardContentProps as MuiCardContentProps } from '@material-ui/core/CardContent'
import clsx from 'clsx'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles, Theme } from '../../styles'

const useStyles = makeStyles<Theme>((theme) => ({
  cardText: {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: '1.4',
    padding: theme.spacing(2),
  },
  paddingNone: {
    padding: theme.spacing(2, 0),
  },
}))

export interface CardContentProps extends MuiCardContentProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * Padding normal/none decides what kind of padding will appear on the component
   */
  padding?: 'none' | 'normal'
}

/**
 * This component is based on the `material-ui` CardContent.
 *
 * For a more complete list of props, see https://material-ui.com/api/card-content/
 */
export const CardContent: FC<CardContentProps> = forwardRef(
  ({ children, className, padding = 'normal', ...rest }, ref) => {
    const classes = useStyles()
    return (
      <MuiCardContent
        ref={ref}
        className={clsx(classes.cardText, { [classes.paddingNone]: padding === 'none' }, className)}
        {...rest}
      >
        {children}
      </MuiCardContent>
    )
  }
)
CardContent.displayName = 'CardContent'
