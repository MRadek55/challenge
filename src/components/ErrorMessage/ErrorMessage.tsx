import React from 'react';
import { View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import styles from './ErrorMessage.styles';

const ErrorMessage: React.FC = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      <StyledText style={styles.text}>{children}</StyledText>
    </View>
  );
};

export default ErrorMessage;
