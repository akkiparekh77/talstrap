import { Omit, TableSortLabel } from '@material-ui/core'
import MuiTableCell, {
  TableCellBaseProps as MuiTableCellBaseProps,
  TableCellProps as MuiTableCellProps,
} from '@material-ui/core/TableCell'
import clsx from 'clsx'
import { PositionProperty, TextOverflowProperty, VisibilityProperty } from 'csstype'
import { ElementType, forwardRef, ReactNode, useRef } from 'react'

import { ClassNameMap, makeStyles, Theme } from '../../styles'
import { SortProps } from '../Table/Table'
import { BODY } from './types'

/**
 * Defines the default styles of a Table Cell.
 * Since a Table Cell depends on the whether it is HEAD/BODY/FOOTER component,
 * most of it's design styles is passed from it's parents
 */
const useStyles = makeStyles<Theme>((theme) => ({
  cell: {
    maxWidth: theme.spacing(20),
    overflow: 'hidden' as VisibilityProperty,
    textOverflow: 'ellipsis' as TextOverflowProperty,
    height: '56px',
    padding: theme.spacing(0, 1),
  },
  noRowBorders: {
    borderBottom: `0px solid ${theme.palette.divider}`,
  },

  hiddenCell: {
    height: 0,
    padding: 0,
    visibility: 'hidden' as VisibilityProperty,
  },
  head: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.palette.table.headerColor,
    lineHeight: 'inherit',
    backgroundColor: theme.palette.table.headerBackground,
    zIndex: 1,
  },
  sizeSmall: {
    height: '40px',
  },
  stickyHeader: {
    position: 'sticky' as PositionProperty,
    top: 0,
  },
  body: {
    color: theme.palette.text.primary,
  },
  columnBorders: {
    border: `1px solid ${theme.palette.divider}`,
  },
  stripedRows: {
    borderBottom: 'none',
  },
}))

export interface CommonTableCellProps extends Omit<MuiTableCellProps, 'css'> {
  /**
   * Set the text-align on the table cell content.
   * Monetary or generally number fields should be right aligned as that allows you to add
   * them up quickly in your head without having to worry about decimals.
   */
  align?: MuiTableCellProps['align']
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: ClassNameMap
  /**
   * Value of colspan
   */
  colSpan?: number
  /**
   * Whether column borders are required or not
   */
  columnBorders?: boolean
  /**
   * Can be used to hide the cell as and when required
   */
  hide?: boolean
  /**
   * Provides unique identifier for a cell in a row
   */
  cellKey?: number | string
  /**
   * Sets the padding applied to the cell. By default, the Table parent component set the value (default).
   */
  padding?: MuiTableCellProps['padding']
  /**
   * Decides if rows should have borders on not
   */
  rowBorders?: boolean
  /**
   * Provides unique identifier for the row for the cell
   */
  rowKey?: number | string
  /**
   * Value of rowspan
   */
  rowSpan?: number
  /**
   * Set scope attribute.
   */
  scope?: MuiTableCellProps['scope']
  /**
   * Specify the size of the cell. By default, the Table parent component set the value (medium).
   */
  size?: MuiTableCellProps['size']
  /**
   * Set aria-sort direction.
   */
  sortDirection?: MuiTableCellProps['sortDirection']
  /**
   * Set the header sticky.
   */
  stickyHeader?: boolean
  /**
   * Specify if the table is to be striped or not
   */
  stripedRows?: boolean
  /**
   * Specify the cell type. By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant?: MuiTableCellProps['variant']
}

export interface TableCellProps extends CommonTableCellProps {
  /**
   * The table cell contents.
   */
  children?: ReactNode
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component?: ElementType<MuiTableCellBaseProps>
}

export interface ExtendedTableCellProps<T> extends CommonTableCellProps {
  /**
   * The extended type of TableCell accepts a render cell function which can help in
   * the dynamic rendering and hence can be controlled in a variety of ways
   */
  renderCell?: TRenderCellFunction<T>
  /**
   * The sorting details provided to the table. Note this does NOT automatically sort the data
   */
  sort?: SortProps<T>
  /**
   * The value provided for the extended type of cell using which it can self render
   */
  value?: T
  /**
   * Disable sort for the column.
   * @default false
   */
  disableSort?: boolean
}

/**
 * Defines the set of configurations/options provided during the rendering of a cell
 *
 */
export type RenderCellOptions<T> = {
  cellProps?: Omit<ExtendedTableCellProps<T>, 'renderCell'>
  rowKey?: number | string
}

/**
 * Defines the set of configurations/options provided during the rendering of a cell
 *
 */
export type RenderCellArgs<T> = {
  value?: T
  cellKey: number | string
  options: RenderCellOptions<T>
}

/**
 * Defines the function signature of the Render Cell Function.
 */
