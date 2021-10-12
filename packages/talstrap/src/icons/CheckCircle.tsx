import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const CheckCircle: FC<SvgIconProps> = (props) => (
  <SvgIcon width="32px" height="32px" viewBox="0 0 32 32" {...props}>
    <g
      xmlns="http://www.w3.org/2000/svg"
      id="Icon/badge/green"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <circle id="Oval-Copy-2" stroke="#4CAF50" fill="#DFF5E0" cx="16" cy="16" r="15.5" />
      <g id="baseline-check-24px" transform="translate(4.000000, 4.000000)">
        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
        <polygon
          id="Path"
          fill="#4CAF50"
          fillRule="nonzero"
          points="9.40250142 16.256525 5.37237067 12.2140194 4 13.5809098 9.40250142 19 21 7.36689038 19.6372939 6"
        />
      </g>
    </g>
  </SvgIcon>
)
export default CheckCircle
