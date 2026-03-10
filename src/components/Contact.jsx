import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WHATSAPP_NUMBER = '94724696559'

export default function Contact() {
  const { t } = useLanguage()

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I\'m interested in your Ceylon spices.')}`

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
      multiline: true,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '0775553108',
      href: 'tel:+94775553108',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '0724696559',
      href: whatsappUrl,
      isExternal: true,
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'jsproduct202@gmail.com',
      href: 'mailto:jsproduct202@gmail.com',
    },
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spice-50/30 to-spice-100/50 dark:via-pepper-900/20 dark:to-pepper-950/50" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-spice-300/10 dark:bg-spice-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-cinnamon-300/10 dark:bg-cinnamon-800/10 rounded-full blur-3xl" />

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-4">
            <MessageCircle className="w-4 h-4" />
            {t('contact.badge')}
          </span>
          <h2 className="animate-on-scroll stagger-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pepper-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="animate-on-scroll stagger-2 mt-4 text-pepper-600 dark:text-pepper-400 text-base sm:text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const Wrapper = info.href ? 'a' : 'div'
              const wrapperProps = info.href
                ? {
                    href: info.href,
                    ...(info.isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {}),
                  }
                : {}

              return (
                <Wrapper
                  key={i}
                  {...wrapperProps}
                  className={`animate-on-scroll stagger-${i + 1} glass-card p-5 flex items-start gap-4 group transition-all duration-300 hover:shadow-lg hover:shadow-spice-500/10 hover:-translate-y-1 ${info.href ? 'cursor-pointer' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spice-100 to-spice-200 dark:from-spice-900/50 dark:to-spice-800/50 flex items-center justify-center flex-shrink-0 group-hover:from-spice-400 group-hover:to-spice-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-spice-600 dark:text-spice-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-pepper-500 dark:text-pepper-400">
                      {info.label}
                    </p>
                    <p className={`mt-1 text-pepper-800 dark:text-pepper-200 font-medium ${info.multiline ? 'whitespace-pre-line text-sm' : ''}`}>
                      {info.value}
                    </p>
                  </div>
                </Wrapper>
              )
            })}

            {/* WhatsApp CTA */}
            <div className="animate-on-scroll stagger-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full glass-card p-5 text-center group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 border-green-200 dark:border-green-800/30"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-shadow">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-green-700 dark:text-green-400 text-base">
                      {t('contact.chatWhatsApp')}
                    </p>
                    <p className="text-xs text-pepper-500 dark:text-pepper-400">
                      {t('contact.whatsappDesc')}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll stagger-2">
            <div className="glass-card p-6 sm:p-8">
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
                    <label className="block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2">
                      {t('contact.yourName')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-pepper-200 dark:border-pepper-700 bg-white/50 dark:bg-pepper-800/50 text-pepper-900 dark:text-white placeholder:text-pepper-400 dark:placeholder:text-pepper-500 focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2">
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
                  <label className="block text-sm font-medium text-pepper-700 dark:text-pepper-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-pepper-200 dark:border-pepper-700 bg-white/50 dark:bg-pepper-800/50 text-pepper-900 dark:text-white placeholder:text-pepper-400 dark:placeholder:text-pepper-500 focus:ring-2 focus:ring-spice-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                  <Send className="w-5 h-5" />
                  {t('contact.sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
