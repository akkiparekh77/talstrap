import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const PlaceholderDocsIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon width="80px" height="80px" viewBox="0 0 80 80" {...props}>
      <title>icon / placeholder / document</title>
      <defs>
        <circle id="empty-docs-icon-path-1" cx="40" cy="40" r="40" />
      </defs>
      <g id="icon-/-placeholder-/-document" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Path-2">
          <mask id="empty-docs-icon-mask-2" fill="white">
            <use xlinkHref="#empty-docs-icon-path-1" />
          </mask>
          <use id="Oval" fill="#CCCCCC" xlinkHref="#empty-docs-icon-path-1" />
          <polygon
            id="Rectangle"
            fill="#A3A3A3"
            mask="url(#empty-docs-icon-mask-2)"
            transform="translate(61.956625, 69.679793) translate(-61.956625, -69.679793) "
            points="28.52 53.66 47.66 50.6 51.99 33.97 95.39 85.7 71.93 105.39"
          />
        </g>
        <path
          d="M43,25 L31,25 C29.35,25 28.015,26.35 28.015,28 L28,52 C28,53.65 29.335,55 30.985,55 L49,55 C50.65,55 52,53.65 52,52 L52,34 L43,25 L43,25 Z M46,49 L34,49 L34,46 L46,46 L46,49 L46,49 Z M46,43 L34,43 L34,40 L46,40 L46,43 L46,43 Z M41.5,35.5 L41.5,27.25 L49.75,35.5 L41.5,35.5 L41.5,35.5 Z"
          id="Shape"
          fill="#FFFFFF"
        />
      </g>
    </SvgIcon>
  )
}

export default PlaceholderDocsIcon
