import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { boolean, radios, text } from '@storybook/addon-knobs'

import { makeStyles } from '../../styles'
import { Button, ButtonProps } from './Button'

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
  title: 'Button',
  component: Button,
}

export const playground = (): JSX.Element => {
  const knobs = {
    children: text('children', 'Add'),
    disabled: boolean('disabled', false),
    startIcon: boolean('startIcon', false),
    variant: radios('variant', { text: 'text', contained: 'contained', outlined: 'outlined' }, 'text'),
    destructive: boolean('destructive', false),
  }

  return (
    <Button
      disabled={knobs.disabled}
      startIcon={knobs.startIcon.valueOf() ? <Add /> : undefined}
      variant={knobs.variant}
      destructive={knobs.destructive}
    >
      {knobs.children}
    </Button>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  const variants = ['text', 'contained', 'outlined']
  const rows = ['Default', 'Destructive', 'Disabled', 'With start icon']

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell />
          {variants.map((variant) => (
            <TableCell key={variant}>{variant}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row}>
            <TableCell>{row}</TableCell>
            {variants.map((variant) => (
              <TableCell key={variant}>
                <Button
                  variant={variant as ButtonProps['variant']}
                  startIcon={row === 'With start icon' ? <Add /> : undefined}
                  disabled={row === 'Disabled'}
                  destructive={row === 'Destructive'}
                >
                  Button
                </Button>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
