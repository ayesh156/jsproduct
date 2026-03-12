import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition, { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../components/PageTransition'
import { images } from '../constants/images'

const WHATSAPP_NUMBER = '94724696559'

export default function ContactPage() {
  const { t, isSinhala } = useLanguage()
  const fontClass = isSinhala ? 'font-sinhala' : ''

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I\'m interested in your Ceylon spices.')}`

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
      multiline: true,
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '0775553108',
      href: 'tel:+94775553108',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '0724696559',
      href: whatsappUrl,
      isExternal: true,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'jsproduct202@gmail.com',
      href: 'mailto:jsproduct202@gmail.com',
      color: 'from-spice-500 to-spice-600',
    },
  ]

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.spiceMarket} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-pepper-950/90 via-pepper-950/80 to-pepper-950/95" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-500/10 border border-spice-500/20 text-spice-400 text-sm font-medium rounded-full mb-4 ${fontClass}`}
          >
            <MessageCircle className="w-4 h-4" />
            {t('contact.badge')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white ${fontClass}`}
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 text-pepper-300 max-w-2xl mx-auto text-base sm:text-lg ${fontClass}`}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-950 dark:to-pepper-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {contactInfo.map((info, i) => {
                  const Icon = info.icon
                  const Wrapper = info.href ? 'a' : 'div'
                  const wrapperProps = info.href
                    ? {
                        href: info.href,
                        ...(info.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                      }
                    : {}

                  return (
                    <motion.div key={i} variants={staggerItem}>
                      <Wrapper
                        {...wrapperProps}
                        className={`glass-card p-5 flex items-start gap-4 group transition-all duration-300 hover:shadow-lg hover:shadow-spice-500/10 hover:-translate-y-1 ${info.href ? 'cursor-pointer' : ''}`}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className={`text-sm font-medium text-pepper-500 dark:text-pepper-400 ${fontClass}`}>
                            {info.label}
                          </p>
                          <p className={`mt-1 text-pepper-800 dark:text-pepper-200 font-medium ${info.multiline ? 'whitespace-pre-line text-sm leading-relaxed' : ''} ${fontClass}`}>
                            {info.value}
                          </p>
                        </div>
                      </Wrapper>
                    </motion.div>
                  )
                })}

                {/* Business Hours */}
                <motion.div variants={staggerItem}>
                  <div className="glass-card p-5 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-pepper-500 dark:text-pepper-400">
                        {isSinhala ? 'වේලාවන්' : 'Business Hours'}
                      </p>
                      <p className={`mt-1 text-pepper-800 dark:text-pepper-200 font-medium text-sm ${fontClass}`}>
                        {isSinhala ? 'සෑම විටම විවෘතයි' : 'Full time open'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Big WhatsApp CTA */}
                <motion.div variants={staggerItem}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card p-6 text-center group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 !border-green-200 dark:!border-green-800/30"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-shadow">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className={`font-bold text-green-700 dark:text-green-400 text-lg ${fontClass}`}>
                          {t('contact.chatWhatsApp')}
                        </p>
                        <p className={`text-xs text-pepper-500 dark:text-pepper-400 ${fontClass}`}>
                          {t('contact.whatsappDesc')}
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-6 sm:p-8 lg:p-10">
                <h3 className={`font-display font-bold text-xl sm:text-2xl text-pepper-900 dark:text-white mb-6 ${fontClass}`}>
                  {t('contact.sendMessage')}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const name = formData.get('name')
                    const email = formData.get('email')
                    const message = formData.get('message')
                    const mailtoLink = `mailto:jsproduct202@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
                    window.location.href = mailtoLink
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2 ${fontClass}`}>
                        {t('contact.yourName')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-pepper-200 dark:border-pepper-700 bg-white/50 dark:bg-pepper-800/50 text-pepper-900 dark:text-white placeholder:text-pepper-400 dark:placeholder:text-pepper-500 focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none transition-all ${fontClass}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2 ${fontClass}`}>
                        {t('contact.yourEmail')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-pepper-200 dark:border-pepper-700 bg-white/50 dark:bg-pepper-800/50 text-pepper-900 dark:text-white placeholder:text-pepper-400 dark:placeholder:text-pepper-500 focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2 ${fontClass}`}>
                      {t('contact.message')}
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      required
                      placeholder={t('contact.messagePlaceholder')}
                      className={`w-full px-4 py-3 rounded-xl border border-pepper-200 dark:border-pepper-700 bg-white/50 dark:bg-pepper-800/50 text-pepper-900 dark:text-white placeholder:text-pepper-400 dark:placeholder:text-pepper-500 focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none transition-all resize-none ${fontClass}`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-base py-4"
                  >
                    <Send className="w-5 h-5" />
                    <span className={fontClass}>{t('contact.sendMessage')}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map / Location visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 sm:mt-20"
          >
            <div className="glass-card overflow-hidden relative">
              <div className="relative w-full h-80 sm:h-96 bg-pepper-100 dark:bg-pepper-900 group">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.891129171074!2d80.59471177498979!3d6.145322593841698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDgnNDMuMiJOIDgwwrAzNSc1MC4yIkU!5e0!3m2!1sen!2slk!4v1773318406676!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JS Products Location"
                  className="absolute inset-0 w-full h-full grayscale-[50%] contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 z-0"
                />
                
                {/* Custom Overlay Card */}
                <div className="absolute top-6 left-6 z-10 pointer-events-none bg-white/80 dark:bg-pepper-950/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-pepper-800/50 transition-opacity duration-500 group-hover:opacity-0 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-spice-500 flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-pepper-900 dark:text-white text-lg">Deiyandara, Matara</p>
                      <p className="text-pepper-600 dark:text-pepper-300 text-sm">Southern Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
