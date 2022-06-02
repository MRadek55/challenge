import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    width: xScale(260),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: palette.AQUA_GREEN,
    width: xScale(130),
    marginBottom: xScale(21),
  },
  submitButtonLabel: {
    ...fonts.bolded,
    color: palette.WHITE,
    letterSpacing: 1,
  },
  flatButton: {
    fontFamily: 'ProximaNovaA-Semibold',
  },
});

export default styles;
