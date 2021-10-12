import { boolean, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { Paper } from '../Paper'
import { DialogTitle } from './DialogTitle'

const useStyles = makeStyles(() => ({
  dialog: {
    width: 400,
  },
}))

export default {
  title: 'DialogTitle',
  component: DialogTitle,
}

export const playground = (): JSX.Element => {
  const classes = useStyles()

  const knobs = {
    children: text('children', 'Dialog Title'),
    showClose: boolean('showClose', false),
  }

  return (
    <Paper className={classes.dialog}>
      <DialogTitle showClose={knobs.showClose}>{knobs.children}</DialogTitle>
    </Paper>
  )
}
