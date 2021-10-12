import { boolean, text } from '@storybook/addon-knobs'
import { useRef, useState } from 'react'

import { Box, Typography } from '../'
import { DropdownChip, SelectOptionType } from './DropdownChip'

export default {
  title: 'DropdownChip',
  component: DropdownChip,
}

const options: SelectOptionType[] = [
  {
    label: 'Default',
    value: 'Value 0',
    color: 'default',
  },
  {
    label: 'Success',
    value: 'Value 1',
    color: 'success',
  },
  {
    label: 'Warning',
    value: 'Value 2',
    color: 'warning',
  },
  {
    label: 'Error',
    value: 'Value 3',
    color: 'error',
    disabled: true,
  },
  {
    label: 'Highlight',
    value: 'Value 4',
    color: 'highlight',
  },
  {
    label: 'Hidden value',
    value: 'Value 4',
    color: 'highlight',
    hidden: true,
  },
]

export const playground = (): JSX.Element => {
  const knobs = {
    dropdownLabel: text('dropdownLabel', ''),
    disabled: boolean('disabled', false),
  }

  const chipRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<SelectOptionType>(options[0])

  return (
    <>
      <DropdownChip
        dropdownLabel={knobs.dropdownLabel}
        selectedOption={value}
        ref={chipRef}
        onOptionSelect={(option) => {
          setValue(option)
        }}
        options={options}
        disabled={knobs.disabled}
        aria-haspopup={true}
      />
    </>
  )
}

const DropdownChipExample = ({ option, disabled }: { option: SelectOptionType; disabled?: boolean }): JSX.Element => {
  const chipRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<SelectOptionType>(option)

  return (
    <DropdownChip
      selectedOption={value}
      ref={chipRef}
      onOptionSelect={(option: SelectOptionType) => {
        setValue(option)
      }}
      disabled={!!disabled}
      options={options}
      aria-haspopup={true}
    />
  )
}

export const examples = (): JSX.Element => {
  const disabledStatuses = [
    { isDisabled: false, label: 'Dropdown Chips' },
    { isDisabled: true, label: 'Disabled Dropdown Chips' },
  ]
  return (
    <>
      {disabledStatuses.map((disabledStatus) => {
        return (
          <>
            <Typography variant="h6">{disabledStatus.label}</Typography>
            {options.map((option: SelectOptionType) => {
              return (
                <Box mx={1} mt={1} mb={2} display="flex" key={option.value}>
                  <DropdownChipExample option={option} disabled={disabledStatus.isDisabled} />
                </Box>
              )
            })}
          </>
        )
      })}
    </>
  )
}
