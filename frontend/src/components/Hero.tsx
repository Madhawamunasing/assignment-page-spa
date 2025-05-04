import { motion } from 'framer-motion'
import CountdownTimer from './Timer'
import Navbar from './Navbar'

export default function HeroSection () {
  return (
    <section className='min-h-screen bg-galaxy flex items-center justify-center relative pt-24 pb-20'>
      <Navbar />
      <div className='text-center px-4 z-10'>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyber to-neon bg-clip-text text-transparent'
        >
          Reimagine Banking:
        </motion.h1>
        <motion.h6
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyber to-neon bg-clip-text text-transparent'
        >
          Adapt. Evolve. Thrive.
        </motion.h6>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='space-y-4 text-xl text-gray-300'
        >
          <p>{'🗓️'} June 9, 2025</p>
          <p>
            {'⏰ '}
            9:30 AM - 2:00 PM GMT+2
          </p>
          <p>{'📍'} The Nile Ritz-Carlton, Cairo, Egypt</p>
        </motion.div>
        <div className='mt-8 flex flex-wrap justify-center gap-4 text-gray-400'>
          <span>
            <div className='text-2xl font-bold'>Organized by:</div>
          </span>
          <span>
            <div className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon to-cyber'>
              Finastra
            </div>
          </span>
        </div>
        <CountdownTimer />
      </div>
    </section>
  )
}
