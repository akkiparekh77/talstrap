import { boolean } from '@storybook/addon-knobs'

import { MenuList } from '../MenuList'
import { Paper } from '../Paper'
import { MenuItem } from './MenuItem'

export default {
  title: 'MenuItem',
  component: MenuItem,
}

export const playground = (): JSX.Element => {
  const knobs = {
    cascaded: boolean('cascaded', false),
    dense: boolean('dense', true),
    selected: boolean('selected', false),
    showCheckbox: boolean('showCheckbox', false),
  }

  return (
    <Paper style={{ width: 200 }}>
      <MenuList disablePadding>
        <MenuItem
          cascaded={knobs.cascaded}
          dense={knobs.dense}
          selected={knobs.selected}
          showCheckbox={knobs.showCheckbox}
        >
          Item
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

export const examples = (): JSX.Element => {
  return (
    <Paper style={{ width: 300 }}>
      <MenuList disablePadding>
        <MenuItem>Item</MenuItem>
        <MenuItem cascaded>Cascaded Item</MenuItem>
        <MenuItem selected>Selected Item</MenuItem>
        <MenuItem showCheckbox>Item with Checkbox</MenuItem>
        <MenuItem showCheckbox selected>
          Selected Item with Checkbox
        </MenuItem>
      </MenuList>
    </Paper>
  )
}
