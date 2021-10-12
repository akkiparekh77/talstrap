import { Omit } from '@material-ui/core'
import MuiTableRow, { TableRowProps as MuiTableRowProps } from '@material-ui/core/TableRow'
import clsx from 'clsx'
import { ElementType, forwardRef, ReactNode, TableHTMLAttributes, useRef } from 'react'

import { ClassNameMap, makeStyles, Theme } from '../../styles'
import { SortProps } from '../Table/Table'
import {
  DefaultRenderCell,
  ExtendedTableCell,
  ExtendedTableCellProps,
  RenderCellArgs,
  RenderCellOptions,
} from '../TableCell/TableCell'
import { BODY, TableRowVariant } from '../TableCell/types'

/**
 * Defines the default styles of a Table Row
 */
const useStyles = makeStyles((theme: Theme) => ({
  row: {
    letterSpacing: theme.typography.body2.letterSpacing,
  },
  rowHover: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  stripedRows: {
    borderBottom: 'none',
    '&:nth-child(even)': {
      backgroundColor: theme.palette.table.stripedRows,
    },
  },
}))

/**
 * Defines the function signature of the Render Cell Function for the table row
 */
type TRenderCellFunction<T, K> = (
  value: RenderCellArgs<T>['value'],
  cellKey: RenderCellArgs<T>['cellKey'],
  options: RenderCellArgs<T>['options'],
  rowData: K
) => ReactNode

/**
 * Extending the cell props so that extra information can be parsed by table row
 */
export interface CellProps<T, K> extends Omit<ExtendedTableCellProps<T>, 'renderCell'> {
  /**
   * The label helps in naming the column
   */
  label?: T
  /**
   * The extended type of TableCell accepts a render cell function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   * Table Row adds the rowData to the same function for easier access of data for each cell
   * since sometimes, the data in a table needs to be computed based on the row data
   */
  renderCell?: {
    body?: TRenderCellFunction<T, K>
    head?: TRenderCellFunction<T, K>
  }
}

// 'css' property is added by node_modules/@emotion/core/types/index.d.ts
// couldn't get rid of it in compiled code other way
export interface CommonTableRowProps extends Omit<MuiTableRowProps, 'css'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: ClassNameMap
  /**
   * Can be used to hide/show an entire row
   */
  hide?: boolean
  /**
   * If true, the table row will shade on hover.
   */
  hover?: MuiTableRowProps['hover']
  /**
   * Decides if rows should have borders on not
   */
  rowBorders?: boolean
  /**
   * Provides unique identifier for the row
   */
  rowKey?: number | string
  /**
   * If true, the table row will have the selected shading.
   */
  selected?: MuiTableRowProps['selected']
  /**
   * Specify if the table is to be striped or not
   */
  stripedRows?: boolean
  /**
   * Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant?: TableRowVariant
}

type ComponentType = ElementType<TableHTMLAttributes<HTMLTableRowElement>>

export interface TableRowProps extends CommonTableRowProps {
  /**
   * Should be valid `<td>` children such as `TableCell`.
   */
  children: ReactNode
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component?: ComponentType
}

export interface ExtendedTableRowProps<T, K> extends CommonTableRowProps {
  /**
   * Every cell in a table is made up of a few column properties
   * These properties are passed on to the cell
   */
  cells?: CellProps<T, K>[]
  /**
   * Whether column borders are required or not
   */
  columnBorders?: boolean
  /**
   * Data that exists for a single row. This data can be manipulated
   * and transformed for a cell
   */
  data?: K
  /**
   * The extended type of TableRow accepts a render row function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   */
  renderRow?: TRenderRowFunction<T, K>
  /**
   * The sorting details provided to the table. Note this does NOT automatically sort the data
   */
  sort?: SortProps<T>
}

/**
 * Defines the function signature of the Render Row Function.
 */
export type TRenderRowFunction<T, K> = (
  data?: K,
  key?: number | string,
  rowProps?: Omit<ExtendedTableRowProps<T, K>, 'renderRow'>
) => ReactNode

/**
 * The set of defaults required for a TableRow in a TableCell to provide
 * default extended rendering
 */
