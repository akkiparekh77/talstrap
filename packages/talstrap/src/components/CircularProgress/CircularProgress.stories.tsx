import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { number, radios, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { CircularProgress, CircularProgressProps } from './CircularProgress'

export default {
  title: 'CircularProgress',
  component: CircularProgress,
}

const SIZE = 48
const THICKNESS = 3.6

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

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', ''),
    size: number('size', SIZE),
    thickness: number('thickness', THICKNESS),
    value: number('value', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    }),
    variant: radios(
      'variant',
      { indeterminate: 'indeterminate', determinate: 'determinate', static: 'static' },
      'indeterminate'
    ),
  }

  return (
    <CircularProgress
      label={knobs.label}
      size={knobs.size}
      thickness={knobs.thickness}
      value={knobs.value}
      variant={knobs.variant}
    />
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()
  const columns = [
    { variant: 'indeterminate', label: 'Loading...' },
    { variant: 'determinate', label: '10 sec left', value: 50 },
    { variant: 'static', label: '80%', value: 80 },
  ]

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map(({ variant }) => (
            <TableCell key={variant}>{variant}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {columns.map(({ variant, label, value }) => (
            <TableCell key={variant}>
              <CircularProgress
                variant={variant as CircularProgressProps['variant']}
                label={label}
                value={value}
                size={SIZE}
                thickness={THICKNESS}
              />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}
