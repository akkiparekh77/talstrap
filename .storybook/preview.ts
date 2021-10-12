import { withA11y } from '@storybook/addon-a11y'
import { DocsContainer, DocsPage } from '@storybook/addon-docs'

import { withTheme } from './decorators/withTheme'
import { storybookTheme } from './theme'

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: storybookTheme,
  },
}

export const decorators = [withA11y, withTheme]
