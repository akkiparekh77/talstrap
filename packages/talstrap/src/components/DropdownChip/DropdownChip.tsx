import { FC, forwardRef, MouseEvent as ReactMouseEvent, useState } from 'react'

import { Box } from '../Box'
import { EmptyLabel } from '../FilterChip'
import { Tag, TagProps } from '../Tag'
import { DropdownChipPopup } from './DropdownChipPopup'

export type SelectOptionType = {
  value: string | number
  label: string
  color?: 'info' | 'success' | 'warning' | 'error' | 'highlight' | 'default'
  disabled?: boolean
  hidden?: boolean
}

export interface DropdownChipProps extends TagProps {
  /**
   * Label for the dropdown, displayed when it is clicked.
   *
   * Can be an empty string, but the DropdownChip is hidden if both the label and value is empty.
   */
  dropdownLabel?: string
  /**
   * Callback fired when clicking on an option
   */
  onOptionSelect?: (option: SelectOptionType) => void
  /**
   * Option that is currently selected. The label for the same will be displayed on the chip
   */
  selectedOption: SelectOptionType
  /**
   * Set of options having atleast a value and a label that can be selected
   */
  options: SelectOptionType[]
}

/**
 * This component is based on the `material-ui` Chip.
 *
 * For a more complete list of props, see https://material-ui.com/api/chip/.
 */
export const DropdownChip: FC<DropdownChipProps> = forwardRef(
  (
    {
      dropdownLabel,
      onDelete,
      disabled: disabledProp,
      options,
      selectedOption,
      color = 'default',
      onOptionSelect,
      ...rest
    },
    ref
  ) => {
    const disabled = !!disabledProp
    const [isOpen, setIsOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handleClickButton = (event: ReactMouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget)
      setIsOpen(!isOpen)
    }

    const handleClose = () => {
      setAnchorEl(null)
      setIsOpen(false)
    }

    return (
      <>
        <Tag
          variant="outlined"
          color={selectedOption.color || 'default'}
          ref={ref}
          onClick={handleClickButton}
          classes={rest.classes}
          disabled={disabled}
          {...rest}
          label={<EmptyLabelContainer label={selectedOption.label} tab-index="0" />}
        />
        <DropdownChipPopup
          label={dropdownLabel}
          options={options}
          open={isOpen}
          anchorEl={anchorEl}
          onSelect={(option: SelectOptionType) => {
            setIsOpen(false)
            onOptionSelect && onOptionSelect(option)
          }}
          onClose={handleClose}
        />
      </>
    )
  }
)

DropdownChip.displayName = 'DropdownChip'

interface DropdownChipDisplayProps {
  label: string
}

const EmptyLabelContainer: FC<Pick<DropdownChipDisplayProps, 'label'>> = ({ label, ...rest }) => (
  <Box component="span" display="flex" alignItems="center">
    <EmptyLabel label={label} {...rest} />
  </Box>
)
