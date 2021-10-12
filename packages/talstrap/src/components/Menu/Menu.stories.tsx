import { number, object } from '@storybook/addon-knobs'
import { MouseEvent as ReactMouseEvent, useState } from 'react'

import { Box, Button, MenuItem } from '..'
import { Menu, MenuProps } from './Menu'

const BUTTON_ID = 'example-button'
const MENU_ID = 'example-menu'

export default {
  title: 'Menu',
  component: Menu,
}

export const playground = (): JSX.Element => {
  const defaultAnchorOrigin: MenuProps['anchorOrigin'] = {
    vertical: 'bottom',
    horizontal: 'left',
  }
  const defaultTransformOrigin: MenuProps['transformOrigin'] = {
    vertical: 'top',
    horizontal: 'left',
  }

  const knobs = {
    anchorOrigin: object('anchorOrigin', defaultAnchorOrigin),
    transfomrOrigin: object('transformOrigin', defaultTransformOrigin),
    width: number('width', 200),
  }

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleClickButton = (event: ReactMouseEvent<HTMLButtonElement>) =>
    setAnchorEl(anchorEl ? null : event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh" width="90vw">
      <Button
        id={BUTTON_ID}
        variant="outlined"
        onClick={handleClickButton}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        aria-controls={MENU_ID}
      >
        Toggle Menu
      </Button>
      <Menu
        id={MENU_ID}
        open={isMenuOpen}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={knobs.anchorOrigin}
        transformOrigin={knobs.transfomrOrigin}
        onClose={handleClose}
        width={knobs.width}
        aria-labelledby={BUTTON_ID}
        disablePortal
      >
        <MenuItem>Item One</MenuItem>
        <MenuItem>Item Two</MenuItem>
        <MenuItem>Item Three</MenuItem>
      </Menu>
    </Box>
  )
}
