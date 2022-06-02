import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import CommonButton from '../../components/CommonButton/CommonButton';
import FlatButton from '../../components/FlatButton/FlatButton';
import FoodStylesLogo from '../../components/FoodStylesLogo/FoodStylesLogo';
import SignOutScreenWrapper from '../../components/SignOutScreenWrapper/SignOutScreenWrapper';
import StyledText from '../../components/StyledText/StyledText';
import { Routes } from '../../navigation/routes';
import StackParamList from '../../navigation/stack';
import styles from './RegisterScreen.styles';

type NavProps = StackNavigationProp<StackParamList, Routes.Login>;

interface Props {
  navigation: NavProps;
}

const RegisterScreen = ({ navigation }: Props) => {
  const { t } = useTranslation('register');

  return (
    <SignOutScreenWrapper withBetaLabel disableScroll>
      <View style={styles.contentWrapper}>
        <FoodStylesLogo />
        <StyledText style={styles.signInInfo}>{t('info')}</StyledText>
        <View style={styles.buttonsSection}>
          <CommonButton onPress={() => null}>{t('withApple')}</CommonButton>
          <CommonButton onPress={() => null}>{t('withFacebook')}</CommonButton>
          <CommonButton onPress={() => null}>{t('withGoogle')}</CommonButton>
          <CommonButton onPress={() => null}>{t('withEmail')}</CommonButton>
          <FlatButton
            style={styles.loginButton}
            onPress={() => navigation.navigate(Routes.Login)}>
            {t('logWithEmail')}
          </FlatButton>
        </View>
        <StyledText style={styles.terms}>{t('terms')}</StyledText>
      </View>
    </SignOutScreenWrapper>
  );
};

export default RegisterScreen;
