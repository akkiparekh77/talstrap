import { Add } from '@material-ui/icons'
import { boolean, select } from '@storybook/addon-knobs'

import { IconButton } from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
}

export const playground = (): JSX.Element => {
  const knobs = {
    disabled: boolean('disabled', false),
    size: select('size', ['medium', 'small'], 'medium'),
  }

  return (
    <IconButton disabled={knobs.disabled} size={knobs.size}>
      <Add />
    </IconButton>
  )
}
