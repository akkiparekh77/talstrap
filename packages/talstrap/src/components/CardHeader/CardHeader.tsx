import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from '@material-ui/core/CardHeader'
import clsx from 'clsx'
import { FC, forwardRef, ReactNode } from 'react'

import { makeStyles, Theme } from '../../styles'

const useStyles = makeStyles<Theme>((theme) => ({
  cardHeader: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 2),
  },
  cardHeaderTitle: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  cardAction: {
    marginTop: -theme.spacing(0.5),
  },
}))

export interface CardHeaderProps extends Omit<MuiCardHeaderProps, 'title'> {
  /**
   * The content of the Card Title.
   */
  title?: ReactNode
  /**
   * The content of the component.
   */
  subheader?: MuiCardHeaderProps['subheader']
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps?: MuiCardHeaderProps['titleTypographyProps']
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps?: MuiCardHeaderProps['subheaderTypographyProps']
  /**
   * The action to display in the card header.
   */
  action?: MuiCardHeaderProps['action']
  /**
   * The Avatar for the Card Header.
   */
  avatar?: MuiCardHeaderProps['avatar']
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   * @default false
   */
  disableTypography?: MuiCardHeaderProps['disableTypography']
}

/**
 * This component is based on the `material-ui` CardHeader.
 *
 * For a more complete list of props, see https://material-ui.com/api/card-header/
 */
export const CardHeader: FC<CardHeaderProps> = forwardRef(({ classes: defaultClasses = {}, ...rest }, ref) => {
  const classes = useStyles()
  return (
    <MuiCardHeader
      ref={ref}
      classes={{
        ...defaultClasses,
        root: clsx(classes.cardHeader, defaultClasses.root),
        title: clsx(classes.cardHeaderTitle, defaultClasses.title),
        action: clsx(classes.cardAction, defaultClasses.action),
      }}
      {...rest}
    />
  )
})
CardHeader.displayName = 'CardHeader'
