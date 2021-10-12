import { Omit } from '@material-ui/core'
import clsx from 'clsx'
import { cloneElement, FC, ReactElement } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Badge, BadgeProps } from '../Badge'
import { ListItem, ListItemProps } from '../ListItem'
import { ListItemIcon } from '../ListItemIcon'
import { ListItemText } from '../ListItemText'
import { Tooltip } from '../Tooltip'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    height: theme.spacing(6),
    padding: '0 21px',
    color: theme.palette.sidebar.default,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  rootSelected: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.sidebar.selected,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'currentColor',
  },
  iconWrapper: {
    minWidth: 0,
    color: 'inherit',
  },
  icon: {
    height: 22,
    width: 22,
  },
  label: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: theme.spacing(2.5),
    padding: 0,
    whiteSpace: 'nowrap',
  },
  labelSelected: {
    fontWeight: theme.typography.fontWeightBold,
  },
  labelPrimary: {
    fontWeight: 'inherit',
    lineHeight: '1.5rem',
    letterSpacing: '0.052142em',
  },
  tooltip: {
    fontSize: theme.typography.caption.fontSize,
  },
}))

export interface SidebarItemProps extends ListItemProps {
  /**
   * Properties applied to the Badge component attached to the icon. If no badgeContent is provided, the Badge will not be shown.
   */
  BadgeProps?: Omit<BadgeProps, 'children'>
  /**
   * The icon to be shown.
   */
  icon: ReactElement
  /**
   * The text to be shown next to the icon.
   */
  label: string
  /**
   * If `true`, the item will be selected.
   */
  selected?: ListItemProps['selected']
  /**
   * If `true`, the label will be shown.
   */
  showLabel?: boolean
  /**
   * The position of the tooltip relative to the icon.
   * @default "right"
   */
  tooltipPlacement?: 'left' | 'right'
}

export const SidebarItem: FC<SidebarItemProps> = ({
  BadgeProps,
  className: classNameProp,
  icon,
  label,
  selected,
  showLabel,
  tooltipPlacement = 'right',
  button, // Fix typing issue by excluding from other props
  ...other
}) => {
  const classes = useStyles()

  return (
    <Tooltip
      title={label}
      disableFocusListener={showLabel}
      disableTouchListener={showLabel}
      disableHoverListener={showLabel}
      placement={tooltipPlacement}
      classes={{ tooltip: classes.tooltip }}
    >
      <ListItem
        className={clsx(classes.root, { [classes.rootSelected]: selected }, classNameProp)}
        alignItems="center"
        {...other}
      >
        {selected && <div className={classes.indicator} />}
        <ListItemIcon className={classes.iconWrapper}>
          <Badge {...BadgeProps}>{cloneElement(icon, { className: clsx(icon.props.className, classes.icon) })}</Badge>
        </ListItemIcon>
        {showLabel && (
          <ListItemText
            className={clsx(classes.label, {
              [classes.labelSelected]: selected,
            })}
            primary={label}
            primaryTypographyProps={{
              className: classes.labelPrimary,
              color: 'inherit',
              variant: 'body2',
            }}
          />
        )}
      </ListItem>
    </Tooltip>
  )
}
