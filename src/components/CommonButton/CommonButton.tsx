import React from 'react';
import { Pressable, ActivityIndicator } from 'react-native';
import palette from '../../styles/palette';
import StyledText from '../StyledText/StyledText';
import styles from './CommonButton.styles';
import { CommonButtonProps } from './CommonButton.types';

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  onPress,
  leftIcon,
  style,
  labelStyle,
  isDisabled,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      style={[styles.wrapper, style, isDisabled && styles.disabled]}>
      {isLoading ? (
        <ActivityIndicator color={palette.WHITE} />
      ) : (
        <>
          {!!leftIcon && leftIcon}
          <StyledText style={[styles.label, labelStyle]}>{children}</StyledText>
        </>
      )}
    </Pressable>
  );
};

export default CommonButton;
