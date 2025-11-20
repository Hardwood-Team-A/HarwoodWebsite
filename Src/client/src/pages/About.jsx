import { useEffect, useState } from 'react'

export default function About() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(e.message))
  }, [])

  return (
    <section className="min-h-screen bg-[#f5f1e8] flex flex-col">

      {/* Main content container */}
      <div className="flex-1 max-w-7xl mx-auto px-12 lg:px-24 py-12 lg:py-20">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[0.95]">
          <span className="font-sans">about </span><br/>
          <span className="font-serif whitespace-nowrap">unearthing futures</span>
        </h1>

        {/* Divider */}
        <div className="mt-4 mb-8 border-b border-gray-400 w-full"></div>

        {/* Description text */}
        <div className="space-y-6 text-gray-800 leading-relaxed">

          <p>
            <span className="italic">Unearthing Futures</span> /
            <span className="italic"> Desenterrando Futuros</span> explores contemporary earthen 
            artworks, establishing a profound dialogue between regional roots and global 
            perspectives. As visitors engage with the exhibition, they embark on a journey 
            through time, examining the intricate relationship between humanity and the 
            elemental material of unfired earth.
          </p>

          <p>
            At its core, this exhibition highlights the transformative power of mud—a 
            substance that bridges tradition and innovation, ecology and artistry. Through 
            the work of rafa esparza, Christine Howard Sandoval, Ronald Rael, Santino Gonzales, 
            Joanna Keane Lopez, and Gabriel Chaile, <span className="italic">Unearthing Futures</span> navigates the 
            intersections of technological progress, societal change, and environmental 
            stewardship. Each artwork invites reflection on a rapidly evolving world, encouraging 
            viewers to consider the past, engage with the present, and imagine futures shaped 
            by deeper connections to the land.
          </p>

          <p>
            Situated within the striking landscapes of Northern New Mexico and Southern Colorado, 
            <span className="italic"> Unearthing Futures</span> extends beyond the Harwood Museum’s galleries, incorporating historic 
            and contemporary earthen building sites throughout the region. These sites and their 
            histories become integral to the exhibition, emphasizing the enduring interplay between 
            art, architecture, and environment.
          </p>

          <p>
            The legacy of adobe and earthen clay in the Southwest is deeply rooted in Indigenous 
            traditions and enriched by successive cultural influences. From Pueblo communities to 
            Spanish settlers, adobe architecture embodies resilience, adaptation, and collaboration. 
            <span className="italic"> Unearthing Futures</span> reflects on this legacy, challenging audiences to reconsider their 
            relationship to the land and its materials while engaging with contemporary reinterpretations 
            of these practices.
          </p>

          <p>
            As visitors experience <span className="italic">Unearthing Futures</span>, they encounter a central question: How might 
            the transformative power of mud inspire innovative strategies for navigating an uncertain 
            future? By foregrounding the material and metaphorical significance of adobe, this exhibition 
            reimagines our connection to the environment, offering a vision of sustainability and 
            interconnectedness that is both grounded and aspirational.
          </p>

          <p>
            <span className="italic">Unearthing Futures</span> /
            <span className="italic"> Desenterrando Futuros</span> affirms the enduring capacity of art to uncover overlooked 
            narratives, challenge entrenched perspectives, and envision new possibilities. Through the 
            works on display, visitors embark on a journey that transcends boundaries of time and place, 
            discovering in the earth itself a profound site of continuity and transformation.
          </p>

        </div>
      </div>
    </section>
  )
}
