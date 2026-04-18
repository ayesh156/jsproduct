import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, isSinhala } = useLanguage()
  const fontClass = isSinhala ? 'font-sinhala' : ''


  const links = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.products'), to: '/products' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.contact'), to: '/contact' },
  ]

  return (
    <footer className="relative bg-pepper-900 dark:bg-pepper-950 text-pepper-300 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-spice-600 via-spice-400 to-cinnamon-500" />

      <div className="absolute top-0 right-0 w-64 h-64 bg-spice-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cinnamon-500/5 rounded-full blur-3xl" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/logo.jpeg"
                alt="JS Product Ceylon Spices Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-lg group-hover:shadow-spice-500/30 transition-shadow"
              />
              <div>
                <span className="font-display font-bold text-lg text-white">JS Product</span>
                <span className="block text-[10px] text-spice-400 -mt-1 tracking-wider uppercase">Ceylon Spices</span>
              </div>
            </Link>
            <p className={`text-sm text-pepper-400 leading-relaxed max-w-xs ${fontClass}`}>
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/94724696559"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pepper-800 hover:bg-green-600 flex items-center justify-center text-pepper-400 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:jsproduct202@gmail.com" className="w-10 h-10 rounded-lg bg-pepper-800 hover:bg-spice-600 flex items-center justify-center text-pepper-400 hover:text-white transition-all duration-300" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+94775553108" className="w-10 h-10 rounded-lg bg-pepper-800 hover:bg-spice-600 flex items-center justify-center text-pepper-400 hover:text-white transition-all duration-300" aria-label="Phone">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-display font-bold text-white mb-4 ${fontClass}`}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={`text-sm text-pepper-400 hover:text-spice-400 transition-colors duration-300 ${fontClass}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-display font-bold text-white mb-4 ${fontClass}`}>{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-spice-500 flex-shrink-0" />
                <span className={`text-pepper-400 whitespace-pre-line ${fontClass}`}>{t('contact.addressValue')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-spice-500 flex-shrink-0" />
                <a href="tel:+94775553108" className="text-pepper-400 hover:text-spice-400 transition-colors">0775553108</a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-spice-500 flex-shrink-0" />
                <a href="mailto:jsproduct202@gmail.com" className="text-pepper-400 hover:text-spice-400 transition-colors">jsproduct202@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={`font-display font-bold text-white mb-4 ${fontClass}`}>{t('footer.followUs')}</h3>
            <a
              href="https://wa.me/94724696559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-pepper-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm text-pepper-500 ${fontClass}`}>{t('footer.rights')}</p>
          <p className={`text-sm text-pepper-500 ${fontClass}`}>{t('footer.madeWith')}</p>
        </div>
      </div>

    </footer>
  )
}
