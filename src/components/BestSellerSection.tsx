import { motion } from 'motion/react'
import { bestSellers } from '../data/products'

export default function BestSellerSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden wave-divider wave-divider-testimonial" id="dealership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-brown font-bold font-body text-sm rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ⭐ Top Picks
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-brown">
            Best Seller
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
              className="rounded-4xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: item.cardBg }}
            >
              {/* Product Image Area */}
              <div className="relative h-44 sm:h-48 flex items-center justify-center overflow-hidden">
                <motion.span
                  className="text-7xl sm:text-8xl group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  {item.emoji}
                </motion.span>
                {/* Floating sparkle */}
                <motion.span
                  className="absolute top-4 right-4 text-lg opacity-70"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </div>

              {/* Content */}
              <div className="p-5 pb-6">
                <p
                  className="font-body text-xs font-semibold uppercase tracking-wider mb-1 opacity-80"
                  style={{ color: item.textColor }}
                >
                  {item.subtitle}
                </p>
                <h3
                  className="font-display text-xl mb-2"
                  style={{ color: item.textColor }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-4 opacity-85"
                  style={{ color: item.textColor }}
                >
                  {item.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-white rounded-full font-bold font-body text-sm shadow-md hover:shadow-lg transition-shadow"
                  style={{ color: item.btnTextColor }}
                >
                  View Product
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
