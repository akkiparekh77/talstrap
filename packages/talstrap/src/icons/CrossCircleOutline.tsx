import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const CrossCircleOutline: FC<SvgIconProps> = (props) => (
  <SvgIcon width="32px" height="32px" viewBox="0 0 32 32" {...props}>
    <g
      xmlns="http://www.w3.org/2000/svg"
      id="Icon/badge/red"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <circle id="Oval-Copy-4" stroke="#D32E2E" fill="#F7E0E0" cx="16" cy="16" r="15.5" />
      <g id="baseline-close-24px" transform="translate(4.000000, 4.000000)">
        <polygon
          id="Path"
          fill="#D32E2E"
          fillRule="nonzero"
          points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
        />
        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
      </g>
    </g>
  </SvgIcon>
)
export default CrossCircleOutline
