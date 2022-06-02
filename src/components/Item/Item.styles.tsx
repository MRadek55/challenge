import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const OPTIONS_BUTTON_SIZE = xScale(20);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: xScale(6),
    width: '100%',
    shadowColor: palette.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    alignItems: 'center',
    height: xScale(52),
    paddingHorizontal: xScale(20),
    backgroundColor: palette.WHITE,
  },
  label: {
    ...fonts.bolded,
    textAlign: 'left',
    fontSize: xScale(16),
    color: palette.GREYISH_BROWN,
    paddingRight: xScale(12),
    width: '80%',
    margin: xScale(1),
  },
  image: {
    width: OPTIONS_BUTTON_SIZE,
    height: OPTIONS_BUTTON_SIZE,
  },
});

export default styles;
