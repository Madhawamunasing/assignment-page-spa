import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-void/80 backdrop-blur-lg border-b border-cyber/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber to-neon">
            Finastra
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="overview"
              smooth={true}
              className="cursor-pointer text-gray-300 hover:text-cyber transition-colors relative group"
            >
              Event Overview
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber group-hover:w-full transition-all duration-300" />
            </Link>
            
            <Link
              to="agenda"
              smooth={true}
              className="cursor-pointer text-gray-300 hover:text-cyber transition-colors relative group"
            >
              Agenda
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Right Register Button */}
          <Link
            to="registration"
            smooth={true}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyber to-neon text-galaxy px-6 py-3 rounded-full font-bold hover:shadow-glow transition-all"
            >
              Register Now
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar