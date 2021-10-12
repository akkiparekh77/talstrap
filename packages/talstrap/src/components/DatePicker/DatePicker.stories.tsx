import DateFnsUtils from '@date-io/date-fns'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { boolean, radios, select, text } from '@storybook/addon-knobs'
import { useState } from 'react'

import { makeStyles } from '../../styles'
import { DATE_FORMAT, DatePicker } from './DatePicker'
import { PickersUtilsProvider } from './PickersUtilsProvider'

const useStyles = makeStyles(() => ({
  table: {
    '& th, td': {
      border: 0,
    },
    '& th': {
      textTransform: 'capitalize',
    },
    '& td:first-of-type': {
      whiteSpace: 'nowrap',
    },
  },
}))

export default {
  title: 'DatePicker',
  component: DatePicker,
}

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', 'Date'),
    format: text('format', DATE_FORMAT),
    disabled: boolean('disabled', false),
    variant: radios('variant', { dialog: 'dialog', inline: 'inline', static: 'static' }, 'inline'),
    autoOk: boolean('autoOk', true),
    disableFuture: boolean('disableFuture', false),
    disablePast: boolean('disablePast', false),
    margin: select('margin', ['none', 'normal', 'dense'], 'none'),
  }

  const [value, setValue] = useState<Date | null>(null)

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        value={value}
        onChange={(date) => setValue(date)}
        onClear={() => setValue(null)}
        variant={knobs.variant}
        label={knobs.label}
        format={knobs.format}
        margin={knobs.margin}
        disabled={knobs.disabled}
        autoOk={knobs.autoOk}
        disablePast={knobs.disablePast}
        disableFuture={knobs.disableFuture}
      />
    </PickersUtilsProvider>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()
  const [emptyValue, setEmptyValue] = useState<Date | null>(null)
  const [value, setValue] = useState<Date | null>(new Date('01 Jan 2020'))

  const handleChange = (date: Date | null) => setValue(date)
  const handleClear = () => setValue(null)

  const datePickerProps = {
    value,
    onChange: handleChange,
    onClear: handleClear,
    label: 'Date',
  }

  const isPastDate = (value?.getTime() ?? 0) < Date.now()
  const showError = value !== null && isPastDate

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell>Empty</TableCell>
            <TableCell>
              <DatePicker
                value={emptyValue}
                onChange={(date) => setEmptyValue(date)}
                onClear={() => setEmptyValue(null)}
                label="Date"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>With value</TableCell>
            <TableCell>
              <DatePicker {...datePickerProps} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dense</TableCell>
            <TableCell>
              <DatePicker {...datePickerProps} margin="dense" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Error</TableCell>
            <TableCell>
              <DatePicker
                {...datePickerProps}
                error={showError}
                helperText={showError ? 'Date must be in the future' : undefined}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>
              <DatePicker {...datePickerProps} disabled />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Calendar</TableCell>
            <TableCell>
              <DatePicker {...datePickerProps} variant="static" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PickersUtilsProvider>
  )
}
