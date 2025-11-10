import { useEffect, useState } from 'react'
import "../index.css"
import "../app.css"

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
  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(e.message))
  }, [])
//adding a comment for the sake of trying my best
  return (
    <section className="flex flex-col">

      {/* ===================== home section ===================== */}
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mx-3 lg:mx-12 my-12"> 
        {/* Text Section */}
        <div className="flex flex-col justify-between">
          {/* Main Title (top-left) */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 text-left">
            Unearthing Futures
          </h1>

          {/* Subtitle (bottom-right within left column) */}
          <p className="self-end text-xl md:text-2xl lg:text-3xl text-gray-800 mt-8 text-right">
            Desenterrando futuros
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-3 gap-5">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
            />
          ))}
       </div>
    </div> 

    </section>
  )
}

