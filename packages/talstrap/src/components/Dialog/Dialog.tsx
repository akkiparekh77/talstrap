import MuiDialog, { DialogProps as MuiDialogProps } from '@material-ui/core/Dialog'
import { rgba } from 'polished'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles } from '../../styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: rgba(theme.palette.text.primary, 0.7),
  },
  paperWidthXs: {
    maxWidth: 480,
  },
}))

export interface DialogProps extends MuiDialogProps {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: ReactNode
  /**
   * If `true`, the dialog stretches to maxWidth.
   * Notice that the dialog width grow is limited by the default margin.
   * @default true
   */
  fullWidth?: MuiDialogProps['fullWidth']
  /**
   * Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
   * @default "xs"
   */
  maxWidth?: MuiDialogProps['maxWidth']
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: MuiDialogProps['onClose']
  /**
   * If `true`, the Dialog is open.
   */
  open: MuiDialogProps['open']
}

/**
 * This component is based on the `material-ui` Dialog.
 *
 * For a more complete list of props, see https://material-ui.com/api/dialog/.
 */
export const Dialog: FC<DialogProps> = forwardRef((props, ref) => {
  const { children, classes: classesProp, fullWidth = true, maxWidth = 'xs', ...other } = props
  const classes = useStyles()

  return (
    <MuiDialog classes={{ ...classes, ...classesProp }} fullWidth={fullWidth} maxWidth={maxWidth} ref={ref} {...other}>
      {children}
    </MuiDialog>
  )
})

Dialog.displayName = 'Dialog'
