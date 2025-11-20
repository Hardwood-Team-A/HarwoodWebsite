import { useEffect, useState } from 'react'
import ArtistGrid from '../Components/HomePage/ArtistGrid'
import Roadmap from '../Components/HomePage/Roadmap'

export default function Home() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)
  //placeholder images for the home page until we get the real ones that the sponsors would like us to use
  const images = [
    { id: 1, src: "https://picsum.photos/300/400?random=1", alt: "Placeholder 1" },
    { id: 2, src: "https://picsum.photos/300/400?random=2", alt: "Placeholder 2" },
    { id: 3, src: "https://picsum.photos/300/400?random=3", alt: "Placeholder 3" },
    { id: 4, src: "https://picsum.photos/300/400?random=4", alt: "Placeholder 4" },
    { id: 5, src: "https://picsum.photos/300/400?random=5", alt: "Placeholder 5" },
    { id: 6, src: "https://picsum.photos/300/400?random=6", alt: "Placeholder 6" },
    { id: 7, src: "https://picsum.photos/300/400?random=7", alt: "Placeholder 7" },
    { id: 8, src: "https://picsum.photos/300/400?random=8", alt: "Placeholder 8" },
    { id: 9, src: "https://picsum.photos/300/400?random=9", alt: "Placeholder 9" },
  ];

  const artists = [
    {
      name: "Rafa Esparza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      name: "Santino Gonzales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      name: "Christine Howard Sandoval",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
        {
      name: "Ronald Rael",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      name: "Joanna Keane Lopez",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      name: "Gabriel Chaile",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
    }
  ]

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(e.message))
  }, [])
//adding a comment for the sake of trying my best
  return (
    /*We can change the background later to match the map right here v*/
    <section className="min-h-screen bg-[#f5f1e8] flex flex-col"> 
      {/* Header */}
      <header className="border-b border-gray-300 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-12 lg:px-24 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#5c4033]"></div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#5c4033] font-bold text-lg tracking-tight">HARWOOD</span>
              <span className="text-[#5c4033] text-sm">Museum of Art</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Artists</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Roadtrip</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Visit</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-12 lg:px-24 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Section */}
          <div className="flex flex-col justify-between min-h-[500px] lg:min-h-[600px]">
            {/* Main Title - place for font customization*/}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[0.95]">
                <span className="font-serif">unearthing</span><br />
                <span className="font-sans">futures</span>
              </h1>
            </div>

            {/* Bottom Section with Dates and Spanish Title - place for font customization*/}
            <div className="space-y-3 text-right">
              <p className="text-lg md:text-xl text-gray-700">
                6.27.2026—2.28.2027
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
                <span className="font-serif">desenterrando</span><br />
                <span className="font-sans">futuros</span>
              </h2>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-3 gap-4 lg:gap-5">
            {images.map((img) => (
              <div key={img.id} className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-3/4 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Roadmap />
      <ArtistGrid artists={artists} />
      
      {/* API Health Check (for development) */}
      <div className="rounded border p-4 bg-white mx-6 lg:mx-12 mb-12">
        <h2 className="font-semibold mb-2">API Health</h2>
        {error && <p className="text-red-600">Error: {error}</p>}
        {health ? (
          <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(health, null, 2)}</pre>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
    </section>
  )
}

