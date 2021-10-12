import { Omit } from '@material-ui/core'
import MuiChip, { ChipProps as MuiChipProps } from '@material-ui/core/Chip'
import clsx from 'clsx'
import { mix } from 'polished'
import { FC, forwardRef } from 'react'

import { CloseIcon } from '../../icons'
import { makeStyles, Theme } from '../../styles'

const getSpecificStyles = (theme: Theme, color: TagProps['color'] = 'default') => ({
  borderColor: theme.palette.status[color],
  backgroundColor: theme.palette.tag[color],
  color: theme.palette.status[color],
  '&$deletable:hover, &$deletable:focus': {
    backgroundColor: mix(0.08, theme.palette.status[color], theme.palette.tag[color]),
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.caption.fontSize,
    letterSpacing: theme.typography.caption.letterSpacing,
    ...getSpecificStyles(theme, 'default'),
  },
  info: {
    ...getSpecificStyles(theme, 'info'),
  },
  success: {
    ...getSpecificStyles(theme, 'success'),
  },
  warning: {
    ...getSpecificStyles(theme, 'warning'),
  },
  error: {
    ...getSpecificStyles(theme, 'error'),
  },
  highlight: {
    ...getSpecificStyles(theme, 'highlight'),
  },
  label: {
    color: theme.palette.text.primary,
  },
  labelSmall: {
    padding: theme.spacing(0, 1.5),
  },
  icon: {
    color: 'inherit',
  },
  iconSmall: {
    '&&': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(-1),
    },
  },
  deleteIcon: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
    '&&': {
      marginRight: theme.spacing(1),
    },
  },
  deletable: {},
}))

export type TagType = 'info' | 'success' | 'warning' | 'error' | 'highlight' | 'default'

export interface TagProps extends Omit<MuiChipProps, 'color'> {
  /**
   * The color of the tag.
   */
  color?: TagType
  /**
   * 	Icon element.
   */
  icon?: MuiChipProps['icon']
  /**
   * The content of the label.
   */
  label?: MuiChipProps['label']
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete?: MuiChipProps['onDelete']
}

/**
 * This component is based on the `material-ui` Chip.
 *
 * For a more complete list of props, see https://material-ui.com/api/chip/.
 */
export const Tag: FC<TagProps> = forwardRef((props, ref) => {
  const { color = 'default', ...other } = props
  const classes = useStyles()

  return (
    <MuiChip
      {...other}
      size="small"
      variant="outlined"
      ref={ref}
      deleteIcon={<CloseIcon />}
      classes={{
        root: clsx(classes.root, classes[color]),
        icon: classes.icon,
        iconSmall: classes.iconSmall,
        label: classes.label,
        labelSmall: classes.labelSmall,
        deleteIcon: classes.deleteIcon,
        deletable: classes.deletable,
      }}
    />
  )
})

Tag.displayName = 'Tag'
