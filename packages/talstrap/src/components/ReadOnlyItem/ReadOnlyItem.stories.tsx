import { boolean, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { ReadOnly } from '../ReadOnly'
import { ReadOnlyItem, ReadOnlyItemProps } from './ReadOnlyItem'

export default {
  title: 'ReadOnlyItem',
  component: ReadOnlyItem,
}

const items: ReadOnlyItemProps[] = [
  { label: 'Label', value: 'Value' },
  { label: 'Label with tooltip', value: 'Value', tooltip: 'Tooltip' },
  { label: 'Label', value: 'Very long value with multiline disabled' },
  { label: 'Label', value: 'Very long value with multiline enabled', multiline: true },
]

const useStyles = makeStyles(() => ({
  readOnlyItem: {
    maxWidth: 120,
  },
}))

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', 'Label'),
    value: text('value', 'Value'),
    tooltip: text('tooltip', 'Tooltip'),
    multiline: boolean('multiline', false),
  }

  return <ReadOnlyItem label={knobs.label} value={knobs.value} multiline={knobs.multiline} tooltip={knobs.tooltip} />
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  return (
    <ReadOnly>
      {items.map(({ label, value, tooltip, multiline }) => (
        <ReadOnlyItem
          key={label}
          label={label}
          value={value}
          tooltip={tooltip}
          multiline={multiline}
          className={classes.readOnlyItem}
        />
      ))}
    </ReadOnly>
  )
}
