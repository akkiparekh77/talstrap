import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
}

export const createTypographyOptions = (): TypographyOptions => ({
  fontFamily: '"Roboto", sans-serif',
  fontWeightLight: fontWeight.light,
  fontWeightRegular: fontWeight.regular,
  fontWeightMedium: fontWeight.medium,
  fontWeightBold: fontWeight.bold,
  h1: {
    fontSize: '6rem',
    fontWeight: fontWeight.light,
    letterSpacing: '-0.015625em',
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: fontWeight.light,
    letterSpacing: '-0.008333em',
  },
  h3: {
    fontSize: '3rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0.007353em',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: fontWeight.bold,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: fontWeight.bold,
    letterSpacing: '0.009375em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: fontWeight.medium,
    letterSpacing: '0.007143em',
    textTransform: 'uppercase',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0.015625em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0.017857em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: fontWeight.medium,
    letterSpacing: '0.089286em',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: fontWeight.regular,
    letterSpacing: '0.033333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: fontWeight.medium,
    letterSpacing: '0.083333em',
    textTransform: 'uppercase',
  },
})
