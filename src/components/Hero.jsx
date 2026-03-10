import { ArrowDown, Sparkles, Leaf, Award, Truck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, value: '50+', label: t('hero.stat1Label') },
    { icon: Sparkles, value: '2000+', label: t('hero.stat2Label') },
    { icon: Leaf, value: '100%', label: t('hero.stat3Label') },
    { icon: Truck, value: '✓', label: t('hero.stat4Label') },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-spice-50 via-spice-100/50 to-cinnamon-50 dark:from-pepper-950 dark:via-pepper-900 dark:to-pepper-950" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-spice-400/10 dark:bg-spice-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cinnamon-400/10 dark:bg-cinnamon-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spice-300/5 dark:bg-spice-600/5 rounded-full blur-3xl" />

        {/* Floating spice decorations */}
        <div className="hidden lg:block absolute top-32 right-[15%] text-6xl animate-float opacity-20 dark:opacity-10" style={{ animationDelay: '1s' }}>🌿</div>
        <div className="hidden lg:block absolute bottom-40 right-[25%] text-5xl animate-float opacity-20 dark:opacity-10" style={{ animationDelay: '2s' }}>✨</div>
        <div className="hidden lg:block absolute top-[40%] left-[8%] text-4xl animate-float opacity-20 dark:opacity-10" style={{ animationDelay: '4s' }}>🍂</div>
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-on-scroll">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-spice-100 dark:bg-spice-900/30 text-spice-700 dark:text-spice-400 text-sm font-medium rounded-full border border-spice-200 dark:border-spice-800 mb-6">
                <Leaf className="w-4 h-4" />
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="animate-on-scroll stagger-1">
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-pepper-900 dark:text-white leading-tight">
                {t('hero.title1')}
              </span>
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text leading-tight mt-1">
                {t('hero.title2')}
              </span>
            </h1>

            <p className="animate-on-scroll stagger-2 mt-6 text-base sm:text-lg text-pepper-600 dark:text-pepper-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="animate-on-scroll stagger-3 mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base"
              >
                <Sparkles className="w-5 h-5" />
                {t('hero.cta')}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base"
              >
                {t('hero.ctaSecondary')}
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-on-scroll stagger-2 relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-spice-400 via-spice-500 to-cinnamon-600 dark:from-spice-600 dark:via-spice-700 dark:to-cinnamon-800 shadow-2xl shadow-spice-500/30 animate-pulse-glow" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-spice-300 via-spice-400 to-cinnamon-500 dark:from-spice-700 dark:via-spice-800 dark:to-cinnamon-900 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-7xl lg:text-8xl mb-2">🫚</div>
                  <div className="text-4xl sm:text-5xl mb-3 flex gap-2 justify-center">
                    <span>🌶️</span>
                    <span>✨</span>
                  </div>
                  <p className="text-white/90 font-display font-bold text-lg sm:text-xl">
                    Pure Ceylon
                  </p>
                  <p className="text-white/70 text-sm font-medium">
                    Since 1975
                  </p>
                </div>
              </div>
              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-white/90 dark:bg-pepper-800/90 backdrop-blur shadow-xl flex items-center justify-center text-3xl animate-float" style={{ animationDelay: '0.5s' }}>
                🍂
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/90 dark:bg-pepper-800/90 backdrop-blur shadow-xl flex items-center justify-center text-2xl animate-float" style={{ animationDelay: '2.5s' }}>
                🌿
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-on-scroll stagger-4 mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-spice-500 group-hover:text-spice-400 transition-colors" />
              <div className="font-display font-bold text-xl sm:text-2xl text-pepper-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-pepper-500 dark:text-pepper-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-pepper-400 dark:text-pepper-500 hover:text-spice-500 transition-colors group"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
