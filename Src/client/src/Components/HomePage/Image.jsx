import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Image(image) {
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
      {/* Image placeholder, alternate text */}
      <motion.div 
        className="bg-[#d4cfc1] rounded-2xl w-full aspect-4/3 mb-4 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      
      {/* Caption */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6 grow">
        {image.Caption}
      </p>
    </motion.div>
  )
}

export default Image
