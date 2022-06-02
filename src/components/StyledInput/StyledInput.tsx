import React from 'react';
import { TextInput, View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import styles from './StyledInput.styles';
import { StyledInputProps } from './StyledInput.types';

const StyledInput: React.FC<StyledInputProps> = ({ label, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      {!!label && <StyledText style={styles.label}>{label}</StyledText>}
      <TextInput {...rest} style={styles.input} numberOfLines={1} />
    </View>
  );
};

export default StyledInput;
