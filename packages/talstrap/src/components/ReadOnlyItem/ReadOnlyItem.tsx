import { InfoOutlined } from '@material-ui/icons'
import clsx from 'clsx'
import { FC } from 'react'

import { makeStyles } from '../../styles'
import { Box } from '../Box'
import { Tooltip } from '../Tooltip'
import { Typography } from '../Typography'

const useStyles = makeStyles((theme) => ({
  labelWrapper: {
    marginBottom: 2,
  },
  label: {
    lineHeight: '0.875rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  value: {
    lineHeight: '1rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  multiline: {
    whiteSpace: 'pre-wrap',
  },
  tooltipIcon: {
    marginLeft: 3,
    width: 14,
    height: 14,
  },
  tooltip: {
    fontSize: theme.typography.caption.fontSize,
  },
}))

export interface ReadOnlyItemProps {
  /**
   * The class applied to the root element.
   */
  className?: string
  /**
   * The label of the item.
   */
  label: string
  /**
   * If `true`, the value can be shown in multiple lines.
   */
  multiline?: boolean
  /**
   * The value of the item.
   */
  value: string
  /**
   * The text to be displayed in the tooltip. If left empty or undefined, the info icon will not be displayed.
   */
  tooltip?: string
}

export const ReadOnlyItem: FC<ReadOnlyItemProps> = ({ className, label, value, tooltip, multiline }) => {
  const classes = useStyles()

  return (
    <div className={className}>
      <Box display="flex" alignItems="center" className={classes.labelWrapper}>
        <Typography variant="caption" color="textSecondary" className={classes.label}>
          {label}
        </Typography>
        {tooltip && (
          <Tooltip title={tooltip} placement="right" classes={{ tooltip: classes.tooltip }}>
            <InfoOutlined color="primary" className={classes.tooltipIcon} />
          </Tooltip>
        )}
      </Box>
      <Typography
        component="p"
        variant="body2"
        color="textPrimary"
        className={clsx(classes.value, { [classes.multiline]: multiline })}
        title={value}
      >
        {value}
      </Typography>
    </div>
  )
}
