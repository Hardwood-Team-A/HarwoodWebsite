import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/harwood-logo.png'

function NavBar() {
  return (
    <motion.nav 
      className="bg-white border-b border-[#2c1607] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img 
              src={logo} 
              alt="Harwood Museum of Art Logo" 
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="#artists" 
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Artists
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="#roadtrip" 
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Roadtrip
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to="#visit" 
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar
