import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Award, Truck, Star, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition, { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../components/PageTransition'
import { images, productImages } from '../constants/images'

export default function HomePage() {
  const { t, isSinhala } = useLanguage()
  const fontClass = isSinhala ? 'font-sinhala' : ''

  const stats = [
    { icon: Award, value: '50+', label: t('hero.stat1Label') },
    { icon: Star, value: '2000+', label: t('hero.stat2Label') },
    { icon: Leaf, value: '100%', label: t('hero.stat3Label') },
    { icon: Truck, value: '✓', label: t('hero.stat4Label') },
  ]

  const featuredProducts = t('products.items')?.slice(0, 3) || []

  return (
    <PageTransition>
      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pepper-950/95 via-pepper-950/80 to-pepper-950/60 dark:from-black/95 dark:via-black/85 dark:to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-pepper-950/50 via-transparent to-pepper-950/30" />
        </div>

        {/* Floating light effects */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[15%] w-64 h-64 bg-spice-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-[10%] w-80 h-80 bg-cinnamon-500/15 rounded-full blur-3xl"
        />

        <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-500/10 border border-spice-500/20 text-spice-400 text-sm font-medium rounded-full mb-6 ${fontClass}`}>
                  <Leaf className="w-4 h-4" />
                  {t('hero.badge')}
                </span>
              </motion.div>

              <motion.h1 {...fadeInUp} transition={{ delay: 0.3 }} className="overflow-visible">
                <span className={`block font-display font-bold text-white leading-[1.15] ${isSinhala ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sinhala' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'}`}>
                  {t('hero.title1')}
                </span>
                <span className={`block font-display font-bold leading-[1.15] mt-2 bg-clip-text text-transparent bg-gradient-to-r from-spice-400 via-spice-300 to-spice-500 ${isSinhala ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sinhala' : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'}`}>
                  {t('hero.title2')}
                </span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className={`mt-6 text-base sm:text-lg text-pepper-300 max-w-xl mx-auto lg:mx-0 leading-relaxed ${fontClass}`}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/products" className="btn-primary text-base group">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10 text-base">
                  {t('hero.ctaSecondary')}
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual — Real Image */}
            <motion.div
              {...fadeInRight}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-spice-500/20"
                />
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl shadow-spice-500/30 ring-4 ring-spice-500/20">
                  <img
                    src={images.hero}
                    alt="Ceylon Cinnamon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pepper-950/60 via-transparent to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card !bg-white/90 dark:!bg-pepper-800/90 p-3 sm:p-4"
                >
                  <div className="text-center">
                    <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">50+</div>
                    <div className={`text-[10px] sm:text-xs text-pepper-600 dark:text-pepper-400 font-medium ${fontClass}`}>
                      {t('hero.stat1Label')}
                    </div>
                  </div>
                </motion.div>
                {/* Another floating badge */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-card !bg-white/90 dark:!bg-pepper-800/90 p-3 sm:p-4"
                >
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    <span className={`text-xs sm:text-sm font-bold text-pepper-800 dark:text-pepper-200 ${fontClass}`}>
                      {t('hero.stat3Label')}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card !bg-white/15 !border-white/15 dark:!bg-white/10 dark:!border-white/10 p-5 sm:p-6 text-center group"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-spice-400 group-hover:text-spice-300 transition-colors" />
                <div className="font-display font-bold text-xl sm:text-2xl text-white">
                  {stat.value}
                </div>
                <div className={`text-xs sm:text-sm text-pepper-400 mt-1 ${fontClass}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS SECTION ============ */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-950 dark:to-pepper-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spice-500/30 to-transparent" />
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-4 ${fontClass}`}>
              <Star className="w-4 h-4" />
              {t('products.badge')}
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pepper-900 dark:text-white ${fontClass}`}>
              {t('products.title')}
            </h2>
            <p className={`mt-4 text-pepper-600 dark:text-pepper-400 max-w-2xl mx-auto text-base sm:text-lg ${fontClass}`}>
              {t('products.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {featuredProducts.map((item, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Link to="/products" className="group block">
                  <div className="glass-card overflow-hidden hover:shadow-2xl hover:shadow-spice-500/10 transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <motion.img
                        src={productImages[i]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 dark:bg-pepper-900/90 backdrop-blur text-xs font-bold rounded-full text-spice-700 dark:text-spice-400 shadow-lg">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className={`font-display font-bold text-lg sm:text-xl text-pepper-900 dark:text-white group-hover:text-spice-600 dark:group-hover:text-spice-400 transition-colors ${fontClass}`}>
                        {item.name}
                      </h3>
                      <p className={`mt-2 text-sm text-pepper-600 dark:text-pepper-400 leading-relaxed line-clamp-2 ${fontClass}`}>
                        {item.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-spice-400 text-spice-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products" className="btn-primary text-base group">
              {t('hero.cta')}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US SECTION ============ */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-900/30 dark:to-pepper-950 relative overflow-hidden">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image Side */}
            <motion.div {...fadeInLeft} className="relative" whileInView={fadeInLeft.animate} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.spiceMarket}
                  alt="Spice Processing"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pepper-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card !bg-white/90 dark:!bg-pepper-800/90 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spice-500 to-cinnamon-600 flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-pepper-900 dark:text-white">Premium Quality</p>
                        <p className="text-xs text-pepper-500 dark:text-pepper-400">Certified & Tested</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-spice-200 dark:bg-spice-800/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cinnamon-100 dark:bg-cinnamon-800/20 rounded-2xl -z-10" />
            </motion.div>

            {/* Text Side */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-4 ${fontClass}`}
              >
                {t('about.badge')}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`font-display text-3xl sm:text-4xl font-bold text-pepper-900 dark:text-white mb-6 ${fontClass}`}
              >
                {t('about.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-pepper-600 dark:text-pepper-400 leading-relaxed mb-8 ${fontClass}`}
              >
                {t('about.p1')}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {(t('about.values') || []).map((val, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card p-4 group"
                  >
                    <h4 className={`font-display font-bold text-pepper-900 dark:text-white mb-1 group-hover:text-spice-600 dark:group-hover:text-spice-400 transition-colors ${fontClass}`}>
                      {val.title}
                    </h4>
                    <p className={`text-xs text-pepper-500 dark:text-pepper-400 leading-relaxed ${fontClass}`}>
                      {val.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link to="/about" className="btn-secondary text-base group">
                  {t('hero.ctaSecondary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.spiceMarket} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-pepper-950/85 dark:bg-black/90" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${fontClass}`}>
              {t('contact.title')}
            </h2>
            <p className={`text-pepper-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 ${fontClass}`}>
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base group">
                {t('contact.sendMessage')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/94724696559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-lg shadow-green-600/25 hover:shadow-green-500/40 transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('contact.chatWhatsApp')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
