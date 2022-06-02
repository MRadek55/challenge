import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    width: xScale(230),
    backgroundColor: palette.WHITE,
    height: xScale(43),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: xScale(100),
    marginTop: xScale(15),

    shadowColor: palette.GREYISH_BROWN_30_20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  disabled: {
    backgroundColor: palette.GREYISH,
  },
  label: {
    fontFamily: 'ProximaNovaA-Semibold',
    fontSize: xScale(14),
  },
});

export default styles;
