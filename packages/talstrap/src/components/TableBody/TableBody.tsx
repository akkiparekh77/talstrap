import { Omit } from '@material-ui/core'
import MuiTableBody, { TableBodyProps as MuiTableBodyProps } from '@material-ui/core/TableBody'
import { omit } from 'lodash-es'
import { ElementType, forwardRef, ReactNode, TableHTMLAttributes, useRef } from 'react'

import { ClassNameMap, makeStyles, Theme } from '../../styles'
import { RowProps } from '../Table/Table'
import { BODY } from '../TableCell/types'
import { CellProps, ExtendedTableRow } from '../TableRow/TableRow'

/**
 * Defines the default styles of a Table Body
 */
const useStyles = makeStyles((theme: Theme) => ({
  selectedRow: {
    backgroundColor: theme.palette.primary.main,
  },
  bodyCell: {
    color: theme.palette.text.primary,
  },
  bodyRow: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))

export interface CommonTableBodyProps extends Omit<MuiTableBodyProps, 'css'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: ClassNameMap
  /**
   *  Can be used to hide/show the entire body
   */
  hide?: boolean
}

export interface TableBodyProps extends CommonTableBodyProps {
  /**
   * Should be valid `<tr>` children such as `TableRow`.
   */
  children: ReactNode
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component?: ElementType<TableHTMLAttributes<HTMLTableSectionElement>>
}

export interface ExtendedTableBodyProps<T, K> extends CommonTableBodyProps {
  /**
   * The set of columns present in the table. Each column is composed of cell properties
   */
  columns?: CellProps<T, K>[]
  /**
   * Whether column borders are required or not
   */
  columnBorders?: boolean
  /**
   * The data present in the table body based on which rows are made
   */
  data?: K[]
  /**
   * The set of rows present in the table. Each column is composed of rows properties
   */
  rows?: RowProps<T, K>
  /**
   * Decides if rows should have borders on not
   */
  rowBorders?: boolean
  /**
   * The extended type of TableBody accepts a render row function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   */
  renderBody?: TRenderBodyFunction<T, K>
  /**
   * Specify if the table is to be striped or not
   */
  stripedRows?: boolean
}

/**
 * Defines the function signature of the Render Body Function.
 */
export type TRenderBodyFunction<T, K> = (tableBodyProps?: ExtendedTableBodyProps<T, K>) => ReactNode

/**
 * Default renderer for the TableBody Extended Type
 * If the variant used is NORMAL, then this function will not be used
 *
 */
export function DefaultRenderBody<T, K>(props: ExtendedTableBodyProps<T, K>): JSX.Element[] {
  const { data = [], columns, rows = {}, stripedRows, columnBorders, rowBorders, classes } = props
  const { bodyCell, bodyRow } = useStyles()
  const ref = useRef<HTMLTableRowElement>(null)

  return data.map((rowData: K, rowIndex: number) => {
    return (
      <ExtendedTableRow
        {...rows}
        key={rowIndex}
        rowKey={rowIndex}
        variant="body"
        cells={columns}
        renderRow={rows.renderRow && rows.renderRow[BODY]}
        data={rowData}
        stripedRows={stripedRows}
        rowBorders={rowBorders}
        columnBorders={columnBorders}
        ref={ref}
        classes={{
          ...classes,
          cell: bodyCell,
          row: bodyRow,
        }}
      />
    )
  })
}

/**
 * The EXTENDED Type of TableBody uses a render function to dynamically
 * render components. It also has a default renderer which accepts the data as is
 * and renders them on screen.
 *
 * @example EXTENDED:
 * <ExtendedTableBody renderBody = (value) =>
 *   <TableRow>
 *       <TableCell>Content: ${value}</TableCell>
 *   </TableRow>
 * />
 *
 * @example EXTENDED with defaults: (renders automatically)
 * <ExtendedTableBody/>
 */
export function ExtendedTableBody<T, K>(props: ExtendedTableBodyProps<T, K>): JSX.Element {
  const renderBody = props.renderBody || DefaultRenderBody
  const ref = useRef<HTMLTableSectionElement>(null)
  return (
    <MuiTableBody {...omit(props, ['columns', 'data'])} ref={ref}>
      {renderBody(props)}
    </MuiTableBody>
  )
}

/**
 * The NORMAL Type of TableBody provides the same functionality as Material UI
 * so that it can be seamlessly used by replacing material ui's component with silhoutte core's
 * component
 * @example NORMAL:
 * <TableBody>
 *    <TableRow>
 *         <TableCell>content</TableCell>
 *    </TableRow>
 *    <TableRow>
 *         <TableCell>content</TableCell>
 *    </TableRow>
 * </TableBody>
 */
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
  const { children, component } = props
  return (
    <MuiTableBody component={component} {...props} ref={ref}>
      {children}
    </MuiTableBody>
  )
})

ExtendedTableBody.displayName = 'ExtendedTableBody'
TableBody.displayName = 'TableBody'
