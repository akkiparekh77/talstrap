import clsx from 'clsx'
import { FC } from 'react'

import { makeStyles, Theme } from '../../styles'
import { Link } from '../Link'
import { LinkProps } from '../Link/Link'
import { Tab, TabProps } from '../Tab'

export type TabLinkProps = {
  /**
   * A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
   */
  to: LinkProps['to']
} & TabProps &
  LinkProps

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    fontSize: theme.typography.body1.fontSize,
  },
}))

export const TabLink: FC<TabLinkProps> = ({ classes: defaultClasses, ...rest }) => {
  const classes = useStyles()
  // TODO: remove after the ff. issue is fixed in material-ui
  // 'component' prop is not recognized by TypeScript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <Tab
      component={Link}
      classes={{
        root: clsx(classes.root, defaultClasses?.root),
      }}
      replace
      {...rest}
    />
  )
}
