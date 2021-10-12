import { FC } from 'react'

import { SvgIcon, SvgIconProps } from '../components/SvgIcon'

const PlaceholderPurchaseOrders: FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 80 80" {...props}>
    <defs>
      <circle id="empty-po-icon-path-1" cx="40" cy="40" r="40" />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-5-Copy">
        <g id="Group-4">
          <g id="Group-39-Copy-4">
            <circle id="Mask-Copy" fill="#CCCCCC" cx="40" cy="40" r="40" />
            <g id="Path-2">
              <mask id="empty-po-icon-mask-2" fill="white">
                <use xlinkHref="#empty-po-icon-path-1" />
              </mask>
              <use id="Mask" fill="#CCCCCC" xlinkHref="#empty-po-icon-path-1" />
              <path
                d="M31.5263307,61.4396505 L55.3256214,90.5139729 L75.9431431,99.5683772 L90.501002,77.7783814 L82.9599423,74.4398778 L45.8576963,26.6901408 C43.2930073,28.826458 41.7396104,30.6827825 41.1975054,32.2591143 C39.5735862,36.9811438 40.4862362,42.3971187 39.8669466,41.8229473 C36.9695821,39.1366699 33.0977943,35.5805427 28.2515832,31.1545657 L21.3902071,31.9351092 L28.4796049,41.8229473 C29.4454093,50.888851 29.9970935,55.5831445 30.1346573,55.905828 C30.3410031,56.3898531 33.0223866,58.9901868 33.0223866,58.9901868 C33.0223866,58.9901868 32.5237013,59.8066747 31.5263307,61.4396505 Z"
                fill="#000000"
                opacity="0.199288504"
                mask="url(#empty-po-icon-mask-2)"
              />
            </g>
          </g>
          <g id="Group-2" transform="translate(21.000000, 26.000000)" fill="#FFFFFF">
            <g id="Group">
              <path
                d="M24.1224287,10.5242647 L20.8676134,10.5242647 C20.1823891,3.30237983 24.9104366,0.942754073 24.9104366,0.942754073 C16.6877453,1.87230361 16.5507004,10.4885128 16.5507004,10.4885128 L13.3301463,10.4885128 L18.7776793,16.1730658 L24.1224287,10.5242647 Z"
                id="Path"
              />
              <polygon
                id="Path-3"
                fillRule="nonzero"
                points="0.208101266 6.22340669 0.223547442 2.7583149 7.21247827 5.35378342 10.4854203 20.5227873 26.6222659 20.5227873 28.9566426 11.2464764 32.4055911 11.2464764 29.2948953 23.9390805 7.71801882 23.9390805 4.25778493 7.90204082"
              />
              <polygon
                id="Path-4"
                fillRule="nonzero"
                points="28.5681639 26.9303934 27.8010553 30.3466866 9.02509977 30.3466866 6.51417414 18.3738596 9.86775417 17.6745804 11.8088712 26.9303934"
              />
              <ellipse id="Oval" cx="12.3365711" cy="34.227778" rx="2.4325462" ry="2.53838528" />
              <ellipse id="Oval" cx="24.327996" cy="34.227778" rx="2.4325462" ry="2.53838528" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
)

export default PlaceholderPurchaseOrders
