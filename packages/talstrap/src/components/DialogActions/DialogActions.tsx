import MuiDialogActions, { DialogActionsProps as MuiDialogActionsProps } from '@material-ui/core/DialogActions'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles } from '../../styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(6),
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.background.default,
  },
}))

export interface DialogActionsProps extends MuiDialogActionsProps {
  /**
   * The content of the component.
   */
  children: ReactNode
}

/**
 * This component is based on the `material-ui` DialogActions.
 *
 * For a more complete list of props, see https://material-ui.com/api/dialog-actions/.
 */
export const DialogActions: FC<DialogActionsProps> = forwardRef((props, ref) => {
  const { children, classes: classesProp, ...other } = props
  const classes = useStyles()

  return (
    <MuiDialogActions classes={{ ...classes, ...classesProp }} ref={ref} {...other}>
      {children}
    </MuiDialogActions>
  )
})

DialogActions.displayName = 'DialogActions'
