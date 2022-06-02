import React from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignOutScreenWrapper from '../../components/SignOutScreenWrapper/SignOutScreenWrapper';

const LoginScreen = () => {
  const { t } = useTranslation('login');

  return (
    <SignOutScreenWrapper title={t('title')} disableScroll>
      <LoginForm />
    </SignOutScreenWrapper>
  );
};

export default LoginScreen;
