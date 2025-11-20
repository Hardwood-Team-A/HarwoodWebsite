import { motion } from "framer-motion"
import ArtistCard from './ArtistCard'

function ArtistGrid({ artists }) {
  return (
    <section className="artists p-6 lg:p-12">
      {/* Artist Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <ArtistCard name={artist.name} description={artist.description} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ArtistGrid