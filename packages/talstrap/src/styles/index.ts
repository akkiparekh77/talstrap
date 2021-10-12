import { useMediaQuery } from '@material-ui/core'
import { Theme, useTheme } from '@material-ui/core/styles'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

import { createTheme } from './createTheme'

export const themes: Record<string, Theme> = {
  base: createTheme(),
}

type BreakpointOrNull = Breakpoint | null

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export function useWidth(): Breakpoint {
  const theme = useTheme<Theme>()
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse()
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

// Styles related exports
export {
  createGenerateClassName,
  createStyles,
  makeStyles,
  StylesProvider,
  Theme,
  ThemeOptions,
  ThemeProvider,
  useTheme,
  withStyles,
  StyleRules,
  fade,
  lighten,
} from '@material-ui/core/styles'
export { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

// We don't use these exports directly, but need to export them for other Typescript types resolution
export * from './augmentTheme'
export * from '@material-ui/core/styles/withStyles'
