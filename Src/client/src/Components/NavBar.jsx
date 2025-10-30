import { Link } from 'react-router-dom'
import logo from '../assets/harwood-logo.png'

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#2c1607] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Harwood Museum of Art Logo" className="h-10 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="#artists" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Artists
            </Link>
            <Link 
              to="#roadtrip" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Roadtrip
            </Link>
            <Link 
              to="#visit" 
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
