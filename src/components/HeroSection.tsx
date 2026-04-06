import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-section-teal overflow-hidden wave-divider wave-divider-teal pt-20"
    >
      {/* Floating decorative candies */}
      <motion.span
        className="absolute top-28 left-8 text-4xl md:text-5xl opacity-60 pointer-events-none"
        animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🍪
      </motion.span>
      <motion.span
        className="absolute top-40 right-12 text-3xl opacity-50 pointer-events-none"
        animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        🍬
      </motion.span>
      <motion.span
        className="absolute bottom-40 left-16 text-3xl opacity-40 pointer-events-none hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🍫
      </motion.span>
      <motion.span
        className="absolute top-60 left-1/3 text-2xl opacity-30 pointer-events-none hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        ⭐
      </motion.span>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-16 md:py-24">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <motion.p
              className="mt-4 md:mt-6 text-white font-rowdies text-[25px] md:text-[30px] xl:text-[40px] "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Where Crunch Meets Cream
            </motion.p>

            <motion.p
              className="mt-9 text-white font-rowdies text-[15px] md:text-[20px] md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Indulge in the perfect harmony of crispy wafer shells and luscious
              cream fillings. Crafted with love in India, Hunny brings you
              confections that make every moment sweeter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 md:mt-10"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-button-pink text-white font-bold font-rowdies rounded-full text-[20px] hover:shadow-xl hover:shadow-button-pink/40 transition-shadow duration-300"
              >
                Read More
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Hero Product */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.3,
            }}
          >
            <motion.span
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white absolute font-dynapuff font-semibold left-0  -top-[5%] sm:left-[15%] md:top-0 lg:-left-[15%] lg:-top-[15%] xl:top-[0%] "
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Waffer
            </motion.span>
            <motion.span
              className="text-6xl sm:text-7xl md:text-8xl text-white font-dynapuff absolute font-semibold z-10 left-[45%] bottom-0 "
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Rolls
            </motion.span>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <motion.img
                src="/waffer_roll.svg"
                alt="Hunny Product"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 120,
                }}
                className="w-[700px] max-w-[90%] h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
