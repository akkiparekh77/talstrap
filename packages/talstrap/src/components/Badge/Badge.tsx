import MuiBadge, { BadgeProps as MuiBadgeProps } from '@material-ui/core/Badge'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'

interface BadgeOffset {
  top?: number
  right?: number
}

type StyleProps = Pick<BadgeProps, 'offset'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    opacity: 1,
  },
  badge: ({ offset = {} }) => ({
    top: offset.top || 2,
    right: offset.right || 8,
    height: 16,
    minWidth: 16,
    borderRadius: 6,
    padding: theme.spacing(0, 0.5),
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize: theme.typography.caption.fontSize,
    letterSpacing: theme.typography.caption.letterSpacing,
    transform: 'scale(1) translate(100%, -50%)',
  }),
  invisible: {
    transform: 'scale(0) translate(100%, -50%)',
  },
  dot: ({ offset = {} }) => ({
    top: offset.top || 0,
    right: offset.right || 0,
    height: 8,
    minWidth: 8,
    maxWidth: 8,
    padding: 0,
  }),
}))

export interface BadgeProps extends MuiBadgeProps {
  /**
   * The content rendered within the badge.
   */
  badgeContent?: MuiBadgeProps['badgeContent']
  /**
   * The badge will be added relative to this node.
   */
  children: MuiBadgeProps['children']
  /**
   * If `true`, the badge will be invisible.
   */
  invisible?: MuiBadgeProps['invisible']
  /**
   * Max count to show.
   * @default 99
   */
  max?: MuiBadgeProps['max']
  /**
   * The offset of the badge from the top right corner of the wrapped element.
   */
  offset?: BadgeOffset
  /**
   * Controls whether the badge is hidden when badgeContent is zero. Only applies if the `invisible` prop is not provided.
   * @default false
   */
  showZero?: MuiBadgeProps['showZero']
  /**
   * The variant to use.
   * @default "standard"
   */

  variant?: MuiBadgeProps['variant']
}

/**
 * This component is based on the `material-ui` Badge.
 *
 * For a more complete list of props, see https://material-ui.com/api/badge/.
 */
export const Badge: FC<BadgeProps> = ({
  badgeContent,
  children,
  invisible,
  max = 99,
  offset,
  showZero = false,
  variant = 'standard',
  ...other
}) => {
  const classes = useStyles({ offset })

  return (
    <MuiBadge
      classes={classes}
      badgeContent={badgeContent}
      invisible={invisible}
      max={max}
      showZero={showZero}
      variant={variant}
      {...other}
    >
      {children}
    </MuiBadge>
  )
}
