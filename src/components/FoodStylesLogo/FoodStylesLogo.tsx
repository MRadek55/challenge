import React from 'react';
import { Image, View } from 'react-native';
import { i18n } from '../../locales';
import StyledText from '../StyledText/StyledText';
import styles from './FoodStylesLogo.styles';

const FoodStylesLogo = () => (
  <View style={styles.wrapper}>
    <Image
      resizeMode="contain"
      source={require('../../assets/logo/logo.png')}
      style={styles.image}
    />
    <StyledText style={styles.text}>{i18n.t('appName')}</StyledText>
  </View>
);

export default FoodStylesLogo;
