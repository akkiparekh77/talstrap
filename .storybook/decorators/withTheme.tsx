import { themes, ThemeProvider } from '../../packages/talstrap/src/styles'

export const withTheme = (story) => <ThemeProvider theme={themes.base}>{story()}</ThemeProvider>
