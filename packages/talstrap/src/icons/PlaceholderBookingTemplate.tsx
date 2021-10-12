import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const PlaceholderBookingTemplate: FC<SvgIconProps> = (props) => (
  <SvgIcon width="89px" height="89px" viewBox="0 0 89 89" {...props}>
    <defs>
      <circle id="empty-icon-path-1" cx="44.5" cy="44.5" r="44.5" />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-67">
        <g id="Group-39-Copy-4">
          <circle id="Mask-Copy" fill="#CCCCCC" cx="44.5" cy="44.5" r="44.5" />
          <g id="Path-2">
            <mask id="empty-icon-mask-2" fill="white">
              <use xlinkHref="#empty-icon-path-1" />
            </mask>
            <use id="Mask" fill="#CCCCCC" xlinkHref="#empty-icon-path-1" />
            <path
              d="M25,54.5153103 L66.9335319,103.965678 L94.0858233,115.042042 L113.660553,85.8864842 L102.874406,81.5536952 L53.6913639,22 C47.9745466,22.9935234 43.7513473,23.9870467 41.021766,24.9805701 C38.2921846,25.9740935 34.0285123,25.9740935 28.230749,24.9805701 C26.2683734,30.4022797 25.4986624,34.6651419 25.9216161,37.769157 C26.3445698,40.873172 26.8827186,44.8460592 27.5360624,49.6878185 C28.2159223,50.7474458 28.4474845,51.8169346 28.230749,52.8962849 C28.0140136,53.9756352 26.9370972,54.5153103 25,54.5153103 Z"
              fill="#000000"
              opacity="0.199288504"
              mask="url(#empty-icon-mask-2)"
            />
          </g>
        </g>
        <g id="baseline-file_copy-24px" transform="translate(25.000000, 22.000000)" fill="#FFFFFF" fillRule="nonzero">
          <path
            d="M28.7368421,0 L4.10526316,0 C1.84736842,0 0,1.84090909 0,4.09090909 L0,32.7272727 L4.10526316,32.7272727 L4.10526316,4.09090909 L28.7368421,4.09090909 L28.7368421,0 Z M26.6842105,8.18181818 L39,20.4545455 L39,40.9090909 C39,43.1590909 37.1526316,45 34.8947368,45 L12.2952632,45 C10.0373684,45 8.21052632,43.1590909 8.21052632,40.9090909 L8.23105263,12.2727273 C8.23105263,10.0227273 10.0578947,8.18181818 12.3157895,8.18181818 L26.6842105,8.18181818 Z M24.6315789,22.5 L35.9210526,22.5 L24.6315789,11.25 L24.6315789,22.5 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
)

export default PlaceholderBookingTemplate
