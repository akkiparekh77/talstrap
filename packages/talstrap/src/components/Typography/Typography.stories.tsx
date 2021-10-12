import { select, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { Typography } from './Typography'

export default {
  title: 'Typography',
  component: Typography,
}

const useStyles = makeStyles(() => ({
  block: {
    display: 'block',
  },
  overflow: {
    width: `12ch`,
    whiteSpace: 'nowrap',
  },
  overflowExample: {
    width: `2ch`,
    whiteSpace: 'nowrap',
  },
}))

export const playground = (): JSX.Element => {
  const classes = useStyles()

  const knobs = {
    children: text('children', 'Text'),
    color: select('color', ['inherit', 'textPrimary', 'textSecondary'] as const, 'textPrimary'),
    variant: select(
      'variant',
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
      ] as const,
      'body2'
    ),
    overflow: select('overflow', ['default', 'ellipsis'] as const, 'default'),
  }

  return (
    <Typography
      color={knobs.color}
      variant={knobs.variant}
      overflow={knobs.overflow}
      className={classes.overflowExample}
    >
      {knobs.children}
    </Typography>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
      <Typography variant="h6">H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button" className={classes.block}>
        Button
      </Typography>
      <Typography variant="caption" color="textSecondary" className={classes.block}>
        Caption
      </Typography>
      <Typography variant="overline" color="textSecondary">
        Overline
      </Typography>
      <Typography overflow="ellipsis" className={classes.overflow}>
        Overflow Overflow Overflow
      </Typography>
    </>
  )
}
