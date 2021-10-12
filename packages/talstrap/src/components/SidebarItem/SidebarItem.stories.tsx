import { boolean, text } from '@storybook/addon-knobs'

import { HomeIcon, SettingsRoundedIcon } from '../../icons'
import { makeStyles } from '../../styles'
import { Avatar, Box, Sidebar } from '../'
import { SidebarItem } from './SidebarItem'

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 40,
    width: 40,
    margin: theme.spacing(0, -1.125),
  },
}))

export default {
  title: 'SidebarItem',
  component: SidebarItem,
}

export const playground = (): JSX.Element => {
  const knobs = {
    selected: boolean('selected', false),
    showBadge: boolean('showBadge', false),
    showLabel: boolean('showLabel', false),
    label: text('label', 'Home'),
  }

  return (
    <Sidebar open expanded={knobs.showLabel}>
      <SidebarItem
        BadgeProps={{
          badgeContent: 1,
          invisible: !knobs.showBadge,
          variant: 'dot',
        }}
        icon={<HomeIcon />}
        selected={knobs.selected}
        showLabel={knobs.showLabel}
        label={knobs.label}
      />
    </Sidebar>
  )
}

export const examples = (): JSX.Element => {
  const classes = useStyles()

  const sidebarContents = (
    <>
      <SidebarItem icon={<HomeIcon />} label="Home" selected showLabel />
      <SidebarItem
        icon={<SettingsRoundedIcon />}
        BadgeProps={{ badgeContent: 1, variant: 'dot' }}
        label="Settings"
        showLabel
      />
      <Box flexGrow={1} />
      <SidebarItem icon={<Avatar className={classes.avatar}>MM</Avatar>} label="Max Mustermann" showLabel />
    </>
  )

  return (
    <>
      <Sidebar open expanded>
        {sidebarContents}
      </Sidebar>
      <Sidebar open anchor="right">
        {sidebarContents}
      </Sidebar>
    </>
  )
}
