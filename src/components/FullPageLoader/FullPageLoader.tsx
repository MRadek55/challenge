import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import palette from '../../styles/palette';
import styles from './FullPageLoader.styles';

const FullPageLoader = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={palette.WHITE} size="large" />
    </View>
  );
};

export default FullPageLoader;
