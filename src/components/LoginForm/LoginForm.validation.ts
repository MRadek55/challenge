import { i18n } from '../../locales';
import * as Yup from 'yup';

export const LOGIN_ERROR_MESSAGE = i18n.t('auth:loginError');

export const initialLoginValues = {
  email: 'rn4Ever@wp.pl',
  password: '',
};

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('auth:invalidEmail'))
    .min(3, i18n.t('auth:tooShort'))
    .required(i18n.t('auth:required')),
  password: Yup.string()
    .min(6, i18n.t('auth:tooShort'))
    .required(i18n.t('auth:required')),
});
