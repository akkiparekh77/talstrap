import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { boolean, select, text } from '@storybook/addon-knobs'
import { ReactElement } from 'react'

import { CheckIcon, ErrorIcon, HistoryIcon, LocalAirportIcon, LockIcon, NewReleasesIcon } from '../../icons'
import { makeStyles } from '../../styles'
import { Tag, TagType } from './Tag'

const useStyles = makeStyles(() => ({
  table: {
    '& th, td': {
      border: 0,
    },
    '& td:first-of-type': {
      textTransform: 'capitalize',
    },
  },
}))

export default {
  title: 'Tag',
  component: Tag,
}

const TAG_COLORS: Array<TagType> = ['info', 'success', 'warning', 'error', 'highlight', 'default']

const iconMap: Record<TagType, ReactElement> = {
  info: <NewReleasesIcon />,
  success: <CheckIcon />,
  warning: <LocalAirportIcon />,
  error: <ErrorIcon />,
  highlight: <HistoryIcon />,
  default: <LockIcon />,
}

const labelMap: Record<TagType, string> = {
  info: 'New',
  success: 'Completed',
  warning: 'In progress',
  error: 'Critical',
  highlight: 'Expired',
  default: 'Inactive',
}

export const playground = (): JSX.Element => {
  const knobs = {
    label: text('label', 'Label'),
    color: select('color', TAG_COLORS, 'default'),
    icon: boolean('icon', false),
    onDelete: boolean('onDelete', false),
  }
  return (
    <Tag
      label={knobs.label}
      color={knobs.color}
      icon={knobs.icon.valueOf() ? <CheckIcon /> : undefined}
      onDelete={knobs.onDelete.valueOf() ? () => console.log('Delete') : undefined}
    />
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Normal</TableCell>
          <TableCell>With icon</TableCell>
          <TableCell>With delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {TAG_COLORS.map((color) => (
          <TableRow key={color}>
            <TableCell>{color}</TableCell>
            <TableCell>
              <Tag label={labelMap[color]} color={color} />
            </TableCell>
            <TableCell>
              <Tag label={labelMap[color]} color={color} icon={iconMap[color]} />
            </TableCell>
            <TableCell>
              <Tag label={labelMap[color]} color={color} onDelete={() => console.log('Delete')} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
