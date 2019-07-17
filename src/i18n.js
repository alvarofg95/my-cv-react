import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import spanish from './translations/spanish';
import english from './translations/english';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'spanish',
    resources: { spanish: { translation: spanish }, english: { translation: english } },
    fallbackLng: 'spanish',
    debug: true,
    interpolation: {
      escapeValue: true
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
