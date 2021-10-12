import MuiDialogContentText, {
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@material-ui/core/DialogContentText'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles } from '../../styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2.5),
    lineHeight: '1.25rem',
  },
}))

export interface DialogContentTextProps extends MuiDialogContentTextProps {
  /**
   * The content of the component.
   */
  children: ReactNode
}

/**
 * This component is based on the `material-ui` DialogContentText.
 *
 * For a more complete list of props, see https://material-ui.com/api/dialog-content-text/.
 */
export const DialogContentText: FC<DialogContentTextProps> = forwardRef((props, ref) => {
  const { children, classes: classesProp, ...other } = props
  const classes = useStyles()

  return (
    <MuiDialogContentText classes={{ ...classes, ...classesProp }} color="textPrimary" ref={ref} {...other}>
      {children}
    </MuiDialogContentText>
  )
})

DialogContentText.displayName = 'DialogContentText'
