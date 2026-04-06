import { motion } from 'motion/react'
import { products } from '../data/products'

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-20 md:py-28 bg-brand-lavender wave-divider wave-divider-lavender overflow-hidden">
      {/* Floating candy decorations */}
      <motion.span
        className="absolute top-16 left-8 text-4xl opacity-50 pointer-events-none"
        animate={{ y: [0, -14, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🍭
      </motion.span>
      <motion.span
        className="absolute top-24 right-12 text-3xl opacity-40 pointer-events-none"
        animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        🍬
      </motion.span>
      <motion.span
        className="absolute bottom-32 left-1/4 text-3xl opacity-30 pointer-events-none hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        🍫
      </motion.span>
      <motion.span
        className="absolute top-1/2 right-1/4 text-2xl opacity-30 pointer-events-none hidden lg:block"
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        ⭐
      </motion.span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-brown mb-4">
            Crafted Chocolate Creations
          </h2>
          <p className="font-body text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our delightful range of confections, each crafted with the finest ingredients
            and a whole lot of love. There's something sweet for everyone!
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white rounded-4xl shadow-md overflow-hidden cursor-pointer group"
            >
              <div
                className="h-40 sm:h-44 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: product.cardBg }}
              >
                <motion.span
                  className="text-6xl sm:text-7xl"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {product.emoji}
                </motion.span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-body font-bold text-brand-brown text-sm md:text-base">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
