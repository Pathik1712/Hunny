import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
  { label: "Dealership", href: "#dealership" },
  { label: "Contact Us", href: "#contact" },
];

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-section-teal/90 backdrop-blur-md shadow-lg border-b border-brand-pink/30"
          : "bg-section-teal shadow-sm"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around ">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="py-1 h-[116px]" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                  "relative px-4 py-2 transition-colors duration-200 rounded-full",
                  "font-rowdies font-normal text-[20px] leading-none tracking-normal text-center",
                  activeSection === link.href
                    ? "text-[#8B6C7A]"
                    : "text-white hover:text-[#8B6C7A]",
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex items-center min-h-[43px] gap-2 px-5 py-2.5 bg-button-pink text-white rounded-full text-[20px] font-bold font-rowdies  transition-colors duration-300"
          >
            Download Catalogue{" "}
            <img src="/download.svg" alt="Download" className="w-8 h-8" />
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-brand-brown rounded-full"
            />
            <motion.span
              animate={
                mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
              }
              className="block w-6 h-0.5 bg-brand-brown rounded-full"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-brand-brown rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-section-teal border-t border-brand-pink/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-full transition-colors duration-200",
                    "font-rowdies font-normal text-[20px] leading-none tracking-normal text-center",
                    activeSection === link.href
                      ? "text-[#8B6C7A]"
                      : "text-white hover:text-[#8B6C7A]",
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center text-center mt-3 h-[43px] gap-4 px-5 py-2.5 bg-button-pink text-white rounded-full text-base font-bold font-rowdies transition-colors duration-300"
              >
                Download Catalogue{" "}
                <img src="/download.svg" alt="Download" className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
