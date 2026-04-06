import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import WhyChooseSection from './components/WhyChooseSection'
import BestSellerSection from './components/BestSellerSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-brand-red flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <motion.span
          className="block text-6xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🍬
        </motion.span>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-wider">
          Hunny
        </h1>
        <motion.p
          className="font-body text-white/80 text-sm mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sweetness in every bite
        </motion.p>
        {/* Loading dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2.5 h-2.5 bg-white rounded-full"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function CandyCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (!visible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[99] text-lg"
      animate={{ x: pos.x + 12, y: pos.y + 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      🍬
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CandyCursor />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <WhyChooseSection />
            <BestSellerSection />
            <TestimonialSection />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
