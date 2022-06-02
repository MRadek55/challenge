import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'ProximaNovaA-Semibold',
    color: palette.WHITE,
    fontSize: xScale(14),
  },
});

export default styles;
