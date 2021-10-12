import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import clsx from 'clsx'
import { rgba, tint } from 'polished'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles } from '../../styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 'none',
    letterSpacing: theme.typography.button.letterSpacing,
    whiteSpace: 'nowrap',
  },
  sentenceCase: {
    textTransform: 'none',
    letterSpacing: '0.035714em',
  },
  text: {
    padding: theme.spacing(0.75, 2),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&$destructive': {
      color: theme.palette.error.main,
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
  contained: {
    boxShadow: `0 1px 3px ${rgba(theme.palette.common.black, 0.1)}`,
    '&:hover': {
      backgroundColor: tint(0.12, theme.palette.primary.main),
      boxShadow: `0 1px 3px ${rgba(theme.palette.common.black, 0.1)}`,
    },
    '&$destructive': {
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: tint(0.12, theme.palette.error.main),
      },
    },
    '&$disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  outlined: {
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&$destructive': {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      borderColor: theme.palette.action.disabled,
    },
  },
  startIcon: {
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(0.5),
  },
  endIcon: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(-1),
  },
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: '1.5rem',
    },
  },
  disabled: {},
  destructive: {},
}))

export interface ButtonProps extends MuiButtonProps {
  /**
   * The content of the button.
   */
  children: ReactNode
  /**
   * Use for destructive actions.
   * @default false
   */
  destructive?: boolean
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: MuiButtonProps['disabled']
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: MuiButtonProps['fullWidth']
  /**
   * The icon to be displayed before the text.
   */
  startIcon?: MuiButtonProps['startIcon']
  /**
   * The variant to use.
   * @default "text"
   */
  variant?: MuiButtonProps['variant']
}

/**
 * This component is based on the `material-ui` Button.
 *
 * For a more complete list of props, see https://material-ui.com/api/button/.
 */
export const Button: FC<ButtonProps> = forwardRef((props, ref) => {
  const {
    children,
    className,
    color = 'primary',
    destructive = false,
    disabled = false,
    fullWidth = false,
    startIcon,
    variant = 'text',
    ...other
  } = props
  const classes = useStyles()

  return (
    <MuiButton
      classes={{
        root: clsx(classes.root, classes.sentenceCase, {
          [classes.destructive]: destructive,
        }),
        text: classes.text,
        contained: classes.contained,
        outlined: classes.outlined,
        startIcon: classes.startIcon,
        endIcon: classes.endIcon,
        iconSizeMedium: classes.iconSizeMedium,
        disabled: classes.disabled,
      }}
      className={className}
      color={color}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      ref={ref}
      {...other}
    >
      {children}
    </MuiButton>
  )
})
Button.displayName = 'Button'
