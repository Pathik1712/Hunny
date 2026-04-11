import { motion } from "motion/react"

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-[#F5E6E8] overflow-hidden flex flex-col items-center">
      {/* Decorative donut image */}
      <motion.img
        src="/decorative-donut.svg"
        alt="Decorative Item"
        className="absolute -top-10 -left-10 md:top-10 md:left-10 w-48 h-48 md:w-64 md:h-64 object-contain opacity-80"
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          className="font-rowdies font-light text-4xl md:text-4xl lg:text-4xl text-black text-center mb-20 md:mb-24"
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
          <div className="absolute  right-0 top-full h-14  w-2/3 md:w-1/2  bg-[#FE99B3] rounded-br-[30px]">
            <img
              src="/testimonial-avatar.svg"
              alt="Profile Avatar"
              className="absolute h-[120px] aspect-square object-cover -left-10 -top-10 z-50"
              onError={(e) => {
                /* Fallback to simple placeholder if img missing */
                e.currentTarget.style.display = "none"
              }}
            />
            <span className="inline-block h-[107px] bg-[#FE99B3] z-40  absolute aspect-square rounded-full -left-[41px] -top-8"></span>
          </div>

          {/* Teal Card */}
          <div className="relative bg-[#30B0C7] rounded-tl-[50px] pb-10   text-center ">
            {/* Top Left Quote */}

            <div className="flex h-min *:h-[70px]">
              <span className="text-[#F2A2A7] text-7xl md:text-9xl font-serif leading-none select-none">
                &ldquo;
              </span>

              {/* Bottom Right Quote */}
              <span className="text-[#F2A2A7] text-7xl md:text-9xl font-serif leading-none select-none">
                &rdquo;
              </span>
            </div>

            <p className="relative z-10 font-rowdies font-light text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-2 md:px-16 flex-1">
              We were pleasantly surprised by how light and flavorful these
              treats are. The crunch is just right, and the sweetness is never
              overwhelming. Everything from taste to quality feels thoughtfully
              made. It has quickly become a regular snack in our home. Highly
              recommended.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
