import { addons } from '@storybook/addons'
import { storybookTheme } from './theme'

addons.setConfig({
  showPanel: true,
  panelPosition: 'right',
  theme: storybookTheme,
})
