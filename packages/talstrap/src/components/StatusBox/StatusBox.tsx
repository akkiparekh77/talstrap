import { Omit } from '@material-ui/core'
import Alert, { AlertProps } from '@material-ui/lab/Alert'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import {
  CheckIcon as SuccessIcon,
  ErrorIcon as WarningIcon,
  NotificationsActiveIcon as InfoIcon,
  WarningIcon as ErrorIcon,
} from '../../icons'
import { makeStyles, Theme } from '../../styles'

export type StatusBoxVariant = 'info' | 'success' | 'error' | 'warning' | 'highlight' | 'disabled'

const iconMapping = {
  info: InfoIcon,
  success: SuccessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'inline-flex',
    fontSize: theme.typography.subtitle1.fontSize,
    letterSpacing: '0.01em',
    lineHeight: '1.3rem',
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(0.875, 2),
    color: theme.palette.text.primary,
    alignItems: 'center',
    border: '1px solid transparent',
    minWidth: 420,
    '& $icon-warning': {
      color: theme.palette.status.warning,
    },
    '& $icon-success': {
      color: theme.palette.status.success,
    },
    '& $icon-error': {
      color: theme.palette.status.error,
    },
    '& $icon-info': {
      color: theme.palette.status.info,
    },
  },
  'icon-warning': {},
  'icon-success': {},
  'icon-error': {},
  'icon-info': {},
  fullWidth: {
    display: 'flex',
  },
  message: {
    padding: 0,
  },
  info: {
    borderColor: theme.palette.status.info,
    backgroundColor: theme.palette.tag.info,
  },
  success: {
    borderColor: theme.palette.status.success,
    backgroundColor: theme.palette.tag.success,
  },
  error: {
    borderColor: theme.palette.status.error,
    backgroundColor: theme.palette.tag.error,
  },
  warning: {
    borderColor: theme.palette.status.warning,
    backgroundColor: theme.palette.tag.warning,
  },
  highlight: {
    borderColor: theme.palette.status.highlight,
    backgroundColor: theme.palette.tag.highlight,
  },
  disabled: {
    borderColor: theme.palette.status.default,
    backgroundColor: theme.palette.tag.default,
  },
  iconWrapper: {
    marginRight: theme.spacing(1),
  },
  icon: {
    fontSize: '1.25rem',
  },
  action: {
    alignSelf: 'flex-start',
    padding: theme.spacing(1, 0),
  },
}))

export interface StatusBoxProps extends Omit<AlertProps, 'variant'> {
  /**
   * The variant to use. 'info' | 'success' | 'error' | 'warning' | 'highlight' | 'disabled'
   */
  variant: StatusBoxVariant
  /**
   * OnClose Handler.
   */
  onClose?: () => void
  /**
   * Icon
   * true | false | IconComponent
   * @default false
   */
  icon?: boolean | ReactNode | null
  /**
   * enable/disable fullWidth
   * @default false
   */
  fullWidth?: boolean
}

export const StatusBox: FC<StatusBoxProps> = ({
  variant,
  children,
  onClose,
  icon = false,
  fullWidth,
  classes: classesProp = { root: '', icon: '', action: '' },
  ...rest
}) => {
  const classes = useStyles()
  let iconSettings = { icon }
  if (icon === true) {
    const Icon = iconMapping[variant]
    iconSettings = { icon: Icon ? <Icon className={classes.icon} /> : icon }
  }

  return (
    <Alert
      classes={{
        ...classesProp,
        root: clsx(classes.root, classes[variant], classesProp.root, fullWidth && classes.fullWidth),
        icon: clsx(classes.iconWrapper, classes[`icon-${variant}`], classesProp.icon),
        action: clsx(classes.action, classesProp.action),
      }}
      variant="outlined"
      severity={variant as AlertProps['severity']}
      onClose={onClose}
      {...iconSettings}
      {...rest}
    >
      {children}
    </Alert>
  )
}
