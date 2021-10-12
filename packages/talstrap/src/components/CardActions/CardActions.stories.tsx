import { boolean } from '@storybook/addon-knobs'

import { Button, Card, CardActions, CardContent } from '..'

export default {
  title: 'CardActions',
  component: CardActions,
}

export const playground = (): JSX.Element => {
  const knobs = {
    disableSpacing: boolean('disableSpacing', false),
  }

  return (
    <Card>
      <CardContent />
      <CardActions disableSpacing={knobs.disableSpacing}>
        <Button>Cancel</Button>
        <Button variant="contained">Add</Button>
      </CardActions>
    </Card>
  )
}
