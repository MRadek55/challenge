import React from 'react';
import { Pressable } from 'react-native';
import StyledText from '../StyledText/StyledText';
import styles from './FlatButton.styles';
import { FlatButtonProps } from './FlatButton.types';

const FlatButton: React.FC<FlatButtonProps> = ({
  children,
  onPress,
  style,
  labelStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <StyledText style={[styles.label, labelStyle]}>{children}</StyledText>
    </Pressable>
  );
};

export default FlatButton;
