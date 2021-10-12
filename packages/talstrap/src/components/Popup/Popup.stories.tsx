import { boolean, number, object, select } from '@storybook/addon-knobs'
import { MouseEvent as ReactMouseEvent, useState } from 'react'

import { Box, Button, Typography } from '..'
import { Popup, PopupContent, PopupFooter, PopupHeader } from '.'

export default {
  title: 'Popup',
  component: Popup,
}

const BUTTON_ID = 'example-button'
const POPUP_ID = 'example-popup'

export const playground = (): JSX.Element => {
  const knobs = {
    offset: object('offset', {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
    height: number('height', 200),
    placement: select(
      'placement',
      [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ] as const,
      'bottom'
    ),
    showArrow: boolean('showArrow', false),
    width: number('width', 300),
  }

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isPopupOpen = Boolean(anchorEl)

  const handleClickAway = () => setAnchorEl(null)
  const handleClickButton = (event: ReactMouseEvent<HTMLButtonElement>) =>
    setAnchorEl(anchorEl ? null : event.currentTarget)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh" width="90vw">
      <Button
        id={BUTTON_ID}
        variant="outlined"
        onClick={handleClickButton}
        aria-haspopup="true"
        aria-expanded={isPopupOpen}
        aria-controls={POPUP_ID}
      >
        Toggle Popup
      </Button>
      <Popup
        id={POPUP_ID}
        anchorEl={anchorEl}
        height={knobs.height}
        offset={knobs.offset}
        onClickAway={handleClickAway}
        open={isPopupOpen}
        placement={knobs.placement}
        showArrow={knobs.showArrow}
        width={knobs.width}
        aria-labelledby={BUTTON_ID}
      >
        <PopupHeader>
          <Typography>Header</Typography>
        </PopupHeader>
        <PopupContent>
          <Typography>Content</Typography>
        </PopupContent>
        <PopupFooter>
          <Typography>Footer</Typography>
        </PopupFooter>
      </Popup>
    </Box>
  )
}
