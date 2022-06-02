import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const ADD_BUTTON_SIZE = xScale(36);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: xScale(320),
    height: xScale(52),
    backgroundColor: palette.WHITE,
    borderRadius: xScale(6),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: xScale(12),
    marginTop: xScale(6),

    shadowColor: palette.GREYISH_40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  label: {
    ...fonts.bolded,
    fontSize: xScale(16),
    color: palette.GREYISH_BROWN,
  },
  image: {
    width: ADD_BUTTON_SIZE,
    height: ADD_BUTTON_SIZE,
  },
});

export default styles;
