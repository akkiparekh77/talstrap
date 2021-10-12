import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const ErrorCircleOutline: FC<SvgIconProps> = (props) => (
  <SvgIcon width="32px" height="32px" viewBox="0 0 32 32" {...props}>
    <g
      xmlns="http://www.w3.org/2000/svg"
      id="Icon/badge/yellow"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <circle id="Oval-Copy-4" stroke="#F9A825" fill="#FFECD7" cx="16" cy="16" r="15.5" />
      <path
        d="M16,20 C17.1045695,20 18,20.8954305 18,22 C18,23.1045695 17.1045695,24 16,24 C14.8954305,24 14,23.1045695 14,22 C14,20.8954305 14.8954305,20 16,20 Z M16,9 C17.1,9 18,9.9 18,11 L18,15 C18,16.1 17.1,17 16,17 C14.9,17 14,16.1 14,15 L14,11 C14,9.9 14.9,9 16,9 Z"
        id="Combined-Shape"
        fill="#F9A825"
      />
    </g>
  </SvgIcon>
)
export default ErrorCircleOutline
