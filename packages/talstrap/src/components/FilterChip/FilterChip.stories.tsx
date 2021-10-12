import { boolean, text } from '@storybook/addon-knobs'
import { FC, ReactNode, useRef, useState } from 'react'

import { Box, Typography } from '../'
import { FilterChip } from './FilterChip'

export default {
  title: 'FilterChip',
  component: FilterChip,
}
interface RenderFilterChipProps {
  label: string
  disabled: boolean
  initialValues: string[]
}

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', 'Filter'),
    disabled: boolean('disabled', false),
  }
  const initialValues = ['First option', 'Second option']
  const chipRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(initialValues)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <>
      <FilterChip
        value={value}
        label={knobs.label}
        ref={chipRef}
        onClick={() => {
          setIsPopoverOpen((prevOpenState: boolean) => !prevOpenState)
        }}
        onDelete={() => setValue([])}
        disabled={knobs.disabled}
        aria-haspopup={true}
        aria-expanded={isPopoverOpen}
        data-tracking-id="sample-tracking-id"
        data-testid="sample-test-id"
      />
      {/* TODO: add FilterSelect popover component to silhouette */}
      {isPopoverOpen && <div>{'FilterSelect is Open!'}</div>}
    </>
  )
}

export const examples = (): JSX.Element => {
  const multipleValues = {
    label: 'Multiple selected',
    disabled: false,
    initialValues: ['First option', 'Second option'],
  }
  const singleValue = {
    label: 'Single selected',
    disabled: false,
    initialValues: ['First option'],
  }
  const noValues = {
    label: 'None selected',
    disabled: false,
    initialValues: [],
  }
  const noLabel = {
    label: '',
    disabled: false,
    initialValues: ['First option', 'Second option'],
  }
  const filterChipTypes = [multipleValues, singleValue, noLabel, noValues]
  const getDisabled = (chipProps: RenderFilterChipProps) => ({ ...chipProps, disabled: true })
  const Boxify = (content: ReactNode) => (
    <Box mx={0.5} my={1}>
      {content}
    </Box>
  )
  const renderFilterChip: FC<RenderFilterChipProps> = ({ label, disabled, initialValues }) => {
    const chipRef = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState(initialValues)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    return (
      <>
        <FilterChip
          value={value}
          label={label}
          ref={chipRef}
          onClick={() => {
            setIsPopoverOpen((prevOpenState: boolean) => !prevOpenState)
          }}
          onDelete={() => setValue([])}
          disabled={disabled}
          aria-haspopup={true}
          aria-expanded={isPopoverOpen}
        />
        {/* TODO: add FilterSelect popover component to silhouette */}
        {isPopoverOpen && <div>{'FilterSelect is Open!'}</div>}
      </>
    )
  }

  return (
    <>
      <Typography variant="h6">FilterChip</Typography>
      <Box mx={1} mt={1} mb={2} display="flex">
        {filterChipTypes.map(renderFilterChip).map(Boxify)}
      </Box>
      <Typography variant="h6">Disabled</Typography>
      <Box mx={1} mt={1} mb={2} display="flex">
        {filterChipTypes.map(getDisabled).map(renderFilterChip).map(Boxify)}
      </Box>
    </>
  )
}
