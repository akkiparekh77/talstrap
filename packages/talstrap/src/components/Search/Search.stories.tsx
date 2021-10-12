import { boolean, radios, text } from '@storybook/addon-knobs'
import { ChangeEvent, useState } from 'react'

import { Search } from './Search'

export default {
  title: 'Search',
  component: Search,
}

export const playground = (): JSX.Element => {
  const knobs = {
    placeholder: text('placeholder', 'Search...'),
    disabled: boolean('disabled', false),
    variant: radios(
      'variant',
      {
        elevated: 'elevated',
        flat: 'flat',
      },
      'elevated'
    ),
  }

  const [query, setQuery] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleClear = () => setQuery('')

  return (
    <Search
      placeholder={knobs.placeholder}
      disabled={knobs.disabled}
      variant={knobs.variant}
      value={query}
      onChange={handleChange}
      onClear={handleClear}
    />
  )
}
