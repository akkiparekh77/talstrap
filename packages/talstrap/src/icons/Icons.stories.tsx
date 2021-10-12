import { select } from '@storybook/addon-knobs'
import { FC, useState } from 'react'

import { Box, Grid, Search, Typography } from '../components'
import { makeStyles, Theme } from '../styles'
import * as IconsList from './IconsList'

export default {
  title: 'Icons',
  component: IconsList.AnchorIcon,
}

export const playground = (): JSX.Element => {
  const knobs = {
    color: select('color', ['inherit', 'primary', 'action', 'disabled', 'error'], 'primary'),
    fontSize: select('font size', ['inherit', 'small', 'default', 'large'], 'small'),
  }
  return <IconsList.AnchorIcon color={knobs.color} fontSize={knobs.fontSize} />
}

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4, 0, 3),
    backgroundColor: theme.palette.background.default,
  },
  searchInput: {
    margin: theme.spacing(0, 0, 2),
    width: 350,
  },
  icon: {
    width: 182,
    minHeight: 120,
    padding: theme.spacing(0, 2),
  },
  iconName: {
    paddingTop: theme.spacing(2),
    wordBreak: 'break-all',
    textAlign: 'center',
    height: 44,
  },
  placeholder: {
    fontSize: 80,
  },
  banner: {
    fontSize: 48,
  },
  categoryTitle: {
    textTransform: 'capitalize',
  },
}))

const IconItem: FC<{ iconName: string; type?: string }> = ({ iconName, type = '' }) => {
  const classes = useStyles()
  const DisplayedIcon = IconsList[iconName]
  return (
    <Grid
      item
      key={iconName}
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.icon}
    >
      <DisplayedIcon color="action" className={classes[type]} />
      <Typography className={classes.iconName} variant="body2" color="textSecondary">
        {iconName}
      </Typography>
    </Grid>
  )
}
interface IconCategories {
  custom: string[]
  placeholder: string[]
  banner: string[]
  normal: string[]
}

const IconCategory: FC<{ category: string[]; type: string }> = ({ category, type }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" className={classes.categoryTitle}>
        {type} Icons
      </Typography>
      <Grid container className={classes.container}>
        {category.map((icon: string) => (
          <IconItem iconName={icon} key={icon} type={type} />
        ))}
      </Grid>
    </>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()
  const [searchKey, setSearchKey] = useState('')
  const filteredList = Object.keys(IconsList).filter((key) => key.toLowerCase().includes(searchKey.toLowerCase()))
  const categorizedList = filteredList.reduce(
    (acc: IconCategories, icon: string) => {
      if (icon.includes('FH') || icon.includes('Forto')) {
        acc.custom.push(icon)
      } else if (icon.includes('Placeholder')) {
        acc.placeholder.push(icon)
      } else if (icon.includes('Banner')) {
        acc.banner.push(icon)
      } else {
        acc.normal.push(icon)
      }
      return acc
    },
    { normal: [], placeholder: [], banner: [], custom: [] }
  )

  return (
    <Box p={2}>
      <Search
        placeholder="Search Icons"
        onChange={(e) => setSearchKey(e.target.value)}
        className={classes.searchInput}
        margin="dense"
        value={searchKey}
        variant="flat"
      />
      {Object.keys(categorizedList).map((category) => (
        <IconCategory key={category} category={categorizedList[category]} type={category} />
      ))}
    </Box>
  )
}
