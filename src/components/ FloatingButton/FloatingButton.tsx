import React from 'react';
import { Image, Pressable } from 'react-native';
import { i18n } from '../../locales';
import StyledText from '../StyledText/StyledText';
import styles from './FloatingButton.styles';
import { FloatingButtonProps } from './FloatingButton.types';
import getImageSource from './getImageSource';

const FloatingButton = ({ onPress, type }: FloatingButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.wrapper]}>
      <StyledText style={styles.label}>{i18n.t(type)}</StyledText>
      <Image source={getImageSource[type]} style={styles.img} />
    </Pressable>
  );
};

export default FloatingButton;
