import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

export const CIRCLE_BUTTON_HEIGHT = xScale(40);

const styles = StyleSheet.create({
  wrapper: {
    width: CIRCLE_BUTTON_HEIGHT,
    height: CIRCLE_BUTTON_HEIGHT,
    backgroundColor: palette.WHITE,
    borderRadius: CIRCLE_BUTTON_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
