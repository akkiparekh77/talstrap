import { FC } from 'react'

import { CloseIcon } from '../../icons'
import { makeStyles, Theme } from '../../styles'
import { IconButton } from '../IconButton'
import { MenuItem } from '../MenuItem'
import { Popup, PopupContent, PopupHeader } from '../Popup'
import { Typography } from '../Typography'
import { SelectOptionType } from './DropdownChip'

const useDropdownChipStyle = makeStyles<Theme>((theme) => ({
  closeBtn: {
    position: 'absolute',
    right: 0,
  },
  popup: {
    zIndex: 1000,
  },
  popupHeader: {
    borderBottom: 'none',
  },
  headerText: {
    fontSize: theme.typography.body2.fontSize,
  },
}))

export interface DropdownChipPopupProps {
  /**
   * Label for the Dropdown, displayed within the chip.
   *
   * Can be an empty string, but the DropdownChip is hidden if both the label and value is empty.
   */
  label?: string
  /**
   * Anchor Element for the popup based on which the popup appears
   */
  anchorEl: HTMLElement | null
  /**
   * Option that is selected. The label for the same will be displayed on the chip
   */
  onSelect: (option: SelectOptionType) => void
  /**
   * Function triggered when closing the popup
   */
  onClose: () => void
  /**
   * Set of options having atleast a value and a label that can be selected
   */
  options: SelectOptionType[]
  /**
   * Decides if the popup for the dropdown has to be displayed or not
   */
  open: boolean
}

/**
 * This component is for the header in the popup
 */
const DropdownChipPopupHeader: FC<{ label: string; onClose: () => void }> = ({ label, onClose }) => {
  const classes = useDropdownChipStyle()
  return (
    <PopupHeader className={classes.popupHeader}>
      <Typography variant="subtitle1" className={classes.headerText}>
        {label}
      </Typography>
      <IconButton className={classes.closeBtn} onClick={onClose}>
        <CloseIcon color="action" />
      </IconButton>
    </PopupHeader>
  )
}

/**
 * This component is for the list in the popup
 */
const DropdownChipList: FC<{ options: SelectOptionType[]; onSelect: (option: SelectOptionType) => void }> = ({
  options,
  onSelect,
}) => {
  return (
    <>
      {options.map((option: SelectOptionType) => {
        return (
          <>
            {option.hidden ? null : (
              <MenuItem
                disabled={!!option.disabled}
                onClick={() => onSelect(option)}
                value={option.value}
                key={option.value}
              >
                {option.label}
              </MenuItem>
            )}
          </>
        )
      })}
    </>
  )
}

/**
 * This component is for the popup in Dropdown Chip
 */
export const DropdownChipPopup: FC<DropdownChipPopupProps> = (props) => {
  const { label, onClose, options, onSelect, open, anchorEl } = props
  const classes = useDropdownChipStyle()

  return (
    <Popup open={open} anchorEl={anchorEl} className={classes.popup} width="auto" height="auto" onClickAway={onClose}>
      {label && <DropdownChipPopupHeader label={label} onClose={onClose} />}
      <PopupContent display="static">
        <DropdownChipList options={options} onSelect={onSelect} />
      </PopupContent>
    </Popup>
  )
}
