import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor, Globe, ArrowRight, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const themeOptions = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
]

const menuItemVariants = {
  closed: { opacity: 0, x: -40, filter: 'blur(8px)' },
  open: (i) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: (i) => ({
    opacity: 0,
    x: 40,
    filter: 'blur(8px)',
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
}

const menuPanelVariants = {
  closed: { clipPath: 'circle(0% at calc(100% - 40px) 32px)' },
  open: {
    clipPath: 'circle(150% at calc(100% - 40px) 32px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 40px) 32px)',
    transition: { duration: 0.5, ease: [0.55, 0.06, 0.68, 0.19] },
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [themeDropdown, setThemeDropdown] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, toggleLanguage, t, isSinhala } = useLanguage()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const close = () => setThemeDropdown(false)
    if (themeDropdown) {
      setTimeout(() => document.addEventListener('click', close), 0)
      return () => document.removeEventListener('click', close)
    }
  }, [themeDropdown])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 dark:bg-pepper-950/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.img
                src="/logo.jpeg"
                alt="JS Products"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-lg shadow-spice-500/20 group-hover:shadow-spice-500/40 transition-shadow duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
              <div className="hidden sm:block">
                <span className={`font-display font-bold text-lg transition-colors duration-300 ${scrolled ? 'text-pepper-900 dark:text-spice-100' : 'text-white'} ${isSinhala ? 'font-sinhala' : ''}`}>
                  JS Products
                </span>
                <span className={`block text-[10px] font-medium -mt-1 tracking-wider uppercase transition-colors duration-300 ${scrolled ? 'text-spice-600 dark:text-spice-400' : 'text-spice-300'}`}>
                  Ceylon Spices
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isSinhala ? 'font-sinhala' : ''
                  } ${
                    location.pathname === link.to
                      ? scrolled ? 'text-spice-600 dark:text-spice-400' : 'text-spice-300'
                      : scrolled
                        ? 'text-pepper-700 dark:text-pepper-300 hover:text-spice-600 dark:hover:text-spice-400 hover:bg-spice-50 dark:hover:bg-pepper-800/50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-spice-500 to-cinnamon-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${
                  scrolled
                    ? 'border-pepper-200 dark:border-pepper-700 hover:bg-spice-50 dark:hover:bg-pepper-800/50 text-pepper-700 dark:text-pepper-300 hover:border-spice-400'
                    : 'border-white/25 hover:bg-white/10 text-white/80 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline text-xs font-bold">{language === 'en' ? 'සිං' : 'EN'}</span>
              </motion.button>

              {/* Theme Toggle */}
              <div className="relative">
                <motion.button
                  onClick={(e) => { e.stopPropagation(); setThemeDropdown(!themeDropdown) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg border transition-all duration-300 ${
                    scrolled
                      ? 'border-pepper-200 dark:border-pepper-700 hover:bg-spice-50 dark:hover:bg-pepper-800/50 text-pepper-700 dark:text-pepper-300 hover:border-spice-400'
                      : 'border-white/25 hover:bg-white/10 text-white/80 hover:text-white'
                  }`}
                >
                  {theme === 'dark' ? <Moon className="w-4 h-4" /> : theme === 'light' ? <Sun className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                </motion.button>
                <AnimatePresence>
                  {themeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-36 py-1 bg-white dark:bg-pepper-800 rounded-xl shadow-xl border border-pepper-100 dark:border-pepper-700 overflow-hidden"
                    >
                      {themeOptions.map(({ value, icon: Icon, label }) => (
                        <button
                          key={value}
                          onClick={() => { setTheme(value); setThemeDropdown(false) }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                            theme === value
                              ? 'bg-spice-50 dark:bg-spice-900/30 text-spice-600 dark:text-spice-400'
                              : 'text-pepper-700 dark:text-pepper-300 hover:bg-pepper-50 dark:hover:bg-pepper-700/50'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button — Creative Hamburger / Close */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl z-[60] transition-all duration-300 ${
                  isOpen
                    ? 'text-pepper-800 dark:text-white bg-pepper-100 dark:bg-white/10 ring-1 ring-pepper-200 dark:ring-white/10'
                    : scrolled
                      ? 'text-pepper-700 dark:text-pepper-300 hover:bg-spice-50 dark:hover:bg-pepper-800/50'
                      : 'text-white hover:bg-white/10'
                }`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                    className="block h-[2px] w-full bg-current rounded-full origin-center"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                    className="block h-[2px] w-3/4 bg-current rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                    className="block h-[2px] w-full bg-current rounded-full origin-center"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* === FULL-SCREEN MOBILE MENU === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-[55]"
          >
            <motion.div
              variants={menuPanelVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="absolute inset-0 bg-gradient-to-br from-spice-50 via-white to-spice-50 dark:from-pepper-950 dark:via-black dark:to-pepper-950"
            >
              {/* Background decoration */}
              <div className="absolute top-20 left-10 w-40 h-40 bg-spice-400/15 dark:bg-spice-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-60 h-60 bg-cinnamon-400/15 dark:bg-cinnamon-500/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-spice-500/8 dark:bg-spice-600/5 rounded-full blur-3xl" />

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-4 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full border-2 border-pepper-300 dark:border-white/20 text-pepper-700 dark:text-white/80 hover:border-spice-500 dark:hover:border-spice-400 hover:text-spice-600 dark:hover:text-spice-400 hover:bg-spice-50 dark:hover:bg-white/5 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </motion.button>

              <div className="flex flex-col justify-center items-start h-full px-8 sm:px-12 pt-20">
                {/* Nav Links */}
                <nav className="space-y-2 w-full">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="exit"
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between py-4 border-b border-pepper-200 dark:border-white/10 ${
                          isSinhala ? 'font-sinhala' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-spice-500 dark:text-spice-500 font-mono text-sm">0{i + 1}</span>
                          <span className={`text-2xl sm:text-4xl font-display font-bold transition-colors duration-300 ${
                            location.pathname === link.to
                              ? 'text-spice-600 dark:text-spice-400'
                              : 'text-pepper-800 dark:text-white/80 group-hover:text-spice-600 dark:group-hover:text-spice-400'
                          }`}>
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-pepper-300 dark:text-white/30 group-hover:text-spice-500 dark:group-hover:text-spice-400 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom info */}
                <motion.div
                  custom={navLinks.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="mt-12 space-y-3"
                >
                  <p className="text-pepper-400 dark:text-white/40 text-sm">Get in touch</p>
                  <a href="tel:+94775553108" className="block text-pepper-600 dark:text-white/70 hover:text-spice-600 dark:hover:text-spice-400 transition-colors text-sm">
                    +94 77 555 3108
                  </a>
                  <a
                    href="https://wa.me/94724696559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
