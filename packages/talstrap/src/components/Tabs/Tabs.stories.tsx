import { Story } from '@storybook/react/types-6-0'
import { ChangeEvent, FC, useState } from 'react'

import { Tab } from '../Tab'
import { Table } from '../Table'
import { TableBody } from '../TableBody'
import { TableCell } from '../TableCell'
import { TableRow } from '../TableRow'
import { Tabs, TabsProps } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
}

const Template: Story<TabsProps> = (args) => {
  const [value, setValue] = useState(0)
  const handleChangeTab = (_event: ChangeEvent<unknown>, value: number) => {
    setValue(value)
  }

  return (
    <Tabs {...args} value={value} onChange={handleChangeTab}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  )
}

export const Primary = Template.bind({})

export const TabsWithDivider = Template.bind({})

TabsWithDivider.args = {
  divider: true,
}

const ExampleTabs: FC<Omit<TabsProps, 'value'>> = (props) => (
  <Tabs value={1} {...props}>
    <Tab label="Default" />
    <Tab label="Selected" />
    <Tab label="Disabled" disabled />
  </Tabs>
)

export const examples = (): JSX.Element => {
  const examplesToRender = [
    {
      label: 'Tabs',
      component: <ExampleTabs />,
    },
    {
      label: 'Tabs with divider',
      component: <ExampleTabs divider />,
    },
  ]
  return (
    <Table size="medium">
      <TableBody>
        {examplesToRender.map(({ label, component }) => (
          <TableRow key={label}>
            <TableCell rowBorders={false}>{label}</TableCell>
            <TableCell rowBorders={false}>{component}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
