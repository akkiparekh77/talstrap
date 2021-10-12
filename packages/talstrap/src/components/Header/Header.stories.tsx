import { AccountCircle, Menu } from '@material-ui/icons'
import { select } from '@storybook/addon-knobs'

import { Box, IconButton, Typography } from '..'
import { Header } from './Header'

export default {
  title: 'Header',
  component: Header,
}

export const playground = (): JSX.Element => {
  const knobs = {
    position: select('position', ['absolute', 'fixed', 'relative', 'static', 'sticky'], 'static'),
  }

  return (
    <Header position={knobs.position}>
      <Typography color="inherit">App Name</Typography>
    </Header>
  )
}

export const examples = (): JSX.Element => {
  return (
    <Header>
      <Box display="flex" alignItems="center">
        <IconButton color="inherit" edge="start">
          <Menu />
        </IconButton>
        <Typography variant="body1" color="inherit">
          Forto
        </Typography>
      </Box>
      <IconButton color="inherit" edge="end">
        <AccountCircle />
      </IconButton>
    </Header>
  )
}
