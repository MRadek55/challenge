import { StyleSheet } from 'react-native';
import fonts from '../../../styles/fonts';
import palette from '../../../styles/palette';
import { xScale } from '../../../styles/scale';
import { CIRCLE_BUTTON_HEIGHT } from '../../CircleButton/CircleButton.styles';

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: CIRCLE_BUTTON_HEIGHT,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
  title: {
    color: palette.WHITE,
    fontSize: xScale(20),
    ...fonts.bolded,
  },
});

export default styles;
