import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  })

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'si' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  // Apply language class to html element for Sinhala text fix
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('lang', language === 'si' ? 'si' : 'en')
    if (language === 'si') {
      html.classList.add('lang-si')
    } else {
      html.classList.remove('lang-si')
    }
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const isSinhala = language === 'si'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isSinhala }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
