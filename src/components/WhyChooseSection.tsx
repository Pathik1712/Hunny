import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { features } from '../data/products'

export default function WhyChooseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3, 6)

  return (
    <section className="relative py-20 md:py-28 bg-white dot-pattern wave-divider wave-divider-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-brown">
            Why Choose Hunny
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            {leftFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                className="flex items-start gap-4 lg:flex-row-reverse lg:text-right"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md"
                  style={{ backgroundColor: feature.color + '25' }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-body font-bold text-brand-brown text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Illustration */}
          <motion.div
            className="flex justify-center order-first lg:order-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-brand-yellow/30 via-brand-pink/20 to-brand-teal/20 rounded-full flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl mb-2">👧🧒👦</div>
                  <p className="font-display text-brand-brown text-sm mt-2">Happy Kids!</p>
                </div>
              </div>
              {/* Orbiting decorations */}
              <motion.span
                className="absolute -top-2 right-4 text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                🍬
              </motion.span>
              <motion.span
                className="absolute bottom-2 -left-4 text-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🍭
              </motion.span>
              <motion.span
                className="absolute top-1/2 -right-6 text-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-8">
            {rightFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                className="flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md"
                  style={{ backgroundColor: feature.color + '25' }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-body font-bold text-brand-brown text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
