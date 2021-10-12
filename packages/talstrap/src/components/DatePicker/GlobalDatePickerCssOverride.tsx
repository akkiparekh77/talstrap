import { ComponentType } from 'react'

import { withStyles } from '../../styles'

// WARNING!!! Although this is named as DatePickerCssOverride, it is very much
// possible to override any other css rule. Please do not add any rule here that
// affects more than the DatePicker itself.
export const GlobalDatePickerCssOverride: ComponentType = withStyles((theme) => ({
  '@global': {
    '[class*="MuiPickersModal-dialog"]': {
      paddingTop: '0 !important',
    },
    '[class*="MuiPickersBasePicker-container"] ': {
      width: '328px',
      '& [class=*MuiPickersYearSelection-container]': {
        '& [class=*MuiPickersYear-yearSelected][class=*MuiPickersYear-root]': {
          fontWeight: theme.typography.fontWeightMedium,
        },
        '& [class=*MuiTypography-subtitle1]': {
          fontWeight: theme.typography.fontWeightRegular,
        },
      },
      '& [class*="MuiIconButton-root"]': {
        padding: 0,
        margin: theme.spacing(0, 0.25),
        '&[class*="MuiPickersDay-current"]': {
          color: theme.palette.primary.main,
          '&[class*="MuiPickersDay-daySelected"]': {
            color: theme.palette.primary.contrastText,
          },
        },
      },
      '& [class*="MuiPickersCalendar-transitionContainer"]': {
        marginBottom: theme.spacing(-2),
      },
      '& [class*="MuiPickersCalendarHeader-dayLabel"]': {
        margin: theme.spacing(0, 0.25),
      },
      '& [class*="MuiPickersDay-daySelected"]': {
        color: theme.palette.primary.contrastText,
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor: theme.palette.primary.main,
      },
      '& [class*="MuiPickersDatePickerRoot-toolbar"]': {
        '& [class*="MuiButton-root"]': {
          minWidth: 0,
        },
        '&  [class*="MuiPickersToolbarText-toolbarTxt"]': {
          fontWeight: theme.typography.fontWeightRegular,
          textTransform: 'none',
        },
        '&  [class*="MuiButton-text"]': {
          padding: 0,
        },
      },
    },
  },
}))(() => null)
