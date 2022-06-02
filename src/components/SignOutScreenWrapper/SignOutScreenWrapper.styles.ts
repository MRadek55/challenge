import { StyleSheet } from 'react-native';
import { xScale } from '../../styles/scale';
import { CIRCLE_BUTTON_HEIGHT } from '../CircleButton/CircleButton.styles';

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
  contentWrapper: {
    paddingHorizontal: xScale(36),
  },
  image: {
    width: xScale(30),
    height: xScale(30),
    alignSelf: 'flex-start',
    marginTop: xScale(10),
    marginLeft: xScale(20),
    marginBottom: xScale(24),
  },
});

export default styles;
