import { Link } from 'react-router-dom'
import logo from '../assets/harwood-logo.png'

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#2c1607] w-full">
      {/* Toggle input for mobile menu (used with Tailwind peer utilities) */}
      <input id="nav-toggle" type="checkbox" className="hidden peer" />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Harwood Museum of Art Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-30">
            <Link to="#artists" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Artists
            </Link>
            <Link to="#roadtrip" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Roadtrip
            </Link>
            <Link to="#visit" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Visit
            </Link>
          </div>

          {/* Hamburger clickable */}
          <div className="md:hidden">
            <label
              htmlFor="nav-toggle"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6 peer-checked:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="w-6 h-6 hidden peer-checked:inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div className="peer-checked:flex hidden md:hidden flex-col px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
        <label htmlFor="nav-toggle" className="block">
          <Link to="#artists" className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50">
            Artists
          </Link>
        </label>
        <label htmlFor="nav-toggle" className="block">
          <Link to="#roadtrip" className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50">
            Roadtrip
          </Link>
        </label>
        <label htmlFor="nav-toggle" className="block">
          <Link to="#visit" className="block text-gray-700 py-2 px-2 rounded hover:bg-gray-50">
            Visit
          </Link>
        </label>
      </div>
    </nav>
  )
}

export default NavBar
