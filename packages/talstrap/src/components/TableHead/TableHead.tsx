import { Omit } from '@material-ui/core'
import MuiTableHead, { TableHeadProps as MuiTableHeadProps } from '@material-ui/core/TableHead'
import { omit } from 'lodash-es'
import { ElementType, forwardRef, ReactNode, TableHTMLAttributes, useRef } from 'react'

import { ClassNameMap } from '../../styles'
import { RowProps, SortProps } from '../Table/Table'
import { EXTENDED, HEAD, NORMAL } from '../TableCell/types'
import { CellProps, ExtendedTableRow } from '../TableRow/TableRow'

export interface CommonTableHeadProps extends Omit<MuiTableHeadProps, 'css'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: ClassNameMap
  /**
   *  Can be used to hide/show the entire header
   */
  hide?: boolean
}

export interface TableHeadProps extends CommonTableHeadProps {
  /**
   * The normal type of Table Head which does not have any implementation for the rendering
   * of the contents inside it.
   */
  type?: NORMAL
  /**
   * Should be valid `<tr>` children such as `TableRow`.
   */
  children: ReactNode
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component?: ElementType<TableHTMLAttributes<HTMLTableRowElement>>
}

export interface ExtendedTableHeadProps<T, K> extends CommonTableHeadProps {
  /**
   * The extended type of Table Head which has a default implementation for the rendering
   * of the contents inside it.
   */
  type?: EXTENDED
  /**
   * The set of columns present in the table. Each column is composed of cell properties
   */
  columns?: CellProps<T, K>[]
  /**
   * Whether column borders are required or not
   */
  columnBorders?: boolean
  /**
   * The set of rows present in the table. Each column is composed of rows properties
   */
  rows?: RowProps<T, K>
  /**
   * Decides if rows should have borders on not
   */
  rowBorders?: boolean
  /**
   * The extended type of TableHead accepts a render row function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   */
  renderHead?: TRenderHeadFunction<T, K>
  /**
   * The sorting details provided to the table. Note this does NOT automatically sort the data
   */
  sort?: SortProps<T>
  /**
   * Can cause headers to be sticky, i.e., stick to the top of the page
   */
  stickyHeader?: boolean
}

/**
 * Defines the function signature of the Render Head Function.
 */
export type TRenderHeadFunction<T, K> = (tableHeadProps?: ExtendedTableHeadProps<T, K>) => ReactNode

/**
 * Default renderer for the TableHead Extended Type
 * If the variant used is NORMAL, then this function will not be used
 *
 */
function DefaultRenderHead<T, K>(props: ExtendedTableHeadProps<T, K>) {
  const { rows = {}, columnBorders, sort, rowBorders } = props
  const columns: CellProps<T, K>[] = props.columns || []

  return props.hide ? (
    <></>
  ) : (
    <ExtendedTableRow
      {...props.rows}
      key={0}
      rowBorders={rowBorders}
      sort={sort}
      columnBorders={columnBorders}
      variant={HEAD}
      cells={columns as CellProps<T, K>[]}
      renderRow={rows.renderRow && rows.renderRow[HEAD]}
      hide={false}
    />
  )
}

/**
 * The EXTENDED Type of TableHead uses a render function to dynamically
 * render components. It also has a default renderer which accepts the data as is
 * and renders them on screen.
 * 
 * T: Generic Datatype for data of a cell
 * K: Generic Datatype for data of row
 *
 
 *
 * @example EXTENDED:
 * <ExtendedTableHead  renderHead = (value) =>
 *   <TableRow>
 *      <TableCell>Content: ${value}</TableCell>
 *   </TableRow>
 * />
 *
 * @example EXTENDED with defaults: (renders automatically)
 * <ExtendedTableHead/>
 *
 */
export function ExtendedTableHead<T, K>(props: ExtendedTableHeadProps<T, K>): JSX.Element {
  const renderHead = props.renderHead || DefaultRenderHead
  const ref = useRef<HTMLTableSectionElement>(null)
  return (
    <MuiTableHead {...omit(props, ['columns'])} ref={ref}>
      {renderHead(props as ExtendedTableHeadProps<T, K>)}
    </MuiTableHead>
  )
}

/**
 * The NORMAL Type of TableHead provides the same functionality as Material UI
 * so that it can be seamlessly used by replacing material ui's component with silhoutte core's
 * component
 *
 * @example NORMAL:
 * <TableHead>
 *    <TableRow>
 *         <TableCell>content</TableCell>
 *    </TableRow>
 *    <TableRow>
 *         <TableCell>content</TableCell>
 *    </TableRow>
 * </TableHead>
 */
export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
  return <MuiTableHead {...props} ref={ref} />
})

TableHead.displayName = 'TableHead'
