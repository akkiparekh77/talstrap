import { radios, text } from '@storybook/addon-knobs'

import { Card, CardContent, Typography } from '..'

export default {
  title: 'CardContent',
  component: CardContent,
}

export const playground = (): JSX.Element => {
  const knobs = {
    cardContent: text('cardContent', 'Simple Card Content'),
    padding: radios('padding', { none: 'none', normal: 'normal' }, 'normal'),
  }

  return (
    <Card>
      <CardContent padding={knobs.padding}>
        <Typography variant="body2">{knobs.cardContent}</Typography>
      </CardContent>
    </Card>
  )
}
