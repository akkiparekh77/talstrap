import { MouseEvent as ReactMouseEvent, useState } from 'react'

import { Menu } from '../components/Menu'
import { MenuItem } from '../components/MenuItem'
import { MenuList } from '../components/MenuList'
import { Paper } from '../components/Paper'
import { Popup } from '../components/Popup'

const MENU_ITEM_ID = 'example-menu-item'
const MENU_ID = 'example-menu'
const POPUP_ID = 'example-popup'

export default {
  title: 'Demos/MenuItem',
}

export const nestedMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleClick = (event: ReactMouseEvent<HTMLElement, MouseEvent>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Paper style={{ width: 200 }}>
        <MenuList disablePadding>
          <MenuItem
            cascaded
            onClick={handleClick}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            aria-controls={MENU_ID}
          >
            Item
          </MenuItem>
        </MenuList>
      </Paper>
      <Menu
        id={MENU_ID}
        open={isMenuOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
        onClose={handleClose}
        aria-labelledby={MENU_ITEM_ID}
      >
        <MenuItem selected>Nested Item One</MenuItem>
        <MenuItem>Nested Item Two</MenuItem>
        <MenuItem>Nested Item Three</MenuItem>
      </Menu>
    </>
  )
}

export const nestedPopup = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isPopupOpen = Boolean(anchorEl)

  const handleClick = (event: ReactMouseEvent<HTMLElement, MouseEvent>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Paper style={{ width: 200 }}>
        <MenuList disablePadding>
          <MenuItem
            cascaded
            onClick={handleClick}
            aria-haspopup="true"
            aria-expanded={isPopupOpen}
            aria-controls={POPUP_ID}
          >
            Item
          </MenuItem>
        </MenuList>
      </Paper>
      <Popup
        id={POPUP_ID}
        open={isPopupOpen}
        anchorEl={anchorEl}
        offset={{ left: 1 }}
        onClickAway={handleClose}
        placement="right-start"
        showArrow
        aria-labelledby={MENU_ITEM_ID}
      >
        <div />
      </Popup>
    </>
  )
}
