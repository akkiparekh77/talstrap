import { boolean, radios, text } from '@storybook/addon-knobs'

import { BugReportIcon } from '../../icons'
import { makeStyles, Theme } from '../../styles'
import { Box } from '../Box'
import { StatusBox, StatusBoxVariant } from './StatusBox'

const useStyles = makeStyles<Theme>((theme) => ({
  label: {
    width: 250,
    textTransform: 'capitalize',
    fontFamily: theme.typography.fontFamily,
  },
  statusBox: {
    flex: 1,
  },
}))

export default {
  title: 'StatusBox',
  component: StatusBox,
}

export const playground = (): JSX.Element => {
  const knobs = {
    children: text('children', 'Add'),
    variant: radios(
      'variant',
      {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error',
        highlight: 'highlight',
        disabled: 'disabled',
      },
      'info'
    ),
    icon: boolean('icon', true),
    fullWidth: boolean('fullWidth', false),
  }

  return (
    <StatusBox variant={knobs.variant} icon={knobs.icon} fullWidth={knobs.fullWidth}>
      {knobs.children}
    </StatusBox>
  )
}

const variants = [
  {
    variant: 'warning',
    label: 'Warning',
    message:
      'These are info boxes that can contain warnings, errors, help messages and other important or helpful information that should not be missed',
  },
  {
    variant: 'warning',
    label: 'Warning with Icon',
    icon: true,
    message:
      'These are info boxes that can contain warnings, errors, help messages and other important or helpful information that should not be missed. They can have an icon, too! And it is vertically centered.',
  },
  {
    variant: 'info',
    label: 'Info',
    message: 'The support all status colors of the palette',
  },
  {
    variant: 'success',
    label: 'Success',
    message: 'Greeeeen! Yeah success 🎉',
  },
  {
    variant: 'highlight',
    label: 'Highlight',
    message: 'Purple — neutral.',
  },
  {
    variant: 'error',
    label: 'Error',
    message: 'Red — Error, Danger',
  },
  {
    variant: 'disabled',
    label: 'Disabled',
    message: 'Grey — Disabled',
  },
  {
    variant: 'info',
    icon: true,
    label: 'Info with icon',
    message: 'Info with icon',
  },
  {
    variant: 'success',
    label: 'Success with icon',
    icon: true,
    message: 'Success with icon 🎉',
  },
  {
    variant: 'error',
    label: 'Error with icon',
    icon: true,
    message: 'Error with icon',
  },
  {
    label: 'Info with Custom Icon',
    variant: 'info',
    icon: <BugReportIcon />,
    message: (
      <>
        This is an info alert with <b>custom Icon</b> — check it out!
      </>
    ),
  },
  {
    label: 'with FullWidth',
    variant: 'info',
    fullWidth: true,
    icon: <BugReportIcon />,
    message: (
      <>
        This is an info alert with <b>custom Icon</b> and <b>full width</b> enabled — check it out!
      </>
    ),
  },
  {
    label: 'with Close button',
    variant: 'info',
    fullWidth: true,
    onClose() {
      console.log('onDelete')
    },
    message: (
      <>
        This is an info alert with <b>close button</b> — check it out!
      </>
    ),
  },
]

export const examples = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div>
      {variants.map(({ variant, message, label, ...rest }, index) => {
        return (
          <Box display="flex" alignItems="center" key={`StatusBox-${index}`} mb={2}>
            <div className={classes.label}>{label}</div>
            <div className={classes.statusBox}>
              <StatusBox variant={variant as StatusBoxVariant} {...rest}>
                {message}
              </StatusBox>
            </div>
          </Box>
        )
      })}
    </div>
  )
}
