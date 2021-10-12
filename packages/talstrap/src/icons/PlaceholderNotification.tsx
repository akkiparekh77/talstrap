import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const PlaceholderNotification: FC<SvgIconProps> = (props) => (
  <SvgIcon width="89px" height="89px" viewBox="0 0 89 89" className={props.className}>
    <defs>
      <circle id="empty-icon-path-1" cx="44.5" cy="44.5" r="44.5" />
    </defs>
    <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-63">
        <g id="Group-39-Copy-4">
          <circle id="Mask-Copy" fill="#CCCCCC" cx="44.5" cy="44.5" r="44.5" />
          <g id="Path-2">
            <mask id="empty-icon-mask-2" fill="white">
              <use xlinkHref="#empty-icon-path-1" />
            </mask>
            <use id="Mask" fill="#CCCCCC" xlinkHref="#empty-icon-path-1" />
            <path
              d="M28.2934972,60.0002 L51,89 L75.13022,95.4323792 L88.2007249,75.8686337 L83.9985624,69.9612778 L57,35.4427494 C56.0309932,44.1456694 55.47869,49.3314196 55.3430904,51 C55.2074908,52.6685804 55.2074908,54.2790338 55.3430904,55.83136 L44.8109878,58.2189776 L33.9818182,55.83136 C35.7076768,55.5048537 35.7137374,55.2277337 34,55 C32.2862626,54.7722663 30.384095,56.4389996 28.2934972,60.0002 Z"
              fill="#000000"
              opacity="0.199288504"
              mask="url(#empty-icon-mask-2)"
            />
          </g>
        </g>
        <path
          d="M53.7777778,33 L31.2061111,33 C29.4338889,33 28.0161111,34.45 28.0161111,36.2222222 L28,58.7777778 C28,60.55 29.4338889,62 31.2061111,62 L53.7777778,62 C55.55,62 57,60.55 57,58.7777778 L57,36.2222222 C57,34.45 55.55,33 53.7777778,33 L53.7777778,33 Z M54,52.1538462 L47.7187723,52.1538462 C47.7187723,54.8353846 45.614561,57 43.0078515,57 C40.401142,57 38.2969308,54.8353846 38.2969308,52.1538462 L32,52.1538462 L32,36 L54,36 L54,52.1538462 L54,52.1538462 Z"
          id="Shape"
          fill="#F3F7F9"
        />
      </g>
    </g>
  </SvgIcon>
)

export default PlaceholderNotification
