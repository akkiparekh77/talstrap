import { Close as ClearIcon, Search as SearchIcon } from '@material-ui/icons'
import clsx from 'clsx'
import { FC, forwardRef } from 'react'

import { makeStyles, Theme } from '../../styles'
import { IconButton } from '../IconButton'
import { InputBase, InputBaseProps } from '../InputBase'
import { Paper, PaperProps } from '../Paper'

type StyleProps = Pick<SearchProps, 'disabled'>

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: ({ disabled }) => ({
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: '2rem',
    borderRadius: theme.shape.borderRadius * 4,
    padding: theme.spacing(0, 1, 0, 2),
    color: disabled ? theme.palette.action.disabled : undefined,
    borderColor: disabled ? theme.palette.divider : undefined,
    backgroundColor: disabled ? theme.palette.action.disabledBackground : undefined,
  }),
  inputRoot: {
    flexGrow: 1,
    height: '100%',
  },
  flat: {
    border: `1px solid ${theme.palette.text.hint}`,
  },
  searchIcon: ({ disabled }) => ({
    color: disabled ? theme.palette.action.disabled : undefined,
  }),
  inputInput: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    padding: 0,
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.75),
    '&:disabled': {
      color: theme.palette.action.disabled,
    },
    '&::placeholder': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&::-ms-clear, &&::ms-reveal': {
      display: 'none',
      width: 0,
      height: 0,
    },
    [`&::-webkit-search-decoration,
     &::-webkit-search-cancel-button,
     &::-webkit-search-results-button,
     &::-webkit-search-results-decoration`]: {
      display: 'none',
    },
  },
  label: {
    lineHeight: 0,
  },
  clearButton: {
    height: 32,
    width: 32,
    padding: 0,
    marginRight: theme.spacing(-0.5),
    color: theme.palette.action.active,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:disabled': {
      color: theme.palette.action.disabled,
    },
  },
  /**
   * This hides the element visually on screen, but makes it visible to screen readers.
   */
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    padding: 0,
    overflow: 'hidden',
    position: 'absolute',
  },
}))

export interface SearchProps extends InputBaseProps {
  /**
   * The className of the root component.
   */
  className?: PaperProps['className']
  /**
   * Alternative text for screen readers that describes the input.
   */
  label?: string
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: () => void
  /**
   * The value of the input inside the search bar.
   */
  value: string
  /**
   * Use the elevated variant when the component is directly on a page, flat when it's on a card
   * @default "elevated"
   */
  variant?: 'elevated' | 'flat'
}

/**
 * This component is based on the `material-ui` InputBase.
 *
 * For a more complete list of props, see https://material-ui.com/api/input-base/.
 */
export const Search: FC<SearchProps> = forwardRef(
  ({ className, placeholder, label, id = `${Math.random()}`, onClear, value, variant = 'elevated', ...props }, ref) => {
    const classes = useStyles({ disabled: props.disabled })
    const isFlat = variant === 'flat'

    return (
      <Paper className={clsx(classes.root, { [classes.flat]: isFlat }, className)} elevation={isFlat ? 0 : undefined}>
        <InputBase
          id={id}
          ref={ref}
          type="search"
          value={value}
          placeholder={placeholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          {...props}
        />
        {onClear && value.length > 0 ? (
          <IconButton className={classes.clearButton} onClick={onClear} disabled={props.disabled}>
            <ClearIcon />
          </IconButton>
        ) : (
          <SearchIcon color="action" aria-hidden={true} className={classes.searchIcon} />
        )}
        <label htmlFor={id} className={classes.label}>
          <span className={classes.visuallyHidden}>{label || placeholder}</span>
        </label>
      </Paper>
    )
  }
)
