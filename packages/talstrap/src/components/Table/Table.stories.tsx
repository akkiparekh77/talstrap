import { Box, TableSortLabel, TableSortLabelProps } from '@material-ui/core'
import { boolean, select } from '@storybook/addon-knobs'
import { FC, MouseEvent as ReactMouseEvent, useState } from 'react'

import { Table, TableBody, TableCell, TableHead, TableRow } from '../'
import { Grid } from '../Grid'
import { CellProps } from '../TableRow'
import { Typography } from '../Typography'
import { ExtendedTable, TableProps } from './Table'

export default {
  title: 'Table',
  component: Table,
}

interface Data {
  name: string
  age: number
  gender: string
}

type Column = CellProps<string, Data>

interface TableLabelProps {
  title: string
}

const data: Data[] = [
  {
    name: 'Robin',
    age: 29,
    gender: 'Female',
  },
  {
    name: 'Wayne',
    age: 49,
    gender: 'Male',
  },
  {
    name: 'Alfred',
    age: 66,
    gender: 'Male',
  },
  {
    name: 'Selina',
    age: 33,
    gender: 'Female',
  },
]
const columns: Column[] = [
  {
    cellKey: 'name',
    label: 'Name',
  },
  {
    cellKey: 'age',
    label: 'Age',
  },
  {
    cellKey: 'gender',
    label: 'Gender',
    disableSort: true,
  },
]
const sortData = (sortBy: string, order: TableSortLabelProps['direction']) => {
  const columnsKey = columns.find((col) => col.label === sortBy)

  let dataset = data
  if (columnsKey) {
    const { cellKey = 0 } = columnsKey
    dataset = data.slice().sort((a, b) => {
      let nameA = a[cellKey]
      let nameB = b[cellKey]
      if (order === 'desc') {
        nameA = b[cellKey]
        nameB = a[cellKey]
      }

      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  }
  return dataset
}
export const playground = (): JSX.Element => {
  const knobs = {
    padding: select('padding', ['normal', 'checkbox', 'none'], 'normal'),
    size: select('size', ['small', 'medium'], 'small'),
    stickyHeader: boolean('stickyHeader', false),
    stripedRows: boolean('stripedRows', false),
    columnBorders: boolean('columnBorders', false),
    rowBorders: boolean('rowBorders', true),
    sortOrder: select('sortOrder', ['asc', 'desc'], 'asc'),
    sortBy: select('sortBy', ['none', 'Name', 'Age', 'Gender'], 'none'),
  }

  let dataset = data
  if (knobs.sortBy) {
    dataset = sortData(knobs.sortBy, knobs.sortOrder)
  }

  return (
    <Table padding={knobs.padding as TableProps['padding']} stickyHeader={knobs.stickyHeader}>
      <TableHead>
        <TableRow>
          {columns.map((col, index) => {
            return (
              <TableCell
                size={knobs.size as TableProps['size']}
                columnBorders={knobs.columnBorders}
                rowBorders={knobs.rowBorders}
                key={index}
              >
                <TableSortLabel
                  active={knobs.sortBy === col.label}
                  direction={(knobs.sortBy === col.label ? knobs.sortOrder : 'asc') as TableSortLabelProps['direction']}
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataset.map((d, rowIndex) => (
          <TableRow key={rowIndex} stripedRows={knobs.stripedRows}>
            {columns.map((col, index) => {
              return (
                <TableCell
                  size={knobs.size as TableProps['size']}
                  columnBorders={knobs.columnBorders}
                  rowBorders={knobs.rowBorders}
                  key={index}
                >
                  {d[col.cellKey!]}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function NormalTable(props: {
  data: Data[]
  columns: Column[]
  columnBorders?: boolean
  stripedRows?: boolean
  rowBorders?: boolean
}) {
  const data = props.data
  const columns = props.columns
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((col, index: number) => {
            return (
              <TableCell key={index} columnBorders={props.columnBorders} rowBorders={props.rowBorders}>
                {col.label}
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d, rowIndex: number) => (
          <TableRow key={rowIndex} stripedRows={props.stripedRows}>
            {columns.map((col, index: number) => {
              return (
                <TableCell key={index} columnBorders={props.columnBorders} rowBorders={props.rowBorders}>
                  {d[col.cellKey as string]}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const TableLabel: FC<TableLabelProps> = ({ title }) => {
  return (
    <Box p={2}>
      <Typography variant="h5">{title}</Typography>
    </Box>
  )
}

export const examples = (): JSX.Element => {
  const [sortBy, setSortBy] = useState('Name')
  const [sortOrder, setSortOrder] = useState<TableSortLabelProps['direction']>('asc')
  const createSortHandler = (_event: ReactMouseEvent, value = '') => {
    if (value === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }
    setSortBy(value)
  }
  return (
    <Grid container spacing={2}>
      <Grid spacing={2} item xs={12}>
        <TableLabel title="Extended Table" />
        <Box p={2}>
          <Grid item xs={12}>
            <ExtendedTable data={data} columns={columns} />
          </Grid>
          <TableLabel title="Extended Table With Column Borders" />
          <Grid item xs={12}>
            <ExtendedTable data={data} columns={columns} columnBorders />
          </Grid>

          <TableLabel title="Extended Table Without Row Borders" />
          <Grid item xs={12}>
            <ExtendedTable data={data} columns={columns} rowBorders={false} />
          </Grid>
          <TableLabel title="Extended Table With Stripes" />
          <Grid item xs={12}>
            <ExtendedTable data={data} columns={columns} stripedRows />
          </Grid>
          <TableLabel title="Extended Table With Sort" />
          <Grid item xs={12}>
            <ExtendedTable
              data={sortData(sortBy, sortOrder as TableSortLabelProps['direction'])}
              columns={columns}
              sort={{
                active: (val) => val === sortBy,
                direction: sortOrder as TableSortLabelProps['direction'],
                onClick: (event, value) => createSortHandler(event, value),
              }}
            />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TableLabel title="Normal Table" />
        <Box p={2}>
          <Grid item xs={12}>
            <NormalTable data={data} columns={columns}></NormalTable>
          </Grid>
          <TableLabel title="Normal Table With Column Borders" />
          <Grid item xs={12}>
            <NormalTable data={data} columns={columns} columnBorders></NormalTable>
          </Grid>
          <TableLabel title="Normal Table Without Row Borders" />
          <Grid item xs={12}>
            <NormalTable data={data} columns={columns} rowBorders={false}></NormalTable>
          </Grid>
          <TableLabel title="Normal Table  With Stripes" />
          <Grid item xs={12}>
            <NormalTable data={data} columns={columns} stripedRows></NormalTable>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
