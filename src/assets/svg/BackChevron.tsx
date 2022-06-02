import * as React from 'react';
import Svg, { SvgProps, G, Rect } from 'react-native-svg';
import palette from '../../styles/palette';

const BackChevron = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <G
      x={2}
      transform="rotate(45 4.95 11.95)"
      fill={palette.GREYISH_BROWN}
      fillRule="evenodd">
      <Rect y={11.454} width={13} height={2} rx={1} />
      <Rect y={0.454} width={2} height={13} rx={1} />
    </G>
  </Svg>
);

export default BackChevron;
