import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <section
      id="about"
      className="relative py-20 lg:h-screen bg-section-pink wave-divider wave-divider-blush"
    >
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full"
      >
        <div className="grid lg:grid-cols-[auto_400px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-28 xl:gap-32 items-center h-full">
          {/* Left - Overlapping product images */}
          <div className="relative flex justify-center lg:justify-start">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 660 600"
              overflow={"visible"}
              className="max-w-[80%] lg:max-w-full"
            >
              <motion.image
                initial={{ opacity: 0, y: -80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                href="/aboutImage1.svg"
                width={423}
                height={277}
              />
              <motion.image
                initial={{ opacity: 0, x: -80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                href="/aboutImage3.svg"
                x={53}
                y={300}
              />
              <motion.image
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                href="/aboutImage2.svg"
                x={172}
                y={175}
              />
            </svg>
          </div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-rowdies text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] text-[#3D2500] mb-[45px]">
              About Us
            </h2>

            <p className="font-rowdies text-[#3D2500] text-base md:text-[20px] lg:text-[18px] xl:text-[24px] leading-8 mb-10">
              Crafted with care and quality ingredients, our treats are
              thoughtfully made to delight, inspire smiles, and bring joy to
              every moment you share.
            </p>

            <p className="font-rowdies text-[#3D2500] text-base md:text-[20px] lg:text-[18px] xl:text-[24px] leading-relaxed mb-9 lg:mb-[60px] xl:mb-[100px]">
              Crafted with care and quality ingredients, our treats are made to
              delight and bring joy to every moment.
            </p>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-[#3D2500] text-[#F5F5F5] font-bold font-rowdies text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] rounded-full hover:bg-[#3D2500]/90 transition-colors shadow-lg"
            >
              Read More
              <ArrowRight size={22} strokeWidth={3} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
