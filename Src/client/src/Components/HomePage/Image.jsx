import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Image({url, alt, caption}) {
  return (
    <div >
      {/* Image placeholder, alternate text */}
      <div >
        <img src={url} alt={alt}/>
      </div>
      {/* Caption */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6 grow">
        {caption}
      </p>
    </div>
  )
}

export default Image
