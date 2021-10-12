// Using material ui code for examples since the table is not meant for examples
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import {
  ArrowDropUp as ArrowDropUpIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import { useState } from 'react'

import { makeStyles } from '../../styles'
import { IconButton, MenuItem, Paper, Typography } from '../'
import { TextField } from './TextField'

export default {
  title: 'TextField',
  component: TextField,
}

const selectOptions = [
  {
    value: 'value1',
    label: 'Value 1',
  },
  {
    value: 'value2',
    label: 'Value 2',
  },
  {
    value: 'value3',
    label: 'Value 3',
  },
  {
    value: 'value4',
    label: 'Value 4',
  },
]

const LABEL_TEXT = 'Label'
const PLACEHOLDER_TEXT = 'Placeholder Text'
const VALUE_TEXT = 'Input Text'
const HELPER_TEXT = 'Helper Text'
const ERROR_TEXT = 'Error message'

const useStyles = makeStyles(() => ({
  table: {
    '& th, td': {
      border: 0,
    },
    '& td:first-of-type': {
      whiteSpace: 'nowrap',
    },
  },
}))

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', LABEL_TEXT),
    type: select('type', ['text', 'number'], 'text'),
    placeholder: text('placeholder', PLACEHOLDER_TEXT),
    helperText: text('helperText', HELPER_TEXT),
    fullWidth: boolean('fullWidth', false),
    disabled: boolean('disabled', false),
    required: boolean('required', false),
    error: boolean('error', false),
    select: boolean('select', false),
    multiline: boolean('multiline', false),
    rows: number('rows', 3),
    dense: boolean('dense', false),
    disableSpinners: boolean('disableSpinners', false),
    margin: select('margin', ['none', 'dense', 'normal'], 'none'),
  }

  const [selectedValue, setSelectedValue] = useState('')

  return (
    <TextField
      label={knobs.label}
      type={knobs.type}
      placeholder={knobs.placeholder}
      helperText={knobs.helperText}
      fullWidth={knobs.fullWidth}
      disabled={knobs.disabled}
      required={knobs.required}
      error={knobs.error}
      select={knobs.select}
      multiline={knobs.multiline}
      rows={knobs.rows}
      dense={knobs.dense}
      disableSpinners={knobs.disableSpinners}
      margin={knobs.margin}
      SelectProps={{
        value: selectedValue,
        onChange: (event) => setSelectedValue(event.target.value as string),
      }}
    >
      {knobs.select &&
        selectOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()
  const [isPasswordField, setIsPasswordField] = useState(true)

  const dropdownList = selectOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">TextField</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Basic usage</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>With value</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} value={VALUE_TEXT} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>
              <TextField value={VALUE_TEXT} disabled />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Required</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} value={VALUE_TEXT} required />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Error</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} value={VALUE_TEXT} helperText={ERROR_TEXT} error />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dense</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} value="Dense Input Text" dense />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Placeholder</TableCell>
            <TableCell>
              <TextField placeholder={PLACEHOLDER_TEXT} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No Spinners</TableCell>
            <TableCell>
              <TextField type={'number'} value={10} disableSpinners />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Focused</TableCell>
            <TableCell>
              <TextField
                label={LABEL_TEXT}
                value="Inputting Text"
                InputProps={{ className: 'Mui-focused' }}
                InputLabelProps={{ focused: true }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>End adornment</TableCell>
            <TableCell>
              <TextField
                type={isPasswordField ? 'password' : 'text'}
                label="Password"
                value="password"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      color="default"
                      size="small"
                      edge="end"
                      onClick={() => setIsPasswordField((isPasswordField) => !isPasswordField)}
                    >
                      {isPasswordField ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Multiline</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} value="Input Text Area" multiline />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Dropdown</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Basic usage</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} select>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>With value</TableCell>
            <TableCell>
              <TextField select label={LABEL_TEXT} value={selectOptions[0].value}>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>
              <TextField select label={LABEL_TEXT} value={selectOptions[0].value} disabled>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Required</TableCell>
            <TableCell>
              <TextField select label={LABEL_TEXT} value={selectOptions[0].value} required>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Error</TableCell>
            <TableCell>
              <TextField label={LABEL_TEXT} select error helperText={ERROR_TEXT} value={selectOptions[0].value}>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dense</TableCell>
            <TableCell>
              <TextField select label={LABEL_TEXT} dense>
                {dropdownList}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Display empty</TableCell>
            <TableCell>
              <TextField
                label={LABEL_TEXT}
                select
                InputLabelProps={{ shrink: true }}
                SelectProps={{
                  displayEmpty: true,
                  renderValue: (value) => {
                    const selectedOption = selectOptions.find((option) => option.value === value)
                    return selectedOption ? selectedOption.label : 'Select an item'
                  },
                }}
              >
                {selectOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Opened</TableCell>
            <TableCell>
              <TextField
                select
                label={LABEL_TEXT}
                InputProps={{ className: 'Mui-focused' }}
                InputLabelProps={{ focused: true, shrink: true }}
                SelectProps={{ IconComponent: ArrowDropUpIcon, open: false }}
                value={selectOptions[0].value}
              >
                {dropdownList}
              </TextField>
              <Paper style={{ width: 328 }} elevation={8}>
                {selectOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value} selected={option.value === selectOptions[0].value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Paper>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
