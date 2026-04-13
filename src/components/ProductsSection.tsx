import { motion } from "motion/react";
import { products } from "../data/products";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative  md:py-28 bg-section-purple wave-divider wave-divider-lavender py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 lg:py-0 ">
        <motion.span
          className="absolute opacity-30 lg:opacity-100 -top-20 lg:left-0 lg:-top-20  xl:-left-20  2xl:-left-28 xl:top-0 pointer-events-none"
          animate={{ y: [0, -14, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/productSectionImage2.svg"
            alt="candy"
            className="h-[140px]"
          />
        </motion.span>
        <motion.span
          className="absolute opacity-30 lg:opacity-100 -bottom-12  right-0 lg:-bottom-20  xl:-right-20  2xl:-right-28 xl:-bottom-16 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img src="/productSectionImage1.svg" alt="candy" />
        </motion.span>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-rowdies text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-white mb-4">
            Crafted Chocolate Creations
          </h2>
          <p className="font-rowdies text-white text-base sm:text-lg md:text-xl xl:text-2xl mx-auto leading-relaxed">
            Hunny Chocolate Company brings you a joyful range of chocolates that
            are smooth, flavorful
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 100, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                type: "tween",
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="cursor-pointer group w-fit "
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105  w-[180px] h-[250px] rounded-3xl shadow-md mx-auto"
                style={{ backgroundColor: product.cardBg }}
              >
                <motion.span
                  className="block mt-10"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={product.src} alt={product.name} />
                </motion.span>
              </div>
              <div className="p-4 text-center w-full">
                <h3 className="font-rowdies text-white text-lg md:text-xl">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
