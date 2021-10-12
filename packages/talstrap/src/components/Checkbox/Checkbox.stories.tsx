import { boolean, radios } from '@storybook/addon-knobs'

import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const playground = (): JSX.Element => {
  const knobs = {
    color: radios('color', { default: 'default', primary: 'primary', secondary: 'secondary' }, 'primary'),
    size: radios('size', { medium: 'medium', small: 'small' }, 'medium'),
    disabled: boolean('disabled', false),
    disableRipple: boolean('disableRipple', false),
  }

  return (
    <Checkbox color={knobs.color} size={knobs.size} disabled={knobs.disabled} disableRipple={knobs.disableRipple} />
  )
}
