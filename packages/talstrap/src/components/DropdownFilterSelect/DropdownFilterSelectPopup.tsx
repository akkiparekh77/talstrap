import { FC, ReactNode } from 'react'

import { IconButton } from '../IconButton'
import { Popup, PopupContent, PopupHeader } from '../Popup'
import { Typography } from '../Typography'
import { CloseIcon } from './../../icons'
import { makeStyles, Theme } from './../../styles'
import { AnchorElType } from './DropdownFilterSelect'

interface FilterSelectPopupProps {
  /**
   * Anchor Element for the popup based on which the popup appears
   */
  anchorEl: AnchorElType
  /**
   * Function triggered when closing the popup
   */
  onClose: () => void
  /**
   * Decides if the popup for the dropdown has to be displayed or not
   */
  open: boolean
  /**
   * Label for the Dropdown, displayed within the chip.
   *
   * Can be an empty string, but the DropdownChip is hidden if both the label and value is empty.
   */
  label: string
  /**
   * Contents that appear inside Popup
   */
  children: ReactNode
  /**
   * Disabled content padding
   */
  disableContentPadding: boolean
}

type StyleProps = Pick<FilterSelectPopupProps, 'disableContentPadding'>
const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  closeBtn: {
    position: 'absolute',
    right: 0,
  },
  popup: {
    zIndex: 1000,
    minWidth: 300,
  },
  popupHeader: {
    borderBottom: 'none',
  },
  popupContent: ({ disableContentPadding }) => ({
    display: 'initial',
    padding: disableContentPadding ? theme.spacing(0, 0, 1) : theme.spacing(1, 2, 2),
  }),
  headerText: {
    fontSize: theme.typography.body2.fontSize,
  },
}))

export const FilterSelectPopup: FC<FilterSelectPopupProps> = ({
  label,
  onClose,
  anchorEl,
  open,
  disableContentPadding,
  children,
}) => {
  const classes = useStyles({ disableContentPadding })
  return (
    <Popup
      onClickAway={onClose}
      className={classes.popup}
      height="auto"
      anchorEl={anchorEl}
      placement="bottom-start"
      open={open}
      width={'auto'}
    >
      <PopupHeader className={classes.popupHeader}>
        <Typography variant="subtitle1" className={classes.headerText}>
          {label}
        </Typography>
        <IconButton size="small" className={classes.closeBtn} onClick={onClose}>
          <CloseIcon color="action" />
        </IconButton>
      </PopupHeader>
      <PopupContent className={classes.popupContent} display="static">
        {children}
      </PopupContent>
    </Popup>
  )
}
