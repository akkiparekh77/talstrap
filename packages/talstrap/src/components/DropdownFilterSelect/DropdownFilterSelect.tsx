import { FC, forwardRef, MouseEvent as ReactMouseEvent, ReactNode, useCallback, useEffect, useState } from 'react'

import { FilterChip, FilterChipProps } from '../FilterChip'
import { FilterSelectPopup } from './DropdownFilterSelectPopup'

export type AnchorElType = Element | null

export interface DropdownFilterSelectProps extends Omit<FilterChipProps, 'children' | 'onClick' | 'onDelete'> {
  /**
   * Label for the filter, displayed within the chip.
   *
   * Can be an empty string, but the FilterChip is hidden if both the label and value is empty.
   */
  label: string
  /**
   * Popup Content.
   */
  children: ReactNode
  /**
   * List of values selected in the filter.
   */
  value: string[]
  /**
   * Decides if the popup for the dropdown has to be displayed or not
   */
  open?: boolean
  /**
   * Function triggered on Filter Chip Click.
   */
  onClick?: (event: ReactMouseEvent<Element, MouseEvent>) => void
  /**
   * Disabled padding for Popup content.
   */
  disableContentPadding?: boolean
  /**
   * Function triggered on Filter chip Clear button click
   */
  onClear: () => void
  /**
   * Disables FilterChip
   */
  disabled?: boolean
}

/**
 * This component is based on the `material-ui` Chip.
 *
 * For a more complete list of props, see https://material-ui.com/api/chip/.
 */
export const DropdownFilterSelect: FC<DropdownFilterSelectProps> = forwardRef(
  ({ label, children, value, open = false, onClear, disableContentPadding = false, onClick, ...rest }, ref) => {
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(null)
    const [isOpen, setIsOpen] = useState(open)
    const handleClickButton = useCallback((event: ReactMouseEvent<Element, MouseEvent>): void => {
      setIsOpen((wasOpen) => !wasOpen)
      setAnchorEl(anchorEl ? null : event.currentTarget)
      if (onClick) {
        onClick(event)
      }
    }, [])

    useEffect(() => {
      setIsOpen(open)
    }, [open])

    const handleClickAway = () => {
      setIsOpen(false)
      setAnchorEl(null)
    }

    return (
      <>
        <FilterChip
          value={value}
          onClick={handleClickButton}
          label={label}
          onDelete={onClear}
          aria-haspopup={true}
          aria-expanded={isOpen}
          ref={ref}
          {...rest}
        />
        <FilterSelectPopup
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClickAway}
          label={label}
          disableContentPadding={disableContentPadding}
        >
          {children}
        </FilterSelectPopup>
      </>
    )
  }
)

DropdownFilterSelect.displayName = 'DropdownFilterSelect'
