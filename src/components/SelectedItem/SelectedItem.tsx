import React, { useEffect } from 'react';
import { Image, Pressable, View } from 'react-native';
import { Portal } from 'react-native-portalize';
import FloatingButton from '../ FloatingButton/FloatingButton';
import StyledText from '../StyledText/StyledText';
import styles from './SelectedItem.styles';
import { SelectedItemComponentProps } from './SelectedItem.types';
import Animated, {
  useSharedValue,
  Easing,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const BEZIER = Easing.bezier(0.25, 0.1, 0.25, 1);

const SelectedItem = ({
  onClose,
  onDuplicate,
  onShare,
  onDelete,
  ...item
}: SelectedItemComponentProps) => {
  const opacityValue = useSharedValue(0);

  useEffect(() => {
    opacityValue.value = 1;
  }, [opacityValue]);

  const floatWrapperAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityValue.value, {
        duration: 1000,
        easing: BEZIER,
      }),
    };
  });

  return (
    <Portal>
      <View style={styles.afterPortal}>
        <View style={styles.innerItemWrapper}>
          <StyledText style={styles.label}>{item.name}</StyledText>
          <Pressable onPress={onClose}>
            <Image
              source={require('../../assets/png/close/close.png')}
              style={styles.image}
            />
          </Pressable>
        </View>
        <Animated.View
          style={[styles.floatingButtonsWrapper, floatWrapperAnimatedStyles]}>
          <FloatingButton onPress={() => onShare(item)} type="share" />
          <FloatingButton onPress={() => onDuplicate(item)} type="duplicate" />
          <FloatingButton onPress={() => onDelete(item)} type="delete" />
        </Animated.View>
      </View>
    </Portal>
  );
};

export default SelectedItem;
