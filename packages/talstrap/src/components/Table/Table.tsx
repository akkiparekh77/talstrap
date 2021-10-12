import { Omit, TableSortLabelProps } from '@material-ui/core'
import MuiTable, { TableProps as MuiTableProps } from '@material-ui/core/Table'
import { ElementType, forwardRef, MouseEvent as ReactMouseEvent, ReactNode, TableHTMLAttributes, useRef } from 'react'

import { ClassNameMap } from '../../styles'
import { ExtendedTableBody, TRenderBodyFunction } from '../TableBody/TableBody'
import { RenderCellArgs } from '../TableCell/TableCell'
import { ExtendedTableHead, TRenderHeadFunction } from '../TableHead/TableHead'
import { CellProps, ExtendedTableRowProps, TRenderRowFunction } from '../TableRow/TableRow'

/**
 * Extending the row props so that extra information can be parsed by table body/head
 */
export interface RowProps<T, K> extends Omit<ExtendedTableRowProps<T, K>, 'renderRow'> {
  /**
   * The extended type of TableRow accepts a render row function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   */
  renderRow?: {
    body?: TRenderRowFunction<T, K>
    head?: TRenderRowFunction<T, K>
  }
}

export interface SortProps<T> extends Omit<TableSortLabelProps, 'active' | 'onClick'> {
  active: (column?: T, key?: string | number, options?: RenderCellArgs<T>['options']) => boolean
  onClick: (event: ReactMouseEvent, column?: T, key?: string | number, options?: RenderCellArgs<T>['options']) => void
}

/**
 * Extending the head props so that extra information can be parsed by table head
 * during render
 */
export interface HeadProps<T, K> {
  renderHead: TRenderHeadFunction<T, K>
}

/**
 * Extending the head props so that extra information can be parsed by table body
 * during render
 */
export interface BodyProps<T, K> {
  renderBody: TRenderBodyFunction<T, K>
}

export interface CommonTableProps extends Omit<MuiTableProps, 'css'> {
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes?: ClassNameMap
  /**
   * Add a colgroup to the table giving control over columns
   */
  colGroup?: ReactNode
}

type ComponentType = ElementType<TableHTMLAttributes<HTMLTableElement>>

export interface TableProps extends CommonTableProps {
  /**
   * Should be valid `<thead>` and `<tbody` children such as `TableHead` and `TableRow`.
   */
  children: ReactNode
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component?: ComponentType
}

export interface ExtendedTableProps<T, K> extends CommonTableProps {
  /**
   * The body properties of the table.
   */
  body?: BodyProps<T, K>
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
   * The header properties of the table.
   */
  head?: HeadProps<T, K>
  /**
   * The set of rows present in the table. Each column is composed of rows properties
   */
  rows?: RowProps<T, K>
  /**
   * Decides if rows should have borders on not
   */
  rowBorders?: boolean
  /**
   * The sorting details provided to the table. Note this does NOT automatically sort the data
   */
  sort?: SortProps<T>
  /**
   * Specify if the table is to be striped or not
   */
  stripedRows?: boolean
}

/**
 * The EXTENDED Type of Table uses a render function to dynamically
 * render components. It also has a default renderer which accepts the data as is
 * and renders them on screen.
 * The Table component uses Extended types of render the table
 * T: Generic Datatype for data of a cell
 * K: Generic Datatype for data of row
 * @example EXTENDED:
 * <ExtendedTable columns = [{key: 'Name'}, {key: 'Age'}] data = [{Name: 'Robin', Age: 23}] />
 *
 */
export function ExtendedTable<T, K>(props: ExtendedTableProps<T, K>): JSX.Element {
  const {
    padding,
    size,
    stickyHeader = false,
    columns,
    rows,
    head,
    body,
    stripedRows,
    rowBorders,
    columnBorders,
    sort,
  } = props
  const ref = useRef<HTMLTableElement>(null)

  return (
    <MuiTable padding={padding} size={size} stickyHeader={stickyHeader} classes={props.classes} ref={ref}>
      {props.colGroup ? props.colGroup : null}
      <ExtendedTableHead
        columns={columns}
        rows={rows}
        {...head}
        columnBorders={columnBorders}
        rowBorders={rowBorders}
        sort={sort}
      />
      <ExtendedTableBody
        columns={columns}
        data={props.data}
        rows={rows}
        {...body}
        stripedRows={stripedRows}
        rowBorders={rowBorders}
        columnBorders={columnBorders}
      />
    </MuiTable>
  )
}

/**
 * The NORMAL Type of Table provides the same functionality as Material UI
 * so that it can be seamlessly used by replacing material ui's component with silhoutte core's
 * component
 * @example NORMAL:
 * <Table>
 * <TableHead>
 *   <TableRow>
 *     <TableCell>
 *       {Name}
 *     </TableCell>
 *     <TableCell>
 *       {Age}
 *     </TableCell>
 *   </TableRow>
 * </TableHead>
 * <TableBody>
 * <TableRow>
 *     <TableCell>
 *       {Robin}
 *     </TableCell>
 *     <TableCell>
 *       {23}
 *     </TableCell>
 *   </TableRow>
 * </TableBody>
 * </Table>
 *
 */
export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, component, padding, size = 'small', stickyHeader = false, colGroup = null } = props

  return (
    <MuiTable
      ref={ref}
      component={component as ComponentType}
      padding={padding}
      size={size}
      stickyHeader={stickyHeader}
      classes={props.classes}
    >
      {colGroup}
      {children}
    </MuiTable>
  )
})

ExtendedTable.displayName = 'ExtendedTable'
Table.displayName = 'Table'
