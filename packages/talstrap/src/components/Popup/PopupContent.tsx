import { FC } from 'react'

import { Box, BoxProps } from '../Box'

export interface PopupContentProps extends BoxProps {}

export const PopupContent: FC<PopupContentProps> = (props) => {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
      {...props}
    />
  )
}
