import React from 'react';
import { Pressable } from 'react-native';
import styles from './CircleButton.styles';
import { CircleButtonProps } from './CircleButton.types';

const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  onPress,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.wrapper, style]}>
      {children}
    </Pressable>
  );
};

export default CircleButton;
