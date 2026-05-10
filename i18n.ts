import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';

export const SUPPORTED_LANGS = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'fr', label: 'FR', name: 'Français', dir: 'ltr' },
  { code: 'es', label: 'ES', name: 'Español', dir: 'ltr' },
  { code: 'ru', label: 'RU', name: 'Русский', dir: 'ltr' },
  { code: 'ar', label: 'ع', name: 'العربية', dir: 'rtl' },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, fr: { translation: fr }, es: { translation: es }, ru: { translation: ru }, ar: { translation: ar } },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'es', 'ru', 'ar'],
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
    interpolation: { escapeValue: false },
  });

// Apply dir + font to <html> whenever language changes
const applyDir = (lng: string) => {
  const lang = SUPPORTED_LANGS.find(l => l.code === lng);
  const dir = lang?.dir ?? 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lng);
};

i18n.on('languageChanged', applyDir);
applyDir(i18n.language);

export default i18n;
