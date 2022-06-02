import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale, yScale } from '../../styles/scale';

const FLOATING_BUTTON_SIZE = xScale(40);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: yScale(10),
  },
  img: {
    width: FLOATING_BUTTON_SIZE,
    height: FLOATING_BUTTON_SIZE,
  },
  label: {
    fontFamily: 'ProximaNovaA-Semibold',
    fontSize: xScale(14),
    color: palette.GREEN_TEAL,
  },
});

export default styles;
