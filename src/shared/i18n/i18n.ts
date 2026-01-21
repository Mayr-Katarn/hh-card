import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { type AppLanguage, resources } from './resources'

const STORAGE_KEY = 'lang'

function detectInitialLanguage(): AppLanguage {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'ru' || saved === 'en') return saved

  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('ru')) return 'ru'
  if (nav.startsWith('en')) return 'en'
  return 'ru'
}

const initialLanguage = detectInitialLanguage()

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'ru',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  if (lng === 'ru' || lng === 'en') {
    localStorage.setItem(STORAGE_KEY, lng)
    document.documentElement.lang = lng
  }
})

document.documentElement.lang = initialLanguage

export { i18n }
