import { create } from '@storybook/theming/create'
import { rgba } from 'polished'
import { BrandColor, UiColor } from '../packages/talstrap/src/styles/options/colors'

export const storybookTheme = create({
  base: 'light',

  colorPrimary: BrandColor.Cerulean,
  colorSecondary: BrandColor.Cerulean,

  // UI
  appBg: UiColor.Porcelain,
  appContentBg: UiColor.White,
  appBorderColor: rgba(UiColor.BlueZodiac, 0.42),
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: UiColor.BlueZodiac,
  textInverseColor: UiColor.White,

  // Toolbar default and active colors
  barTextColor: UiColor.BlueZodiac,
  barSelectedColor: BrandColor.Cerulean,
  barBg: UiColor.Porcelain,

  // Form colors
  inputBg: UiColor.White,
  inputBorder: rgba(UiColor.BlueZodiac, 0.42),
  inputTextColor: UiColor.BlueZodiac,
  inputBorderRadius: 4,

  brandTitle: 'Talview',
  brandImage: 'https://static.talview.com/icons/storybook-talstrap.svg',
})
