import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import { makeStyles } from '../../styles'
import { Box, BoxProps } from '../Box'

const useStyles = makeStyles((theme) => ({
  column: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(2.5),
    },
  },
  row: {
    '& > div:not(:last-child)': {
      marginRight: theme.spacing(2.5),
    },
  },
}))

export interface ReadOnlyProps extends BoxProps {
  /**
   * The class applied to the root element.
   */
  className?: string
  /**
   * The contents of the ReadOnly, normally `ReadOnlyItem`s.
   */
  children: ReactNode
  /**
   * The direction of the children items.
   * @default "column"
   */
  direction?: 'column' | 'row'
}

export const ReadOnly: FC<ReadOnlyProps> = ({ className, children, direction = 'column', ...props }) => {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection={direction}
      className={clsx({ [classes.column]: direction === 'column', [classes.row]: direction === 'row' }, className)}
      {...props}
    >
      {children}
    </Box>
  )
}
