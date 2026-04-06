import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FFF5F8] wave-divider wave-divider-blush">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Overlapping product images */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              <motion.div
                initial={{ opacity: 0, x: -80, rotate: -6 }}
                animate={inView ? { opacity: 1, x: 0, rotate: -6 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                className="absolute top-0 left-0 w-56 h-64 sm:w-64 sm:h-72 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-800/90 to-yellow-900/90">
                  <div className="text-center">
                    <span className="text-7xl block mb-3">🍫</span>
                    <p className="text-amber-200 font-body font-bold text-sm">Premium Dark</p>
                    <p className="text-amber-300 font-body text-xs">Chocolate Bar</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60, rotate: 4 }}
                animate={inView ? { opacity: 1, x: 0, rotate: 4 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                className="absolute bottom-0 right-0 w-56 h-64 sm:w-64 sm:h-72 bg-gradient-to-br from-rose-300 via-pink-200 to-rose-100 rounded-3xl shadow-xl overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl block mb-3">🧇</span>
                    <p className="text-brand-brown font-body font-bold text-sm">Crispy Wafer</p>
                    <p className="text-brand-brown/70 font-body text-xs">Cream Filled</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-brand-pink/30 text-brand-red font-bold font-body text-sm rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Our Story
            </motion.span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-brown mb-6">
              About Us
            </h2>

            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Born in the heart of India, Hunny is a celebration of sweetness that has been
              bringing smiles to families for years. Our journey started with a simple dream — to
              create confections that spark joy in every bite.
            </p>

            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              From our state-of-the-art facility in Ahmedabad, we craft each wafer roll, chocolate,
              candy, and jelly with meticulous attention to quality and taste. Every Hunny product
              is a promise of happiness, wrapped in vibrant colors and bursting with flavor.
            </p>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-brand-brown text-white font-bold font-body rounded-full text-sm hover:bg-brand-brown/90 transition-colors shadow-lg"
            >
              Read More
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
