import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...fonts.bolded,
    color: palette.WHITE,
    fontSize: xScale(32),
    marginTop: xScale(8),
  },
  image: {
    width: xScale(100),
    height: xScale(100),
  },
});

export default styles;
