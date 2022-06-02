import React from 'react';
import { Image, Pressable, View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import styles from './Item.styles';
import { ItemComponentProps } from './Item.types';

const Item = ({ onPress, ...item }: ItemComponentProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <StyledText style={styles.label}>{item.name}</StyledText>
        <Pressable onPress={() => onPress(item)}>
          <Image
            source={require('../../assets/png/options/options.png')}
            style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Item;
