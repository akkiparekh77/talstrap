import { Story } from '@storybook/react/types-6-0'
import { ChangeEvent, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Box } from '../Box'
import { Paper } from '../Paper'
import { TabContext } from '../TabContext'
import { TabPanel } from '../TabPanel'
import { Tabs } from '../Tabs'
import { TabLink, TabLinkProps } from './TabLink'

export default {
  title: 'TabLink',
  component: TabLink,
}

const Template: Story<TabLinkProps> = (args) => (
  <Router>
    <Tabs divider value="home">
      <TabLink {...args} />
    </Tabs>
  </Router>
)

export const Primary = Template.bind({})

Primary.args = {
  label: 'Home',
  to: '/home',
  value: 'home',
  selected: true,
}

export const examples = (): JSX.Element => {
  const [pathname, setPathname] = useState('about')

  const handleChange = (_: ChangeEvent<unknown>, newPath: string) => {
    setPathname(newPath)
  }

  return (
    <Router>
      <Paper>
        <Tabs divider value={pathname} onChange={handleChange}>
          <TabLink label="Home" to="/home" value="home" />
          <TabLink label="About" to="/about" value="about" />
        </Tabs>
        <Box p={3}>
          <TabContext value={pathname}>
            <TabPanel value="home">Home page</TabPanel>
            <TabPanel value="about">About us page</TabPanel>
          </TabContext>
        </Box>
      </Paper>
    </Router>
  )
}
