import { Theme } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/styles'
import { FC } from 'react'

import { Box, BoxProps } from '../Box'

export interface PopupFooterProps extends BoxProps {}

export const PopupFooter: FC<PopupFooterProps> = (props) => {
  const theme = useTheme<Theme>()

  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex="none"
      height={theme.spacing(5)}
      {...props}
    />
  )
}
