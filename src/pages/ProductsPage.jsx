import { motion } from 'framer-motion'
import { Star, Leaf, ShieldCheck, Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition, { staggerContainer, staggerItem } from '../components/PageTransition'
import { productImages } from '../constants/images'

const productGradients = [
  'from-amber-700/80 to-amber-900/80',
  'from-orange-700/80 to-orange-900/80',
  'from-stone-700/80 to-stone-900/80',
  'from-amber-600/80 to-amber-800/80',
  'from-red-800/80 to-red-950/80',
  'from-yellow-700/80 to-yellow-900/80',
]

const features = [
  { icon: Leaf, title: '100% Organic', desc: 'No chemicals or additives' },
  { icon: ShieldCheck, title: 'Quality Tested', desc: 'Strict lab testing standards' },
  { icon: Award, title: 'Premium Grade', desc: 'Highest export quality' },
]

export default function ProductsPage() {
  const { t, isSinhala } = useLanguage()
  const fontClass = isSinhala ? 'font-sinhala' : ''
  const items = t('products.items')

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productImages[0]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pepper-950/90 via-pepper-950/80 to-pepper-950/95" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 bg-spice-500/10 border border-spice-500/20 text-spice-400 text-sm font-medium rounded-full mb-4 ${fontClass}`}
          >
            <Star className="w-4 h-4" />
            {t('products.badge')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white ${fontClass}`}
          >
            {t('products.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 text-pepper-300 max-w-2xl mx-auto text-base sm:text-lg ${fontClass}`}
          >
            {t('products.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gradient-to-b from-spice-50 to-white dark:from-pepper-950 dark:to-pepper-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spice-500/30 to-transparent" />
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {Array.isArray(items) && items.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-spice-500/10 transition-shadow duration-500">
                  {/* Product Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <motion.img
                      src={productImages[i]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${productGradients[i]} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Tag */}
                    <div className="absolute top-4 right-4">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-white/95 dark:bg-pepper-900/95 backdrop-blur text-xs font-bold rounded-full text-spice-700 dark:text-spice-400 shadow-lg"
                      >
                        {item.tag}
                      </motion.span>
                    </div>

                    {/* Quality badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="px-2.5 py-1 bg-green-500/90 backdrop-blur text-[10px] font-bold text-white rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Premium Grade
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className={`font-display font-bold text-lg sm:text-xl text-pepper-900 dark:text-white group-hover:text-spice-600 dark:group-hover:text-spice-400 transition-colors ${fontClass}`}>
                      {item.name}
                    </h3>
                    <p className={`mt-3 text-sm text-pepper-600 dark:text-pepper-400 leading-relaxed flex-1 ${fontClass}`}>
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-spice-400 text-spice-400" />
                        ))}
                        <span className="ml-1.5 text-xs text-pepper-500 dark:text-pepper-400">(5.0)</span>
                      </div>
                      <a
                        href="https://wa.me/94724696559"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-green-600 dark:text-green-400 hover:underline"
                      >
                        Order →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features strip */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spice-100 to-spice-200 dark:from-spice-900/50 dark:to-spice-800/50 flex items-center justify-center flex-shrink-0 group-hover:from-spice-400 group-hover:to-spice-500 transition-all duration-300">
                  <feat.icon className="w-7 h-7 text-spice-600 dark:text-spice-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-pepper-900 dark:text-white">{feat.title}</h4>
                  <p className="text-sm text-pepper-500 dark:text-pepper-400">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
