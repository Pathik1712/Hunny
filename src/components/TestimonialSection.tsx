import { motion } from 'motion/react'

export default function TestimonialSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FFF0F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-brown">
            Pure Bliss, Straight from the Source
          </h2>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <div className="relative bg-[#D4F5EF] rounded-4xl p-8 md:p-10 shadow-lg overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              style={{ width: '50%' }}
            />

            {/* Quote mark */}
            <motion.span
              className="block font-display text-6xl md:text-7xl text-brand-teal/40 leading-none mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              "
            </motion.span>

            {/* Quote text */}
            <p className="font-body text-gray-800 text-base md:text-lg italic leading-relaxed mb-6 relative z-10">
              Hunny wafer rolls are our family's absolute favorite! The kids can't get enough of the
              chocolate cream filling, and I love that the quality is always consistent. Every pack
              brings so much joy — it's like unwrapping happiness! We've tried many brands but
              nothing comes close to the crunch and taste of Hunny.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-pink rounded-full flex items-center justify-center text-white font-bold font-body text-lg shadow-md">
                P
              </div>
              <div>
                <p className="font-body font-bold text-brand-brown text-sm">Priya Sharma</p>
                <p className="font-body text-gray-600 text-xs">Happy Customer, Mumbai</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-brand-yellow text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <motion.span
              className="absolute bottom-4 right-6 text-4xl opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              🍬
            </motion.span>
          </div>
        </motion.div>

        {/* Additional mini testimonials */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          {[
            { name: 'Amit K.', text: 'Best candies in India! 🍬', stars: 5 },
            { name: 'Sneha R.', text: 'My kids love Hunny jellies!', stars: 5 },
            { name: 'Rahul M.', text: 'Amazing quality & taste! 🍫', stars: 4 },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm text-center"
            >
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-brand-yellow text-sm">★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 text-sm italic mb-2">"{t.text}"</p>
              <p className="font-body font-bold text-brand-brown text-xs">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
