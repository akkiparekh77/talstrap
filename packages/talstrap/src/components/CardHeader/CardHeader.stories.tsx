import { text } from '@storybook/addon-knobs'

import { Card, CardContent, CardHeader } from '..'
import { Button } from '../Button'

export default {
  title: 'CardHeader',
  component: CardHeader,
}

export const playground = (): JSX.Element => {
  const knobs = {
    title: text('title', 'Simple card header'),
  }

  return (
    <Card>
      <CardHeader title={knobs.title} action={<Button>Action</Button>} />
      <CardContent />
    </Card>
  )
}
