import { motion } from 'motion/react'

const productCategories = [
  'Wafer Rolls',
  'Wafer Biscuits',
  'Chocolate Tips',
  'Jellies',
  'Hard Boiled Candies',
]

const usefulLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Product Categories', href: '#products' },
  { label: 'Best Seller', href: '#dealership' },
]

const socialLinks = [
  { icon: '📘', label: 'Facebook', href: '#' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '💬', label: 'WhatsApp', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* Pink strip */}
      <div className="bg-brand-pink py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
          <motion.span
            className="text-xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            🍬
          </motion.span>
          <p className="font-body font-bold text-brand-brown text-sm text-center">
            Spreading sweetness across India — one candy at a time! 🇮🇳
          </p>
          <motion.span
            className="text-xl"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, delay: 1 }}
          >
            🍭
          </motion.span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍬</span>
                <span className="font-display text-2xl text-white">Hunny</span>
              </div>
              <p className="font-body text-white/80 text-sm leading-relaxed mb-5">
                India's beloved confectionery brand bringing joy through premium chocolates,
                wafer rolls, candies, and more since day one.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-lg transition-colors duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Get In Touch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-display text-lg text-white mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">📍</span>
                  <span className="font-body text-white/80 text-sm leading-relaxed">
                    Industrial Area, Phase-II,<br />
                    Ahmedabad, Gujarat — 382445, India
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <a href="tel:+919876543210" className="font-body text-white/80 text-sm hover:text-white transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✉️</span>
                  <a href="mailto:info@hunny.co.in" className="font-body text-white/80 text-sm hover:text-white transition-colors">
                    info@hunny.co.in
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Product Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-display text-lg text-white mb-4">Product Categories</h4>
              <ul className="space-y-2.5">
                {productCategories.map((cat) => (
                  <li key={cat}>
                    <a
                      href="#products"
                      className="font-body text-white/80 text-sm hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-display text-lg text-white mb-4">Useful Links</h4>
              <ul className="space-y-2.5">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-white/80 text-sm hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <p className="font-body text-white/70 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} Hunny Confectionery Pvt. Ltd. All rights reserved. Made with ❤️ in India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
