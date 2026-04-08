import { motion } from 'motion/react'

const productCategories = [
  'Waffer Rolls',
  'Waffer Biscuits',
  'Jellies',
  'Lollipop',
  'Chocolate Toys',
  'Hard Boiled Candies',
]

const usefulLinks = [
  'About Us',
  'Product Categories', 
  'Why Choose Hunny',
  'Best Seller',
]

export default function Footer() {
  const shapes = [
    { type: 'circle', color: 'bg-red-400', size: 'w-6 h-6', pos: 'top-12 left-[10%]' },
    { type: 'circle', color: 'bg-gray-400', size: 'w-4 h-4', pos: 'top-24 left-[25%]' },
    { type: 'circle', color: 'bg-blue-300', size: 'w-8 h-8', pos: 'bottom-[20%] left-[30%]' },
    { type: 'circle', color: 'bg-yellow-400', size: 'w-5 h-5', pos: 'top-16 right-[25%]' },
    { type: 'circle', color: 'bg-white', size: 'w-3 h-3', pos: 'bottom-[40%] right-[40%]' },
    { type: 'capsule', color: 'bg-orange-400', size: 'w-12 h-5 rounded-full', pos: 'bottom-[30%] right-[10%]', rotate: 'rotate-45' },
    { type: 'capsule', color: 'bg-gray-300', size: 'w-10 h-4 rounded-full', pos: 'top-1/2 left-[5%]', rotate: '-rotate-12' },
    { type: 'capsule', color: 'bg-[#E08A8F]', size: 'w-16 h-6 rounded-full', pos: 'top-10 right-[10%]', rotate: 'rotate-12' },
  ]

  return (
    <footer id="contact" className="relative bg-[#F2A2A7] overflow-hidden">
      
      {/* Decorative Background Shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} ${shape.size} ${shape.pos} ${shape.type === 'circle' ? 'rounded-full' : ''} ${shape.rotate || ''} opacity-80`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display font-bold text-4xl text-[#8B4513]">Hunny®</h2>
            <p className="font-body text-white text-base leading-relaxed pr-4">
              We craft delicious treats using quality ingredients and thoughtful preparation, creating flavors that are meant to be enjoyed and shared.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#F2A2A7]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#F2A2A7]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#F2A2A7]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.658c-1.56 0-3.085-.411-4.437-1.192L3 21.658l1.247-4.47A9.791 9.791 0 012.22 12c0-5.419 4.417-9.836 9.836-9.836C17.476 2.164 21.892 6.581 21.892 12s-4.416 9.836-9.836 9.836c.008 0 0-.178-.025-.178zm0-17.925C7.545 3.733 3.904 7.374 3.904 11.83c0 1.488.397 2.946 1.152 4.23l.115.195-.733 2.628 2.684-.704.186.11a8.1 8.1 0 004.28 1.205h.001c4.485 0 8.125-3.642 8.125-8.098 0-4.456-3.64-8.098-8.098-8.098h.015zM16.517 14.86c-.227-.114-1.341-.662-1.55-.738-.207-.076-.358-.114-.51.114-.151.228-.585.738-.717.89-.133.151-.265.17-.492.057-.227-.114-.956-.352-1.82-1.127-.672-.603-1.127-1.346-1.258-1.574-.132-.227-.014-.35.1-.464.103-.102.227-.265.34-.397.114-.132.152-.227.227-.38.076-.151.038-.283-.019-.397-.056-.113-.51-1.228-.698-1.68-.184-.442-.372-.382-.51-.389-.131-.007-.282-.007-.433-.007-.151 0-.397.057-.604.284-.208.227-.794.775-.794 1.89s.813 2.193.926 2.345c.114.152 1.597 2.438 3.865 3.418.539.231.961.371 1.291.474.542.174 1.036.149 1.423.09.431-.065 1.341-.548 1.53-1.077.189-.53.189-.983.133-1.078-.057-.095-.208-.152-.435-.265z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-medium text-2xl text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#F2A2A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="font-body text-white text-base mt-1">Ahemdabad, India</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#F2A2A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <a href="tel:+919876543210" className="font-body text-white text-base mt-1 hover:opacity-80 transition-opacity">
                  +91-XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#F2A2A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:xyz@gmail.com" className="font-body text-white text-base mt-1 hover:opacity-80 transition-opacity">
                  xyz@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-medium text-2xl text-white mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="font-body text-white text-base hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-medium text-2xl text-white mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-white text-base hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-4 border-t border-white/20 flex items-center justify-center">
          <p className="font-body text-white text-sm text-center">
            © {new Date().getFullYear()} Hunny Chocolate Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
