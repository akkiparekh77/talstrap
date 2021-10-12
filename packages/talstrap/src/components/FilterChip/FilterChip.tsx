import { Box, Chip, IconButton } from '@material-ui/core'
import { ChipProps } from '@material-ui/core/Chip'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Close from '@material-ui/icons/Close'
import { mix } from 'polished'
import { FC, forwardRef, MouseEvent as ReactMouseEvent } from 'react'

import { makeStyles, Theme } from '../../styles'

interface StyleProps {
  disabled: boolean
}

const useFilterChipStyle = makeStyles<Theme, StyleProps>(({ palette, spacing, typography }) => ({
  filterSelector: {
    border: `1px solid ${palette.text.hint}`,
    borderRadius: spacing(4),
    background: palette.background.paper,
    color: palette.text.primary,

    '&$hasValue': {
      background: palette.tag.info,
      borderColor: palette.primary.main,

      '&:hover, &:focus': {
        backgroundColor: mix(0.08, palette.status.info, palette.tag.info),
      },
    },
    '& .chipValue': {
      fontWeight: typography.fontWeightMedium,
      color: palette.primary.main,
    },
    '&$disabled': {
      background: palette.action.disabledBackground,
      borderColor: palette.divider,
      color: palette.text.hint,
      opacity: 1,

      '& .chipValue': {
        color: palette.text.secondary,
      },
    },
  },
  hasValue: {},
  disabled: {},
  closeIcon: {
    color: palette.primary.main,
    width: spacing(2.5),
    height: spacing(2.5),
  },
  closeIconButton: ({ disabled }) => ({
    display: disabled ? 'none' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: spacing(3),
    height: spacing(3),
    padding: 0,
    marginLeft: spacing(-0.75),
  }),
}))

export interface FilterChipProps extends ChipProps {
  /**
   * List of values selected in the filter.
   */
  value: string[]
  /**
   * Label for the filter, displayed within the chip.
   *
   * Can be an empty string, but the FilterChip is hidden if both the label and value is empty.
   */
  label: string
  /**
   * Callback fired when the chip is clicked, usually to open a popover.
   */
  onClick: (event: ReactMouseEvent) => void
  /**
   * Callback fired when the delete icon inside the chip is clicked, usually to clear selected values.
   */
  onDelete: () => void
}

/**
 * This component is based on the `material-ui` Chip.
 *
 * For a more complete list of props, see https://material-ui.com/api/chip/.
 */
export const FilterChip: FC<FilterChipProps> = forwardRef(
  ({ value, label, onClick, onDelete, disabled: disabledProp, ...rest }, ref) => {
    const disabled = !!disabledProp
    const hasValue = !!value.length
    const classes = useFilterChipStyle({ disabled })
    return (
      <>
        {(label || hasValue) && (
          <Chip
            label={<FilterChipDisplay value={value} label={label} tab-index="0" />}
            onDelete={hasValue ? onDelete : undefined}
            deleteIcon={
              <IconButton aria-label={`clear-filter-${label}`}>
                <Close aria-hidden="true" className={classes.closeIcon} />
              </IconButton>
            }
            variant="outlined"
            ref={ref}
            onClick={onClick}
            classes={{
              root: classes.filterSelector,
              deletable: classes.hasValue,
              disabled: classes.disabled,
              deleteIcon: classes.closeIconButton,
              ...rest.classes,
            }}
            disabled={disabled}
            {...rest}
          />
        )}
      </>
    )
  }
)

interface FilterChipDisplayProps {
  label: string
  value: string[]
}

export const EmptyLabel: FC<Pick<FilterChipDisplayProps, 'label'>> = ({ label, ...rest }) => (
  <>
    <Box component="span" mr={0.5} {...rest}>
      {label}
    </Box>
    <Box mr={-1} component={ArrowDropDown} />
  </>
)

const FilledLabel: FC<Pick<FilterChipDisplayProps, 'label'>> = ({ label, ...rest }) => (
  <Box component="span" mr={0.5} {...rest}>
    {label}
    <Box component="span" aria-hidden="true">
      :
    </Box>
  </Box>
)

const ChipValue: FC<Pick<FilterChipDisplayProps, 'value'>> = ({ value, ...rest }) => {
  const remainingValueLength = value.slice(1).length

  return (
    <Box component="span" className="chipValue" {...rest}>
      {value[0]}
      {!!remainingValueLength && (
        <Box component="span" ml={0.5} aria-valuetext={`${remainingValueLength} more filter selected`}>
          +{remainingValueLength}
        </Box>
      )}
    </Box>
  )
}

const FilterChipDisplay: FC<FilterChipDisplayProps> = ({ label, value }) => {
  const hasValue = !!value.length

  return (
    <Box component="span" data-testid={`filter-button-text-${label}`} display="flex" alignItems="center">
      {hasValue ? (
        <>
          {label && <FilledLabel label={label} data-testid={`filter-button-label-${label}`} />}
          {<ChipValue value={value} data-testid={`filter-button-value-${label}`} />}
        </>
      ) : (
        <EmptyLabel label={label} data-testid={`filter-button-label-${label}`} />
      )}
    </Box>
  )
}
