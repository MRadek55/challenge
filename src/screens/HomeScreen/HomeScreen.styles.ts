import { StyleSheet } from 'react-native';
import { FOOTER_HEIGHT } from '../../components/SingInScreenWrapper/SingInScreenWrapper.styles';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: FOOTER_HEIGHT / 2,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
