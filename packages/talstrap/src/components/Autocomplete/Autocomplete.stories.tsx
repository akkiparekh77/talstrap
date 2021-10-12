import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { array, boolean, object, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { TextField, TextFieldProps } from '../TextField'
import { Autocomplete } from './Autocomplete'

export default {
  title: 'Autocomplete',
  component: Autocomplete,
}

const useStyles = makeStyles({
  cell: {
    width: 500,
  },
})

const top10Films = [
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
]

export const basic = (): JSX.Element => (
  <Autocomplete
    options={top10Films}
    getOptionLabel={(movie) => movie}
    renderInput={(params) => <TextField {...params} />}
  />
)

interface AsyncKnobProps {
  dataValue: string
  showLoadingInfo: boolean
  showLoader: boolean
  loadingText: string
  label: string
  TextFieldProps: TextFieldProps
}

export const asyncKnobs = (knobs?: Partial<AsyncKnobProps>): JSX.Element => {
  let timerId: number

  const simulateFetch = async (text: string) => {
    if (timerId) clearTimeout(timerId)

    const result = top10Films
      .filter((item) => item.match(new RegExp(text, 'ig')))
      .map((item) => ({ text: item, value: item.toUpperCase() }))

    // simulate a network request that takes 3 seconds
    await new Promise((resolve) => {
      timerId = window.setTimeout(resolve, 3000)
    })

    return result
  }

  const movieDataService = async (text: string) => simulateFetch(text)

  return (
    <Autocomplete
      label={knobs?.label || 'Movie'}
      dataValue={knobs?.dataValue || 'Fight Club'}
      dataService={movieDataService}
      loadingText={knobs?.loadingText || 'Fetching...'}
      showLoadingInfo={knobs?.showLoadingInfo || false}
      showLoader={knobs?.showLoader}
      TextFieldProps={knobs?.TextFieldProps}
    />
  )
}

export const freeFormEntry = (): JSX.Element => (
  <Autocomplete
    options={top10Films}
    getOptionLabel={(movie) => movie}
    renderInput={(params) => <TextField {...params} />}
    freeSolo
  />
)

export const disabled = (): JSX.Element => <Autocomplete label="Movie" options={top10Films} disabled />

export const disabledOptions = (): JSX.Element => (
  <Autocomplete
    label="Movie"
    options={top10Films}
    getOptionLabel={(movie) => movie}
    getOptionDisabled={(option) => option.toLowerCase().includes('the')}
  />
)

export const warning = (): JSX.Element => (
  <Autocomplete
    label="Warning Movies"
    options={top10Films}
    getOptionLabel={(movie) => movie}
    TextFieldProps={{
      helperText: 'Multiple values found',
      warning: true,
    }}
  />
)

export const playground = (): JSX.Element => {
  const knobs = {
    dense: boolean('dense', true, 'Regular'),
    disabled: boolean('disabled', false, 'Regular'),
    disableCloseOnSelect: boolean('disableCloseOnSelect', false, 'Regular'),
    freeSolo: boolean('freeSolo', false, 'Regular'),
    options: array('options', top10Films, 'Regular'),
    async: boolean('async', false, 'Async'),
    dataValue: text('dataValue', 'Fight Club', 'Async'),
    showLoadingInfo: boolean('showLoadingInfo', true, 'Async'),
    showLoader: boolean('showLoader', true, 'Async'),
    loadingText: text('loadingText', 'Fetching...', 'Async'),
    label: text('label', 'Movie', 'Async'),
    TextFieldProps: object(
      'TextFieldProps',
      { fullWidth: true, margin: 'normal' as TextFieldProps['margin'] },
      'Async'
    ),
  }

  return knobs.async ? (
    asyncKnobs(knobs)
  ) : (
    <Autocomplete
      dense={knobs.dense}
      options={knobs.options}
      getOptionLabel={(movie) => movie}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      freeSolo={knobs.freeSolo}
      disabled={knobs.disabled}
      disableCloseOnSelect={knobs.disableCloseOnSelect}
    />
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()
  const examplesToRender = [
    { label: 'Basic', component: basic() },
    { label: 'Async', component: asyncKnobs() },
    {
      label: 'Async with LoadingInfo and without Loader',
      component: asyncKnobs({ showLoader: false, showLoadingInfo: true }),
    },
    { label: 'Free form entry', component: freeFormEntry() },
    { label: 'Disabled', component: disabled() },
    { label: 'Disabled Options', component: disabledOptions() },
    { label: 'Warning', component: warning() },
  ]

  return (
    <Table>
      <TableBody>
        {examplesToRender.map(({ label, component }) => (
          <TableRow key={label}>
            <TableCell>{label}</TableCell>
            <TableCell className={classes.cell}>{component}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