export type TRenderCellFunction<T> = (
  value: RenderCellArgs<T>['value'],
  cellKey: RenderCellArgs<T>['cellKey'],
  options: RenderCellArgs<T>['options']
) => ReactNode

/**
 * Default renderer for the TableCell Extended Type
 * If the variant used is NORMAL, then this function will not be used
 */
export function DefaultRenderCell<T>(value: T): ReactNode {
  const valueType = typeof value
  if (valueType === 'number' || valueType === 'string') {
    return <>{value}</>
  }
  return <></>
}

/**
 * The EXTENDED Type of TableCell uses a render function to dynamically
 * render components. It also has a default renderer which accepts the data as is
 * and renders them on screen.
 *
 * @example EXTENDED:
 * <ExtendedTableCell renderCell = (value) => `Content: ${value}`></TableCell>
 *
 */
export function ExtendedTableCell<T>(props: ExtendedTableCellProps<T>): JSX.Element {
  const {
    align,
    colSpan,
    columnBorders,
    cellKey = 0,
    padding,
    rowBorders = true,
    rowKey,
    rowSpan,
    scope,
    size,
    sortDirection,
    variant = BODY,
    renderCell = DefaultRenderCell,
    classes: classesProp = { cell: '' },
    value,
    stickyHeader = true,
    hide,
    sort,
    disableSort = false,
    stripedRows,
    ...otherProps
  } = props
  const classes = useStyles()
  const cellOptions: {
    cellProps: ExtendedTableCellProps<T>
    rowKey?: number | string
  } & typeof otherProps = {
    cellProps: props,
    rowKey: rowKey,
    ...otherProps,
  }

  const cellContent = renderCell(value, cellKey, cellOptions)
  const ref = useRef<HTMLTableCellElement>(null)
  const sortEnabled = sort && !disableSort

  return (
    <MuiTableCell
      ref={ref}
      align={align}
      colSpan={colSpan}
      classes={{
        ...classesProp,
        root: clsx(classes.cell, { [classes.hiddenCell]: hide }, classesProp.cell, {
          [classes.columnBorders]: columnBorders,
          [classes.stripedRows]: stripedRows,
          [classes.noRowBorders]: !rowBorders,
        }),
        body: clsx(classes.body, classesProp.body),
        head: clsx(classes.head, { [classes.stickyHeader]: stickyHeader }, classesProp.head),
        sizeSmall: classes.sizeSmall,
      }}
      key={`${cellKey}-${rowKey}`}
      padding={padding}
      rowSpan={rowSpan}
      scope={scope}
      size={size}
      sortDirection={sortDirection}
      variant={variant}
      title={typeof value === 'string' ? value : undefined}
      {...otherProps}
    >
      <span>
        {sortEnabled ? (
          <TableSortLabel
            {...sort}
            active={sort.active(value, cellKey, cellOptions)}
            onClick={(event) => sort.onClick(event, value, cellKey, cellOptions)}
          >
            {cellContent}
          </TableSortLabel>
        ) : (
          cellContent
        )}
      </span>
    </MuiTableCell>
  )
}

/**
 * Default properties of the TableCell which can be overwritten
 */
const defaultProps = {
  variant: BODY,
  value: '',
}

/**
 * The NORMAL Type of TableCell provides the same functionality as Material UI
 * so that it can be seamlessly used by replacing material ui's component with silhoutte core's
 * component
 *
 *
 * @example NORMAL:
 * <TableCell>Content</TableCell>
 */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>((props = defaultProps, ref) => {
  const {
    align,
    children,
    colSpan,
    columnBorders,
    component,
    padding,
    rowBorders = true,
    rowSpan,
    scope,
    size,
    sortDirection,
    variant,
    classes: classesProp = { cell: '' },
    stickyHeader,
    hide,
    stripedRows,
    ...otherProps
  } = props
  const classes = useStyles()

  return (
    <MuiTableCell
      {...otherProps}
      ref={ref}
      align={align}
      component={component}
      colSpan={colSpan}
      padding={padding}
      rowSpan={rowSpan}
      scope={scope}
      size={size}
      sortDirection={sortDirection}
      classes={{
        ...classesProp,
        body: clsx(classes.body, classesProp.body),
        head: clsx(classes.head, { [classes.stickyHeader]: stickyHeader }, classesProp.head),
        root: clsx(classes.cell, { [classes.hiddenCell]: hide }, classesProp.cell, {
          [classes.columnBorders]: columnBorders,
          [classes.stripedRows]: stripedRows,
          [classes.noRowBorders]: !rowBorders,
        }),
        sizeSmall: classes.sizeSmall,
      }}
      variant={variant}
    >
      {children}
    </MuiTableCell>
  )
})

TableCell.displayName = 'TableCell'
