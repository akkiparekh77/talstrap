import MuiDialogTitle, { DialogTitleProps as MuiDialogTitleProps } from '@material-ui/core/DialogTitle'
import { Close } from '@material-ui/icons'
import { FC, forwardRef, MouseEvent as ReactMouseEvent, ReactNode } from 'react'

import { makeStyles } from '../../styles'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: theme.spacing(6),
    padding: theme.spacing(0, 2),
  },
}))

export interface DialogTitleProps extends MuiDialogTitleProps {
  /**
   * The content of the component.
   */
  children: ReactNode
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: (event: ReactMouseEvent<HTMLButtonElement>) => void
  /**
   * If `true`, the close button will be displayed.
   * @default false
   */
  showClose?: boolean
}

/**
 * This component is based on the `material-ui` DialogTitle.
 *
 * For a more complete list of props, see https://material-ui.com/api/dialog-title/.
 */
export const DialogTitle: FC<DialogTitleProps> = forwardRef((props, ref) => {
  const { children, classes: classesProp, disableTypography = true, onClose, showClose = false, ...other } = props
  const classes = useStyles()

  return (
    <MuiDialogTitle classes={{ ...classes, ...classesProp }} disableTypography={disableTypography} ref={ref} {...other}>
      <Typography variant="subtitle1">{children}</Typography>
      {showClose && (
        <IconButton size="small" color="default" onClick={onClose}>
          <Close />
        </IconButton>
      )}
    </MuiDialogTitle>
  )
})

DialogTitle.displayName = 'DialogTitle'
