import MuiCardActions, { CardActionsProps as MuiCardActionsProps } from '@material-ui/core/CardActions'
import clsx from 'clsx'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles, Theme } from '../../styles'

const useStyles = makeStyles<Theme>((theme) => ({
  cardActions: {
    borderTop: `1px solid ${theme.palette.grey['300']}`,
    paddingRight: theme.spacing(2),
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.background.default,
  },
}))

export interface CardActionsProps extends MuiCardActionsProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean
}

/**
 * This component is based on the `material-ui` CardActions.
 *
 * For a more complete list of props, see https://material-ui.com/api/card-actions/
 */
export const CardActions: FC<CardActionsProps> = forwardRef(({ children, className, ...rest }, ref) => {
  const classes = useStyles()
  return (
    <MuiCardActions ref={ref} className={clsx(classes.cardActions, className)} {...rest}>
      {children}
    </MuiCardActions>
  )
})
CardActions.displayName = 'CardActions'
