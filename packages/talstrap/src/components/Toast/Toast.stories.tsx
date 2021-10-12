import { radios, text } from '@storybook/addon-knobs'
import { useState } from 'react'

import { Box } from '../Box'
import { Button } from '../Button'
import { Toast, ToastVariant } from './Toast'

export default {
  title: 'Toast',
  component: Toast,
}

export const playground = (): JSX.Element => {
  const knobs = {
    message: text('children', `Hey! This is a  Toast, check it out!`),
    variant: radios('variant', { info: 'info', success: 'success', warning: 'warning', error: 'error' }, 'info'),
    label: text('label', 'Sample Toast'),
    horizontal: radios('horizontal', { left: 'left', center: 'center', right: 'right' }, 'center'),
    vertical: radios('vertical', { top: 'top', bottom: 'bottom' }, 'bottom'),
  }

  return (
    <Toast
      open={true}
      variant={knobs.variant}
      message={knobs.message}
      anchorOrigin={{ horizontal: knobs.horizontal, vertical: knobs.vertical }}
      onClose={() => console.log('Close')}
    />
  )
}

const variants = ['warning', 'info', 'success', 'error']
const messages = {
  success: 'You have successfully added shipment address',
  error: 'Please complete pending actions before moving forward.',
  warning: 'Please contact your Operations Manager',
  info: 'News or Company wide announcements',
}

export const examples = (): JSX.Element => {
  const [variant, setVariant] = useState('info')
  return (
    <div>
      {variants.map((item) => {
        return (
          <Box display="flex" alignItems="center" key={`StatusTag-${item}`} mb={2}>
            <Button variant="contained" onClick={() => setVariant(item)}>
              Show {item} Toast
            </Button>
          </Box>
        )
      })}
      <Toast
        onClose={() => setVariant('')}
        open={!!variant}
        variant={variant as ToastVariant}
        message={messages[variant]}
      />
    </div>
  )
}
