import { radios } from '@storybook/addon-knobs'

import { ReadOnlyItem, ReadOnlyItemProps } from '../ReadOnlyItem'
import { ReadOnly } from './ReadOnly'

export default {
  title: 'ReadOnly',
  component: ReadOnly,
}

const items: ReadOnlyItemProps[] = [
  { label: 'ID', value: 'S12345' },
  { label: 'Mode', value: 'Sea' },
  { label: 'Type', value: 'FCL' },
  { label: 'Port of Loading', value: 'Shanghai Port' },
  { label: 'Port of Discharge', value: 'Hamburg Port' },
]

export const playground = (): JSX.Element => {
  const knobs = {
    direction: radios('direction', { column: 'column', row: 'row' }, 'column'),
  }

  return (
    <ReadOnly direction={knobs.direction}>
      {items.map(({ label, value }) => (
        <ReadOnlyItem key={label} label={label} value={value} />
      ))}
    </ReadOnly>
  )
}
