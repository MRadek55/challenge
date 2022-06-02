import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import BackChevron from '../../../assets/svg/BackChevron';
import CircleButton from '../../CircleButton/CircleButton';
import StyledText from '../../StyledText/StyledText';
import styles from './Header.styles';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { goBack, canGoBack } = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      <CircleButton
        style={styles.backButton}
        onPress={canGoBack() ? goBack : undefined}>
        <BackChevron />
      </CircleButton>
      <StyledText style={styles.title}>{title}</StyledText>
    </View>
  );
};

export default Header;
