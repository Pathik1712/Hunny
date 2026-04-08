import { motion } from 'motion/react'

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-[#F5E6E8] overflow-hidden flex flex-col items-center">
      {/* Decorative donut image */}
      <motion.img
        src="/image 34.svg"
        alt="Decorative Item"
        className="absolute -top-10 -left-10 md:top-10 md:left-10 w-48 h-48 md:w-64 md:h-64 object-contain opacity-80"
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring' }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pure Bliss, Straight from the Source
        </motion.h2>

        {/* Testimonial Base / Container */}
        <motion.div
          className="relative w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Salmon Pink Accent Block */}
          {/* Overlapping bottom right */}
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-2/3 md:w-1/2 h-40 bg-[#F2A2A7] rounded-3xl" />

          {/* Teal Card */}
          <div className="relative bg-[#4EB5B3] rounded-[30px] p-10 md:p-16 lg:p-20 text-center shadow-xl">
            {/* Top Left Quote */}
            <span className="absolute top-4 left-6 md:top-8 md:left-10 text-[#F2A2A7] text-7xl md:text-9xl font-serif leading-none select-none">
              &ldquo;
            </span>

            {/* Bottom Right Quote */}
            <span className="absolute bottom-16 right-6 md:bottom-20 md:right-10 text-[#F2A2A7] text-7xl md:text-9xl font-serif leading-none select-none">
              &rdquo;
            </span>

            <p className="relative z-10 font-body text-white text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mx-auto mb-10 px-2 md:px-16">
              We were pleasantly surprised by how light and flavorful these treats are. The crunch is just right, and the sweetness is never overwhelming. Everything from taste to quality feels thoughtfully made. It has quickly become a regular snack in our home. Highly recommended.
            </p>

            {/* Profile Avatar Centered on Bottom Edge */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full border-4 md:border-8 border-white overflow-hidden bg-[#F5E6E8] shadow-2xl z-20 flex justify-center items-center">
              <img
                src="/testimonials_img%201.svg"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  /* Fallback to simple placeholder if img missing */
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-display text-gray-500 font-bold text-2xl" style={{ zIndex: -1 }}>A</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
