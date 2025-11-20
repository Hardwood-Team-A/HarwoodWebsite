import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ArtistCard({ name, description, imageUrl }) {
  return (
    <motion.div 
      className="bg-[#f5f3ed] border-2 border-black rounded-3xl p-6 flex flex-col h-full shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 }
      }}
    >
      {/* Image placeholder */}
      <motion.div 
        className="bg-[#d4cfc1] rounded-2xl w-full aspect-4/3 mb-4 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      
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
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </motion.svg>
      </Link>
    </motion.div>
  )
}

export default ArtistCard
