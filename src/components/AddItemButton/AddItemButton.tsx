import React from 'react';
import { Pressable, Image } from 'react-native';
import { i18n } from '../../locales';
import StyledText from '../StyledText/StyledText';
import styles from './AddItemButton.styles';
import { AddItemButtonProps } from './AddItemButton.types';

const AddItemButton = ({ onPress }: AddItemButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <Image
        source={require('../../assets/png/add/add.png')}
        style={styles.image}
      />
      <StyledText style={styles.label}>
        {i18n.t('cards:newFoodStyle')}
      </StyledText>
    </Pressable>
  );
};

export default AddItemButton;
