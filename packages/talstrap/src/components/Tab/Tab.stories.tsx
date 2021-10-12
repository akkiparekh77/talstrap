import { boolean, text } from '@storybook/addon-knobs'

import { Tab } from './Tab'

export default {
  title: 'Tab',
  component: Tab,
}

export const playground = (): JSX.Element => {
  const knobs = {
    disabled: boolean('disabled', false),
    label: text('label', 'Item One'),
    selected: boolean('selected', true),
    value: text('value', ''),
  }

  return <Tab disabled={knobs.disabled} label={knobs.label} selected={knobs.selected} value={knobs.value} />
}
