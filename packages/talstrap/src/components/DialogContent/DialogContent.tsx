import MuiDialogContent, { DialogContentProps as MuiDialogContentProps } from '@material-ui/core/DialogContent'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles } from '../../styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    '&:first-child': {
      paddingTop: theme.spacing(2),
    },
  },
  dividers: {
    padding: theme.spacing(2),
  },
}))

export interface DialogContentProps extends MuiDialogContentProps {
  /**
   * The content of the component.
   */
  children: ReactNode
}

/**
 * This component is based on the `material-ui` DialogContent.
 *
 * For a more complete list of props, see https://material-ui.com/api/dialog-content/.
 */
export const DialogContent: FC<DialogContentProps> = forwardRef((props, ref) => {
  const { children, classes: classesProp, dividers = true, ...other } = props
  const classes = useStyles()

  return (
    <MuiDialogContent classes={{ ...classes, ...classesProp }} dividers={dividers} ref={ref} {...other}>
      {children}
    </MuiDialogContent>
  )
})

DialogContent.displayName = 'DialogContent'
