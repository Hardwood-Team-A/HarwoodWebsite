import { Link } from 'react-router-dom'

function ArtistCard({ name, description, imageUrl }) {
  return (
    <div className="bg-[#f5f3ed] border-2 border-black rounded-3xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      {/* Image placeholder */}
      <div className="bg-[#d4cfc1] rounded-2xl w-full aspect-4/3 mb-4"></div>
      
      {/* Artist name */}
      <h3 className="text-2xl font-serif mb-3 text-gray-900">
        {name}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6 grow">
        {description}
      </p>
      
      {/* Learn More button */}
      <Link 
        to={`/artist/${name.toLowerCase().replace(/\s+/g, '-')}`}
        className="flex items-center justify-between text-base font-medium text-gray-900 hover:text-gray-600 transition-colors group"
      >
        <span>Learn More</span>
        <svg 
          className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </Link>
    </div>
  )
}

export default ArtistCard
