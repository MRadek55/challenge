import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 13,
  },
  input: {
    backgroundColor: palette.WHITE,
    width: '100%',
    height: 35,
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingLeft: xScale(8),
  },
  label: {
    textAlign: 'left',
    marginBottom: 7,
    color: palette.WHITE,
  },
});

export default styles;
