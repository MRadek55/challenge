import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.TOMATO,
    paddingVertical: xScale(4),
    paddingHorizontal: xScale(9),
    borderRadius: 4,
    marginTop: 13,
  },
  text: {
    fontFamily: 'ProximaNovaA-Semibold',
    color: palette.WHITE,
    fontSize: xScale(14),
  },
});

export default styles;
