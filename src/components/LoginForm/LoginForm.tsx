import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { LOGIN_API } from '../../api/auth';
import { saveToken } from '../../store/authSlice';
import CommonButton from '../CommonButton/CommonButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FlatButton from '../FlatButton/FlatButton';
import StyledInput from '../StyledInput/StyledInput';
import styles from './LoginForm.styles';
import { LoginResponse } from './LoginForm.types';
import {
  initialLoginValues,
  LoginSchema,
  LOGIN_ERROR_MESSAGE,
} from './LoginForm.validation';

const LoginForm = () => {
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const [login, { loading, error }] = useMutation<LoginResponse>(LOGIN_API, {
    onCompleted: ({ loginWithEmail }) => {
      const token = loginWithEmail?.accessToken;
      if (!token) {
        return;
      }

      dispatch(saveToken(token));
    },
  });

  const {
    errors,
    touched,
    handleChange,
    values,
    handleSubmit,
    dirty,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: initialLoginValues,
    validationSchema: LoginSchema,
    onSubmit: login,
  });

  const isError = errors?.email || errors?.password || error;
  const areFieldsTouched = touched.email && touched.password;

  return (
    <View style={styles.wrapper}>
      <StyledInput
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        label={t('email')}
        value={values.email}
      />
      <StyledInput
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        label={t('password')}
        value={values.password}
        secureTextEntry
      />
      {isError && areFieldsTouched && (
        <ErrorMessage>{LOGIN_ERROR_MESSAGE}</ErrorMessage>
      )}
      <CommonButton
        onPress={handleSubmit}
        style={styles.submitButton}
        isDisabled={!dirty || !isValid || loading}
        isLoading={loading}
        labelStyle={styles.submitButtonLabel}>
        {t('logIn')}
      </CommonButton>
      {isError && areFieldsTouched && (
        <FlatButton labelStyle={styles.flatButton} onPress={() => null}>
          {t('forgotPassword')}
        </FlatButton>
      )}
    </View>
  );
};

export default LoginForm;