const defaultCellProps = {
  cellKey: 0,
}

/**
 * Default renderer for the TableRow Extended Type
 * If the variant used is NORMAL, then this function will not be used
 */
function DefaultRenderRow<T, K>(
  rowData: K,
  rowKey: number | string,
  tableRowProps: Omit<ExtendedTableRowProps<T, K>, 'renderRow'>
) {
  const { cells = [], variant = BODY, hide, columnBorders, sort, stripedRows, rowBorders } = tableRowProps
  return cells.map((singleCell: CellProps<T, K> = defaultCellProps, columnIndex: number) => {
    const { cellKey = 0, renderCell, align = 'left' } = singleCell
    let cellData
    if (rowData) {
      cellData = rowData[cellKey]
    } else if (singleCell.label) {
      cellData = singleCell.label
    }

    const renderCellFn = renderCell && renderCell[variant] ? renderCell[variant] : DefaultRenderCell

    return (
      <ExtendedTableCell
        {...singleCell}
        rowKey={rowKey}
        key={columnIndex}
        columnBorders={columnBorders}
        value={cellData}
        hide={hide}
        sort={sort}
        variant={variant}
        stripedRows={stripedRows}
        rowBorders={rowBorders}
        renderCell={(value, key = 0, options = {}) =>
          renderCellFn(value as T, key as number | string, options as RenderCellOptions<T>, rowData)
        }
        align={align}
      />
    )
  })
}

/**
 * The EXTENDED Type of TableRow uses a render function to dynamically
 * render components. It also has a default renderer which accepts the data as is
 * and renders them on screen.
 *
 * It needs a `th` or `td` component to render the data within it
 * T: Generic Datatype for data of a cell
 * K: Generic Datatype for data of row
 * @example EXTENDED:
 * <ExtendedTableRow renderRow = (value) => <TableCell>Content: ${value}</TableCell>></TableRow>
 *
 * @example EXTENDED with defaults:
 * <ExtendedTableRow/>
 */
export function ExtendedTableRow<T, K>(props: ExtendedTableRowProps<T, K>): JSX.Element {
  const { row, rowHover, stripedRows: stripedRowsClass } = useStyles()
  const {
    hover = true,
    selected,
    renderRow = DefaultRenderRow,
    rowKey,
    classes = { row: '' },
    data,
    cells,
    variant,
    hide,
    columnBorders,
    sort,
    stripedRows,
    rowBorders,
    ...otherProps
  } = props

  const renderRowProps = {
    cells,
    variant,
    classes,
    hide,
    columnBorders,
    sort,
    stripedRows,
    rowBorders,
  }

  const ref = useRef<HTMLTableRowElement>(null)

  return (
    <MuiTableRow
      {...otherProps}
      ref={ref}
      hover={hover}
      selected={selected}
      classes={{
        root: clsx(row, classes.row, { [stripedRowsClass]: stripedRows }),
        hover: rowHover,
      }}
    >
      {renderRow(data as K, rowKey as number | string, renderRowProps) as TRenderRowFunction<T, K>}
    </MuiTableRow>
  )
}

/**
 * The NORMAL Type of TableRow provides the same functionality as Material UI
 * so that it can be seamlessly used by replacing material ui's component with silhoutte core's
 * component
 *
 *  @example NORMAL:
 * <TableRow><TableCell>Content</TableCell></TableRow>
 */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { hover = true, selected, children, component, classes = { row: '' }, stripedRows, ...otherProps } = props
  const { row, rowHover, stripedRows: stripedRowsClass } = useStyles()

  return (
    <MuiTableRow
      {...otherProps}
      ref={ref}
      hover={hover}
      selected={selected}
      component={component as ComponentType}
      classes={{
        ...classes,
        root: clsx(row, classes.row, {
          [stripedRowsClass]: stripedRows,
        }),
        hover: rowHover,
      }}
    >
      {children}
    </MuiTableRow>
  )
})

TableRow.displayName = 'TableRow'
ExtendedTableRow.displayName = 'ExtendedTableRow'
