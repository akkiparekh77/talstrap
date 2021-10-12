import { Notifications } from '@material-ui/icons'
import { boolean, number, object, radios } from '@storybook/addon-knobs'

import { Badge } from './Badge'

export default {
  title: 'Badge',
  component: Badge,
}

export const playground = (): JSX.Element => {
  const knobs = {
    badgeContent: number('badgeContent', 1),
    invisible: boolean('invisible', false),
    max: number('max', 99),
    offset: object('offset', {
      top: 2,
      right: 8,
    }),
    showZero: boolean('showZero', false),
    variant: radios('variant', { standard: 'standard', dot: 'dot' }, 'standard'),
  }

  return (
    <Badge
      badgeContent={knobs.badgeContent}
      invisible={knobs.invisible}
      max={knobs.max}
      offset={knobs.offset}
      showZero={knobs.showZero}
      variant={knobs.variant}
    >
      <Notifications />
    </Badge>
  )
}
