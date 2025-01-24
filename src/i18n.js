import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';
import translationES from './locales/es/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en',
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;