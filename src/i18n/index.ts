import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales';

const isDev = process.env.NODE_ENV === 'development';

i18next.use(initReactI18next).init({
  lng: 'ko',
  fallbackLng: 'ko',
  defaultNS: 'common',
  debug: isDev,
  resources,
  whitelist: ['ko', 'en'],
  /**
   * @see https://www.i18next.com/translation-function/interpolation
   */
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
