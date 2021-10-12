import MuiCircularProgress, {
  CircularProgressProps as MuiCircularProgressProps,
} from '@material-ui/core/CircularProgress'
import { rgba } from 'polished'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Typography } from '../Typography'

const MUI_SIZE = 44 // svg viewbox width and height

type StyleProps = Pick<CircularProgressProps, 'size' | 'thickness'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackContainer: (props) => ({
    position: 'relative',
    width: Number(props.size),
    height: Number(props.size),
  }),
  track: (props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxSizing: 'border-box',
    borderWidth: Number(props.thickness) * (Number(props.size) / MUI_SIZE),
    borderStyle: 'solid',
    borderColor: rgba(theme.palette.primary.main, 0.12),
    borderRadius: '50%',
    width: '100%',
    height: '100%',
  }),
  label: {
    marginTop: '6px',
  },
}))

export interface CircularProgressProps extends MuiCircularProgressProps {
  /**
   * The text to be shown underneath the circle.
   */
  label?: string
  /**
   * The size of the circle.
   * @default 48
   */
  size?: number
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: MuiCircularProgressProps['thickness']
  /**
   * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
   * @default 0
   */
  value?: MuiCircularProgressProps['value']
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   * @default "indeterminate"
   */
  variant?: MuiCircularProgressProps['variant']
}

/**
 * This component is based on the `material-ui` CircularProgress.
 *
 * For a more complete list of props, see https://material-ui.com/api/circular-progress/.
 *
 * For examples on how to use this component with state, see https://material-ui.com/components/progress/.
 */
export const CircularProgress: FC<CircularProgressProps> = ({
  label,
  size = 48,
  thickness = 3.6,
  value = 0,
  variant = 'indeterminate',
  ...other
}) => {
  const classes = useStyles({ size, thickness })

  return (
    <div className={classes.root}>
      <div className={classes.trackContainer}>
        <div className={classes.track} />
        <MuiCircularProgress size={size} thickness={thickness} value={value} variant={variant} {...other} />
      </div>
      {label && (
        <Typography variant="caption" className={classes.label}>
          {label}
        </Typography>
      )}
    </div>
  )
}
