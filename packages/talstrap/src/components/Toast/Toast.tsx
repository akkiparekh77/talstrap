import { makeStyles, Omit, Snackbar, Theme } from '@material-ui/core'
import { SnackbarProps } from '@material-ui/core/Snackbar'
import { FC } from 'react'

import { StatusBox } from './../StatusBox'

const useStyles = makeStyles((theme: Theme) => ({
  statusBox: {
    padding: theme.spacing(0.125, 1.5),
    borderRadius: 2,
    minWidth: 600,
  },
}))
export type ToastVariant = 'info' | 'success' | 'error' | 'warning'

export interface Toast extends Omit<SnackbarProps, 'classes'> {
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: () => void
  /**
   * The variant to use.
   */
  variant: ToastVariant
}

export const Toast: FC<Toast> = ({
  onClose,
  variant = 'info' as ToastVariant,
  message,
  className,
  children,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Snackbar onClose={onClose} {...rest}>
      <StatusBox
        variant={variant}
        onClose={onClose}
        icon={true}
        classes={{
          root: classes.statusBox,
        }}
      >
        {message}
      </StatusBox>
    </Snackbar>
  )
}
