import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en,
  },
  ns: ['common'],
  defaultNS: 'common',
  debug: process.env.NODE_ENV === 'development',
});

export default i18n;
