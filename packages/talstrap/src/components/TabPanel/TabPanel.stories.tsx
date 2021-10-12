import { Story } from '@storybook/react/types-6-0'

import { Box } from '../Box'
import { Paper } from '../Paper'
import { TabContext } from '../TabContext'
import { TabPanel, TabPanelProps } from './'

export default {
  title: 'TabPanel',
  component: TabPanel,
  subcomponents: { TabContext },
}

const Template: Story<TabPanelProps> = (args) => (
  <Paper>
    <Box p={3}>
      <TabContext {...args}>
        <TabPanel value="item-1">Tab content one</TabPanel>
        <TabPanel value="item-2">Tab content two</TabPanel>
      </TabContext>
    </Box>
  </Paper>
)

export const Primary = Template.bind({})

Primary.args = {
  value: 'item-1',
}

export const examples = (): JSX.Element => {
  return (
    <Paper>
      <Box p={3}>
        <TabContext value="item-1">
          <TabPanel value="item-1">Tab content one</TabPanel>
          <TabPanel value="item-2">Tab content two</TabPanel>
        </TabContext>
      </Box>
    </Paper>
  )
}
