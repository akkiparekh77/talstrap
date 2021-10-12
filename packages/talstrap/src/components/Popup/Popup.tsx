import { CSSProperties } from '@material-ui/styles'
import clsx from 'clsx'
import { FC, MouseEvent as ReactMouseEvent, useState } from 'react'

import { makeStyles, Theme } from '../../styles'
import { ClickAwayListener } from '../ClickAwayListener'
import { Paper } from '../Paper'
import { Popper, PopperProps } from '../Popper'

interface PopupOffset {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

type StyleProps = Pick<PopupProps, 'height' | 'offset' | 'width'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ offset = {} }) => ({
    zIndex: theme.zIndex.tooltip,
    marginTop: offset.top || 0,
    marginBottom: offset.bottom || 0,
    marginLeft: offset.left || 0,
    marginRight: offset.right || 0,
  }),
  paper: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: props.width,
    height: props.height,
  }),
  arrow: {
    position: 'absolute',
    top: -14,
    width: 0,
    height: 0,
    borderTop: 0,
    borderLeft: '9px solid transparent',
    borderRight: '9px solid transparent',
    borderBottom: `14px solid ${theme.palette.background.paper}`,
  },
}))

export interface PopupProps extends PopperProps {
  /**
   * The reference element, or a function that returns the reference element, that may be used to set the position of the popover.
   */
  anchorEl: PopperProps['anchorEl']
  /**
   * The height of the popup.
   * @default 200
   */
  height?: CSSProperties['height']
  /**
   * The offset of the popup from the anchor element.
   * @default { top: 0, bottom: 0, left: 0, right: 0 }
   */
  offset?: PopupOffset
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: (event: ReactMouseEvent<Document, MouseEvent>) => void
  /**
   * If `true`, the popup is visible.
   */
  open: PopperProps['open']
  /**
   * Popup placement.
   * @default "bottom"
   */
  placement?: PopperProps['placement']
  /**
   * If `true`, an arrow pointing to the anchor element will be shown.
   * @default false
   */
  showArrow?: boolean
  /**
   * The width of the popup.
   * @default 300
   */
  width?: CSSProperties['width']
}

export const Popup: FC<PopupProps> = ({
  anchorEl,
  children,
  className,
  height = 200,
  offset,
  onClickAway,
  open,
  placement = 'bottom',
  showArrow = false,
  width = 300,
  ...other
}) => {
  const classes = useStyles({ height, offset, width })
  const [arrowEl, setArrowEl] = useState<HTMLElement | null>(null)
  const handleArrowRef = (node: HTMLSpanElement) => setArrowEl(node)

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      modifiers={{
        flip: {
          enabled: false,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: 'viewport',
        },
        arrow: {
          enabled: showArrow,
          element: arrowEl,
        },
      }}
      className={clsx(classes.root, className)}
      {...other}
    >
      {showArrow && <span className={classes.arrow} ref={handleArrowRef} />}
      <ClickAwayListener onClickAway={onClickAway}>
        <Paper elevation={2} className={classes.paper}>
          {children}
        </Paper>
      </ClickAwayListener>
    </Popper>
  )
}
