import MuiTypography, { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography'
import clsx from 'clsx'
import { ElementType, FC, ReactNode } from 'react'

import { makeStyles, Theme } from '../../styles'

export interface TypographyProps extends MuiTypographyProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * The color of the component.
   * @default "textPrimary"
   */
  color?: MuiTypographyProps['color']
  /**
   * The variant to use.
   * @default "body2"
   */
  variant?: MuiTypographyProps['variant']
  /**
   * The component used for the root node. Either a string to use a DOM element or a component. Overrides the behavior of the `variantMapping` prop.
   */
  component?: ElementType
  /**
   * Describes how the text should overflow. Note that the element must be a block element for overflow to take effect.
   * @default "default"
   */
  overflow?: 'ellipsis' | 'default'
}

const useStyles = makeStyles<Theme>(() => ({
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

/**
 * This component is based on the `material-ui` Typography.
 *
 * For a more complete list of props, see https://material-ui.com/api/typography/.
 */
export const Typography: FC<TypographyProps> = ({
  children,
  color = 'textPrimary',
  variant = 'body2',
  overflow = 'default',
  className: classNameProps,
  ...other
}) => {
  const classes = useStyles()
  const className = clsx({ [classes.ellipsis]: overflow === 'ellipsis' }, classNameProps)
  return (
    <MuiTypography color={color} variant={variant} className={className} {...other}>
      {children}
    </MuiTypography>
  )
}
