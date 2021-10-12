import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import { rgba } from 'polished'

import { StatusColor, TagColor, UiColor } from './colors'

const baseTheme: PaletteOptions = {
  primary: {
    main: UiColor.RoyalBlue,
    contrastText: rgba(UiColor.White, 0.9),
  },
  text: {
    primary: rgba(UiColor.BlueZodiac, 1),
    secondary: rgba(UiColor.BlueZodiac, 0.65), // This is Medium Emphasis
    disabled: rgba(UiColor.BlueZodiac, 0.42),
    hint: rgba(UiColor.BlueZodiac, 0.42),
  },
  background: {
    default: UiColor.Porcelain,
    paper: UiColor.White,
  },
  error: {
    main: StatusColor.PersianRed,
  },
  action: {
    hover: rgba(UiColor.BlueZodiac, 0.08),
    selected: rgba(UiColor.RoyalBlue, 0.08),
    disabled: rgba(UiColor.BlueZodiac, 0.42),
    disabledBackground: UiColor.Porcelain,
  },
  header: {
    background: UiColor.BlackPearl,
  },
  menu: {
    default: UiColor.Abbey,
    selected: UiColor.RoyalBlue,
  },
  sidebar: {
    default: UiColor.MidGray,
    selected: UiColor.RoyalBlue,
  },
  status: {
    info: StatusColor.RoyalBlue,
    success: StatusColor.FruitSalad,
    warning: StatusColor.SeaBuckthorn,
    error: StatusColor.PersianRed,
    highlight: StatusColor.Purple,
    default: rgba(UiColor.BlueZodiac, 0.42),
  },
  table: {
    stripedRows: rgba(UiColor.BlueZodiac, 0.08),
    headerBackground: UiColor.Porcelain,
    headerColor: rgba(UiColor.Black, 0.6),
  },
  tag: {
    info: TagColor.CatskillWhite,
    success: TagColor.Peppermint,
    warning: TagColor.Derby,
    error: TagColor.WePeep,
    highlight: TagColor.Snuff,
    default: UiColor.Porcelain,
  },
}

export const createPaletteOptions = (): PaletteOptions => baseTheme
