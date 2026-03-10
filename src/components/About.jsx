import { Leaf, Hand, Sprout, ShieldCheck, Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const valueIcons = [Leaf, Hand, Sprout, ShieldCheck]

export default function About() {
  const { t } = useLanguage()
  const values = t('about.values')

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spice-50/50 to-transparent dark:via-pepper-900/30" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-spice-200/20 dark:bg-spice-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-4">
            <Heart className="w-4 h-4" />
            {t('about.badge')}
          </span>
          <h2 className="animate-on-scroll stagger-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pepper-900 dark:text-white">
            {t('about.title')}
          </h2>
          <p className="animate-on-scroll stagger-2 mt-3 text-lg text-spice-600 dark:text-spice-400 font-medium">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Visual Side */}
          <div className="animate-on-scroll relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-spice-500/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-spice-400 via-cinnamon-500 to-spice-700 dark:from-spice-700 dark:via-cinnamon-800 dark:to-spice-900 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="flex justify-center gap-4 text-6xl sm:text-7xl">
                      <span className="animate-float" style={{ animationDelay: '0s' }}>🫚</span>
                      <span className="animate-float" style={{ animationDelay: '1s' }}>🌶️</span>
                      <span className="animate-float" style={{ animationDelay: '2s' }}>🌿</span>
                    </div>
                    <div>
                      <p className="text-white/90 font-display font-bold text-2xl sm:text-3xl">
                        Spice Gardens
                      </p>
                      <p className="text-white/70 text-base sm:text-lg mt-1">
                        Deiyandara, Matara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 glass-card p-4 sm:p-5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">50+</div>
                  <div className="text-xs sm:text-sm text-pepper-600 dark:text-pepper-400 font-medium whitespace-nowrap">
                    Years of Heritage
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="animate-on-scroll text-pepper-700 dark:text-pepper-300 leading-relaxed text-base sm:text-lg">
              {t('about.p1')}
            </p>
            <p className="animate-on-scroll stagger-1 text-pepper-600 dark:text-pepper-400 leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="animate-on-scroll stagger-2 text-pepper-600 dark:text-pepper-400 leading-relaxed">
              {t('about.p3')}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(values) && values.map((val, i) => {
            const Icon = valueIcons[i]
            return (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} glass-card p-6 text-center group hover:scale-105 hover:shadow-xl hover:shadow-spice-500/10 transition-all duration-300`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-spice-100 to-spice-200 dark:from-spice-900/50 dark:to-spice-800/50 flex items-center justify-center group-hover:from-spice-400 group-hover:to-spice-500 transition-all duration-300">
                  <Icon className="w-7 h-7 text-spice-600 dark:text-spice-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-pepper-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-pepper-600 dark:text-pepper-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
