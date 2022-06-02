import { StyleSheet } from 'react-native';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';

const styles = StyleSheet.create({
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonsSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: xScale(30),
    marginBottom: xScale(38),
  },
  loginButton: {
    marginTop: xScale(20),
  },
  signInInfo: {
    color: palette.WHITE,
    marginTop: xScale(25),
    fontSize: xScale(16),
  },
  terms: {
    position: 'absolute',
    bottom: xScale(10),
    color: palette.WHITE,
    fontSize: xScale(12),
  },
});

export default styles;
