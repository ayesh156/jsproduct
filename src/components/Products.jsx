import { Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const productEmojis = ['🫚', '🟤', '⚫', '⚪', '🌶️', '💧']
const productGradients = [
  'from-amber-600 via-amber-500 to-yellow-400',
  'from-amber-800 via-amber-700 to-amber-500',
  'from-gray-800 via-gray-700 to-gray-500',
  'from-stone-300 via-stone-200 to-stone-100',
  'from-red-800 via-red-600 to-orange-500',
  'from-amber-700 via-amber-600 to-yellow-500',
]

export default function Products() {
  const { t } = useLanguage()
  const items = t('products.items')

  return (
    <section id="products" className="relative section-padding overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-spice-200/30 dark:bg-spice-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cinnamon-200/20 dark:bg-cinnamon-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-max relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-4">
            <Star className="w-4 h-4" />
            {t('products.badge')}
          </span>
          <h2 className="animate-on-scroll stagger-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pepper-900 dark:text-white">
            {t('products.title')}
          </h2>
          <p className="animate-on-scroll stagger-2 mt-4 text-pepper-600 dark:text-pepper-400 text-base sm:text-lg leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.isArray(items) && items.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} group relative`}
            >
              <div className="glass-card overflow-hidden hover:shadow-2xl hover:shadow-spice-500/10 dark:hover:shadow-spice-500/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Product Visual */}
                <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${productGradients[i]} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl sm:text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {productEmojis[i]}
                    </span>
                  </div>
                  {/* Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-pepper-900/90 backdrop-blur text-xs font-bold rounded-full text-spice-700 dark:text-spice-400 shadow-lg">
                      {item.tag}
                    </span>
                  </div>
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/70 dark:from-pepper-900/70 to-transparent" />
                </div>

                {/* Product Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-pepper-900 dark:text-white group-hover:text-spice-600 dark:group-hover:text-spice-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-pepper-600 dark:text-pepper-400 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-spice-400 text-spice-400" />
                    ))}
                    <span className="ml-2 text-xs text-pepper-500 dark:text-pepper-400">(5.0)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
