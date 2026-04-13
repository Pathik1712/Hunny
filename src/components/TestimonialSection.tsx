import { motion } from "motion/react";

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-[#F5E6E8] overflow-hidden flex flex-col items-center">
      {/* Decorative donut image */}
      <motion.div
        className="absolute -top-5 left-0 md:-top-2 md:left-10 w-48 h-48 xl:w-64 xl:h-64 "
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.img
          animate={{
            y: [0, 20, -10, 15, 0],
            rotate: [0, 8, -6, 4, 0],
            scale: [1, 1.02, 0.98, 1.01, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          style={{ willChange: "transform" }}
          src="/decorative-donut.svg"
          alt="Decorative Item"
          className="w-full h-full object-contain opacity-30 lg:opacity-100"
        />
      </motion.div>

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
              src="/testimonial-avatar.png"
              alt="Profile Avatar"
              className="absolute h-[90px] aspect-square object-cover z-50 rounded-full ring-4 ring-[#FE99B3] -translate-x-1/2 -translate-y-5"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Teal Card */}
          <div className="relative bg-[#30B0C7] rounded-tl-[50px] pb-10   text-center ">
            {/* Top Left Quote */}
            <div className="h-[40px] relative max-w-3xl mx-auto mb-8 ">
              <img
                src="/quote-left.svg"
                alt=""
                className="absolute  h-16 top-0 right-4 -translate-y-6 object-contain"
              />

              {/* Bottom Right Quote */}
              <img
                src="/quote-right.svg"
                alt=""
                className="absolute h-7 left-10 top-4 object-contain"
              />
            </div>

            <p className="relative z-10 font-rowdies font-light text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-2 md:px-8 flex-1">
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
  );
}
