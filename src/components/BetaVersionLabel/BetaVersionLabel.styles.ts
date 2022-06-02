import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.TOMATO,
    transform: [{ rotateZ: '-39deg' }],
    width: xScale(320),
    height: 39,
    position: 'absolute',
    top: xScale(10),
    left: xScale(-50),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    ...fonts.bolded,
    color: palette.WHITE,
    fontSize: xScale(16),
    letterSpacing: 1,
    paddingLeft: xScale(30),
  },
});

export default styles;
