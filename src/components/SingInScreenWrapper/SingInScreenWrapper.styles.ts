import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale, yScale } from '../../styles/scale';
import { CIRCLE_BUTTON_HEIGHT } from '../CircleButton/CircleButton.styles';

export const FOOTER_HEIGHT = yScale(60);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
  },
  gradientWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: CIRCLE_BUTTON_HEIGHT,
  },
  image: {
    width: xScale(30),
    height: xScale(30),
    alignSelf: 'flex-start',
    marginTop: yScale(10),
    marginLeft: xScale(20),
    marginBottom: yScale(24),
  },
  background: {
    backgroundColor: palette.BACKGROUND_GRAY,
    position: 'absolute',
    top: yScale(180),
    bottom: 0,
    width: '100%',
  },
  footer: {
    backgroundColor: palette.WHITE,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: FOOTER_HEIGHT,
    shadowColor: palette.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
});

export default styles;
