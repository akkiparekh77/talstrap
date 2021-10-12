import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette'
import { Overrides } from '@material-ui/core/styles/overrides'

import { createPaletteOptions } from './palette'
import { createTypographyOptions } from './typography'

export const overriddenStyleOptions = (): Overrides => ({
  MuiCssBaseline: {
    '@global': {
      body: {
        fontSize: createTypographyOptions().body1?.fontSize,
        fontWeight: createTypographyOptions().fontWeightRegular,
      },
      a: {
        color: (createPaletteOptions().primary as SimplePaletteColorOptions).main,
        textDecoration: 'none',
        // TODO: This should be removed by replacing the non-href anchors with buttons
        '&:not([href])': {
          cursor: 'pointer',
        },
        '&:focus': {
          outline: 0,
        },
      },
      img: {
        // Make images behave responsively. Here they will scale up to 100% of their natural size
        maxWidth: '100%',
        // Make images display as a block (UA default is usually inline)
        display: 'block',
      },
    },
  },
})
