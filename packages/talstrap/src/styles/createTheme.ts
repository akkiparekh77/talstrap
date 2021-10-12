import { createTheme as createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles'

import { overriddenStyleOptions } from './options/overrideDefaults'
import { createPaletteOptions } from './options/palette'
import { createTypographyOptions } from './options/typography'

export const createTheme = (): MuiTheme =>
  createMuiTheme({
    palette: createPaletteOptions(),
    typography: createTypographyOptions(),
    overrides: overriddenStyleOptions(),
  })
