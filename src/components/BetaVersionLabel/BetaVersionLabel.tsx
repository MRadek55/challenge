import React from 'react';
import { View } from 'react-native';
import { i18n } from '../../locales';
import StyledText from '../StyledText/StyledText';
import styles from './BetaVersionLabel.styles';

const BetaVersionLabel = () => {
  return (
    <View style={styles.wrapper}>
      <StyledText style={styles.label}>{i18n.t('beta')}</StyledText>
    </View>
  );
};

export default BetaVersionLabel;
