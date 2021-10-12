import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const Fcl: FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M21.5,3.5h-19c-1.1,0-2,0.9-2,2v13c0,1.1,0.9,2,2,2h19c1.1,0,2-0.9,2-2v-13C23.5,4.4,22.6,3.5,21.5,3.5z M21.5,18.5h-19v-13h19V18.5zM3.5, 6.5 h17 v11 h-17z" />
  </SvgIcon>
)

export default Fcl
