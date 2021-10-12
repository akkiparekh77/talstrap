import { boolean, number, radios } from '@storybook/addon-knobs'

import { Sidebar } from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const playground = (): JSX.Element => {
  const knobs = {
    expanded: boolean('expanded', false),
    expandedWidth: number('expandedWidth', 240),
    open: boolean('open', true),
    variant: radios(
      'variant',
      { temporary: 'temporary', permanent: 'permanent', persistent: 'persistent' },
      'permanent'
    ),
  }

  return (
    <Sidebar expanded={knobs.expanded} expandedWidth={knobs.expandedWidth} open={knobs.open} variant={knobs.variant} />
  )
}
