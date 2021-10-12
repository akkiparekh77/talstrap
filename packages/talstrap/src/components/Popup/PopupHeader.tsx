import { Theme } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/styles'
import { FC } from 'react'

import { Box, BoxProps } from '../Box'

export interface PopupHeaderProps extends BoxProps {}

export const PopupHeader: FC<PopupHeaderProps> = (props) => {
  const theme = useTheme<Theme>()

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flex="none"
      height={theme.spacing(5)}
      color="divider"
      borderBottom={1}
      paddingX={2}
      {...props}
    />
  )
}
