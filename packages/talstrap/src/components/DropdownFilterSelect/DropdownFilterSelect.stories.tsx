import DateFnsUtils from '@date-io/date-fns'
import { boolean, text } from '@storybook/addon-knobs'
import { FC, useState } from 'react'

import { Autocomplete, Box, DatePicker, Grid, MenuItem, MenuList, TextField, Typography } from '../'
import { PickersUtilsProvider } from './../DatePicker/PickersUtilsProvider'
import { DropdownFilterSelect } from './DropdownFilterSelect'

export default {
  title: 'DropdownFilterSelect',
  component: DropdownFilterSelect,
}

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('Label', 'Label'),
    disabled: boolean('disabled', false),
  }
  const [selected, setSelected] = useState('')
  const onClear = () => setSelected('')
  return (
    <DropdownFilterSelect
      value={selected ? [selected] : []}
      label={knobs.label}
      disabled={knobs.disabled}
      aria-haspopup={true}
      onClear={onClear}
    >
      <Typography variant="body1">PopupOpen</Typography>
    </DropdownFilterSelect>
  )
}

type SelectOptionType = {
  value: string
  text: string
}

const options: SelectOptionType[] = [
  'The Shawshank Redemption',
  'Forrest Gump',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  'Harry Potter and the prisoner of Azkaban',
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King',
  'The Good, the Bad and the Ugly',
  'Fight Club',
].map((i) => ({ text: i, value: i }))

const DropdownFilterSelectAutoComplete: FC = () => {
  const [selected, setSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const onClear = () => setSelected('')
  return (
    <DropdownFilterSelect
      value={selected ? [selected] : []}
      open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      label={'Movie'}
      onClear={onClear}
    >
      <Autocomplete
        value={selected}
        options={options}
        TextFieldProps={{ margin: 'none' }}
        onOptionSelect={(data) => {
          setSelected(data.text)
          setIsOpen(false)
        }}
      />
    </DropdownFilterSelect>
  )
}

const DropdownFilterSelectDateInput: FC = () => {
  const [selected, setSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const onClear = () => setSelected('')
  return (
    <DropdownFilterSelect
      value={selected ? [selected] : []}
      open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      label={'Date'}
      onClear={onClear}
    >
      <TextField
        fullWidth
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        onChange={(e) => {
          setSelected(e.target.value)
          setIsOpen(false)
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </DropdownFilterSelect>
  )
}

const DropdownFilterSelectDatePicker: FC = () => {
  const [selected, setSelected] = useState<Date | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const onClear = () => setSelected(null)

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <DropdownFilterSelect
        value={selected ? [selected.toDateString()] : []}
        open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        label={'Booking Date'}
        onClear={onClear}
      >
        <DatePicker value={selected} onClear={onClear} onChange={(date) => setSelected(date)} margin="dense" />
      </DropdownFilterSelect>
    </PickersUtilsProvider>
  )
}

const listItems = ['Open (10)', 'In Progress(4)', 'Completed (120)', 'Canceled (999+)']
const DropdownFilterSelectListItemMultiSelect: FC = () => {
  const [selected, setSelected] = useState<string[]>([])
  const onClear = () => setSelected([])
  const onOptionSelectHandler = (option: string) => {
    const newSelected = selected.includes(option) ? selected.filter((i) => i !== option) : selected.concat(option)
    setSelected(newSelected)
  }
  return (
    <DropdownFilterSelect value={selected} label={'Status'} disableContentPadding onClear={onClear}>
      <MenuList disablePadding>
        {listItems.map((item: string) => (
          <MenuItem
            key={item}
            showCheckbox
            onClick={() => onOptionSelectHandler(item)}
            selected={selected.includes(item)}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </DropdownFilterSelect>
  )
}

interface DropdownFilterSelectListItemProps {
  disabled?: boolean
  preSelected?: boolean
  controlled?: boolean
}

const DropdownFilterSelectListItem: FC<DropdownFilterSelectListItemProps> = ({ disabled, preSelected, controlled }) => {
  const [selected, setSelected] = useState(preSelected ? listItems[0] : '')
  const [isOpen, setIsOpen] = useState(false)
  const onClear = () => setSelected('')
  const onOptionSelectHandler = (option: string) => {
    setSelected(option)
    setIsOpen(false)
  }
  let controlProps = {}
  if (controlled) {
    controlProps = {
      open: isOpen,
      onClick: () => setIsOpen(!isOpen),
    }
  }
  return (
    <DropdownFilterSelect
      label={'Status'}
      value={selected ? [selected] : []}
      {...controlProps}
      disableContentPadding
      onClear={onClear}
      disabled={disabled}
    >
      <MenuList disablePadding>
        {listItems.map((item: string) => (
          <MenuItem key={item} onClick={() => onOptionSelectHandler(item)} selected={selected === item}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </DropdownFilterSelect>
  )
}

const filterSelect = [
  { label: 'Controlled', comp: <DropdownFilterSelectListItem controlled /> },
  { label: 'Uncontrolled', comp: <DropdownFilterSelectListItem /> },
  { label: 'With AutoComplete', comp: <DropdownFilterSelectAutoComplete /> },
  {
    label: 'With DateInput',
    comp: <DropdownFilterSelectDateInput />,
  },
  {
    label: 'With DatePicker',
    comp: <DropdownFilterSelectDatePicker />,
  },
  { label: 'With List', comp: <DropdownFilterSelectListItem /> },
  { label: 'Pre selected With List', comp: <DropdownFilterSelectListItem preSelected /> },
  { label: 'With List MultiSelect', comp: <DropdownFilterSelectListItemMultiSelect /> },
  { label: 'Disabled', comp: <DropdownFilterSelectListItem disabled /> },
]

export const examples = (): JSX.Element => {
  return (
    <Box p={2}>
      <Grid container direction="column" spacing={2}>
        <Typography variant="h6">DropdownFilterSelect</Typography>
        {filterSelect.map(({ label, comp }) => {
          return (
            <Grid item container alignItems="center" key={label}>
              <Grid item xs={2}>
                <Typography variant="body1">{label}</Typography>
              </Grid>
              <Grid item>{comp}</Grid>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
