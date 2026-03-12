import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Leaf, Hand, Sprout, ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition, { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../components/PageTransition'
import { images } from '../constants/images'

const valueIcons = [Leaf, Hand, Sprout, ShieldCheck]

const timeline = [
  { year: '2020', en: 'Humble beginnings — Opened our first local spice shop to share authentic flavors', si: 'ආරම්භය — අපගේ පළමු දේශීය කුළුබඩු අලෙවිසැල විවෘත කිරීම' },
  { year: '2021', en: 'Official incorporation and formal registration of the business', si: 'ව්‍යාපාරය නිල වශයෙන් ලියාපදිංචි කිරීම සහ නීතිගත කිරීම' },
  { year: '2023', en: 'Established a dedicated, modern cinnamon processing center', si: 'නවීන පහසුකම් සහිත කුරුඳු සැකසුම් මධ්‍යස්ථානයක් ස්ථාපිත කිරීම' },
  { year: '2024', en: 'Introduced advanced cinnamon cutting machinery, boosting production efficiency', si: 'නවීන කුරුඳු කැපීමේ යන්ත්‍ර හඳුන්වා දෙමින් නිෂ්පාදන කාර්යක්ෂමතාව ඉහළ නැංවීම' },
]

export default function AboutPage() {
  const { t, isSinhala, language } = useLanguage()
  const fontClass = isSinhala ? 'font-sinhala' : ''
  const values = t('about.values')

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.spiceGarden} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-pepper-950/90 via-pepper-950/80 to-pepper-950/95" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-500/10 border border-spice-500/20 text-spice-400 text-sm font-medium rounded-full mb-4 ${fontClass}`}
          >
            <Heart className="w-4 h-4" />
            {t('about.badge')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white ${fontClass}`}
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 text-lg text-spice-400 font-medium ${fontClass}`}
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-950 dark:to-pepper-950">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={fadeInLeft.initial}
              whileInView={fadeInLeft.animate}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.cinnamonProcess}
                  alt="Cinnamon Processing"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pepper-950/40 via-transparent to-transparent" />
              </div>
              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass-card !bg-white/95 dark:!bg-pepper-800/95 p-5 shadow-xl"
              >
                <div className="text-center">
                  <div className="font-display font-bold text-3xl gradient-text">50+</div>
                  <div className={`text-xs text-pepper-500 dark:text-pepper-400 ${fontClass}`}>
                    {t('hero.stat1Label')}
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-spice-200 dark:bg-spice-900/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={fadeInRight.initial}
              whileInView={fadeInRight.animate}
              viewport={{ once: true }}
            >
              <div className="space-y-5">
                <p className={`text-pepper-700 dark:text-pepper-300 leading-relaxed text-base sm:text-lg ${fontClass}`}>
                  {t('about.p1')}
                </p>
                <p className={`text-pepper-600 dark:text-pepper-400 leading-relaxed ${fontClass}`}>
                  {t('about.p2')}
                </p>
                <p className={`text-pepper-600 dark:text-pepper-400 leading-relaxed ${fontClass}`}>
                  {t('about.p3')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-900/30 dark:to-pepper-950 overflow-hidden">
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-display text-3xl sm:text-4xl font-bold text-pepper-900 dark:text-white text-center mb-14 ${fontClass}`}
          >
            {isSinhala ? 'අපේ ගමන' : 'Our Journey'}
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-spice-400 via-spice-500 to-cinnamon-500 sm:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-center gap-6 mb-10 sm:mb-12 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-spice-500 rounded-full -translate-x-1.5 sm:-translate-x-1.5 ring-4 ring-spice-200 dark:ring-spice-900/50 z-10" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="glass-card p-5 hover:shadow-lg transition-shadow duration-300">
                    <span className="font-display font-bold text-2xl gradient-text">{item.year}</span>
                    <p className={`mt-2 text-sm text-pepper-600 dark:text-pepper-400 ${fontClass}`}>
                      {language === 'si' ? item.si : item.en}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-spice-50 dark:from-pepper-950 dark:to-pepper-950/80">
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-display text-3xl sm:text-4xl font-bold text-pepper-900 dark:text-white text-center mb-14 ${fontClass}`}
          >
            {isSinhala ? 'අපේ වටිනාකම්' : 'Our Values'}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Array.isArray(values) && values.map((val, i) => {
              const Icon = valueIcons[i]
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center group transition-shadow duration-300 hover:shadow-xl hover:shadow-spice-500/10"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-spice-100 to-spice-200 dark:from-spice-900/50 dark:to-spice-800/50 flex items-center justify-center group-hover:from-spice-400 group-hover:to-spice-500 transition-all duration-300">
                    <Icon className="w-8 h-8 text-spice-600 dark:text-spice-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className={`font-display font-bold text-pepper-900 dark:text-white mb-2 ${fontClass}`}>
                    {val.title}
                  </h3>
                  <p className={`text-sm text-pepper-600 dark:text-pepper-400 leading-relaxed ${fontClass}`}>
                    {val.desc}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to="/contact" className="btn-primary text-base group">
              {t('contact.badge')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
