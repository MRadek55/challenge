import React from 'react';
import { Text } from 'react-native';
import palette from '../../styles/palette';
import styles from './StyledText.styles';
import { StyledTextProps } from './StyledText.types';

const StyledText: React.FC<StyledTextProps> = ({
  children,
  style,
  color = 'BLACK',
}) => {
  return (
    <Text style={[styles.text, { color: palette[color] }, style]}>
      {children}
    </Text>
  );
};

export default StyledText;
