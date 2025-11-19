import { useEffect, useState } from 'react'
import ArtistGrid from '../Components/HomePage/ArtistGrid'
import Roadmap from '../Components/HomePage/Roadmap'

export default function Home() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  const artists = [
    {
      name: "rafa esparza",
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

  return (
    <section>
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
