import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, primaryCta, secondaryCta, variant = 'home' }) {
  const [SplineComp, setSplineComp] = useState(null)

  useEffect(() => {
    let mounted = true
    // Lazy-load Spline only on the client and fail gracefully if it can't load
    import('@splinetool/react-spline')
      .then((m) => { if (mounted) setSplineComp(() => m.default) })
      .catch(() => { if (mounted) setSplineComp(() => null) })
    return () => { mounted = false }
  }, [])

  const isWater = variant === 'water' || variant === 'home'
  const bg = isWater
    ? 'from-blue-950 via-blue-900 to-teal-700'
    : 'from-emerald-900 via-emerald-800 to-lime-700'

  return (
    <section className={`relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28 bg-gradient-to-br ${bg} text-white`}> 
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}} className="text-white/90 text-base sm:text-lg max-w-xl">
                {subtitle}
              </motion.p>
            )}
            <div className="flex flex-wrap gap-3 pt-2">
              {primaryCta}
              {secondaryCta}
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden ring-1 ring-white/10">
            <div className="absolute inset-0 opacity-90">
              {SplineComp ? (
                <SplineComp scene={isWater ? 'https://prod.spline.design/7y4Q0nJd8tOQ3yq9/scene.splinecode' : 'https://prod.spline.design/tY-9X-2Ttob7w0XK/scene.splinecode'} />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
              )}
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}} className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating droplets */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span key={i} className="absolute bg-white/20 rounded-full blur-md" style={{width: 8 + (i%3)*4, height: 8 + (i%3)*4}}
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: [-20, -40, -20], opacity: [0.2, 0.5, 0.2], x: [0, 10, -10] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>
    </section>
  )
}
