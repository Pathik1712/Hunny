import { motion } from "motion/react";
import { bestSellers } from "../data/products";
import { cn } from "../lib/utils";

export default function BestSellerSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-white overflow-hidden wave-divider wave-divider-testimonial"
      id="dealership"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-rowdies text-3xl md:text-4xl lg:text-5xl text-[#A0C026]">
            Best Seller
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 md:gap-10 lg:gap-6 items-center justify-center">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              className="rounded-4xl  cursor-pointer group h-[660px] w-[323px] flex flex-col items-center pb-28 mx-auto"
              style={{ backgroundColor: item.cardBg }}
            >
              {/* Product Image Area */}
              <div className="relative  flex items-center justify-center flex-1 group-hover:scale-110 transition-transform duration-500">
                <motion.img
                  src={item.imgSrc}
                  alt={item.name}
                  className={item.className}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "p-5 pb-6 text-center relative",
                  index < 2 ? "-top-10" : "top-[72px]",
                )}
              >
                <p
                  className={cn(
                    "font-rowdies text-white text-[20px] leading-relaxed mb-4",
                  )}
                >
                  {item.description}
                </p>
                <h3
                  className={cn(
                    "font-rowdies text-xl mb-2 bg-white w-[205px] h-12 mx-auto flex items-center justify-center rounded-lg",
                  )}
                  style={{
                    color: item.cardBg,
                  }}
                >
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
