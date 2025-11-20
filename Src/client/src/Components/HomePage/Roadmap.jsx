import React, { useState } from 'react'

export default function Roadmap() {
    const [selectedTrip, setSelectedTrip] = useState(null)
    const [selectedSite, setSelectedSite] = useState(null)

    const handleTripClick = (trip) => {
        if (selectedTrip === trip) {
            setSelectedTrip(null)
        } else {
            setSelectedTrip(trip)
            setSelectedSite(null)
        }
    }

    const handlePinClick = () => {
        setSelectedSite({
            title: "The Lightning Field",
            artist: "Walter De Maria",
            description: "A work of Land Art situated in a high desert in western New Mexico. It consists of 400 stainless steel poles arranged in a rectangular grid measuring 1 mile by 1 kilometer."
        })
    }

    return (
        <div className="w-full mb-12 px-6 lg:px-12 h-[800px]" style={{ backgroundColor: '#2c1608' }}>
            <div className="flex flex-col md:flex-row overflow-hidden h-full" style={{ borderColor: '#ffffef' }}>
                {/* Sidebar for nested navigation */}
                <div className="w-full md:w-72 flex-shrink-0 flex flex-col border-r border-l ml-6" style={{ backgroundColor: '#2c1608', borderColor: '#ffffef' }}>
                    {selectedSite ? (
            <div className="flex flex-col h-full">
              <div className="p-6 border-b" style={{ backgroundColor: '#2c1608', borderColor: '#ffffef' }}>
                <button 
                  onClick={() => setSelectedSite(null)}
                  className="mb-4 text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ color: '#ffffef' }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Trips
                </button>
                <h3 className="font-serif text-2xl leading-tight mb-1" style={{ color: '#ffffef' }}>{selectedSite.title}</h3>
                <p className="text-sm italic" style={{ color: '#ffffef', opacity: 0.9 }}>{selectedSite.artist}</p>
              </div>
              <div className="flex-1 p-6 overflow-y-auto">
                <p className="text-sm font-light leading-relaxed" style={{ color: '#ffffef', opacity: 0.8 }}>
                  {selectedSite.description}
                </p>
              </div>
              {/* Bottom Action Button for Site */}
              <div className="p-4" style={{ borderColor: '#ffffef' }}>
                <button 
                  className="w-full py-4 px-2 border rounded-md text-2sm font-medium transition-colors hover:bg-white/10 flex items-center justify-center gap-2 text-center leading-tight h-full"
                  style={{ borderColor: '#ffffef', color: '#ffffef' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="flex-grow">Navigate to <br/> {selectedSite.title}</span>
                </button>
              </div>
            </div>
          ) : (
            // Default Trip List View
            <>
              <div className="p-6" style={{ backgroundColor: '#2c1608' }}>
                                <h3 className="font-serif text-4xl leading-tight mb-3" style={{ color: '#ffffef' }}>Roadtrip<br></br>Experience</h3>
                                <p className="text-2sm font-thin leading-relaxed" style={{ color: '#ffffef', opacity: 0.6 }}>
                                    Explore our curated journeys through breathtaking landscapes and hidden gems. Select a trip below to see the route.
                                </p>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2">
                                <ul className="space-y-1">
                                    {['Cross Country 2024', 'Pacific Coast Highway', 'National Parks Tour', 'Desert Loop', 'Mountain Escape'].map((item, index) => (
                                        <li key={item}>
                                            <button
                                                onClick={() => handleTripClick(item)}
                                                className={`w-full text-left px-4 py-3 text-lg font-light rounded-md transition-colors flex justify-between items-center group ${selectedTrip === item ? 'bg-white/10' : 'hover:bg-white/10'}`}
                                                style={{ color: '#ffffef' }}
                                            >
                                                <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold" style={{ backgroundColor: '#ffffef', color: '#2c1608' }}>
                            {index + 1}
                          </span>
                                                    <span>{item}</span>
                                                </div>
                                                <span className={`opacity-50 group-hover:opacity-80 ${selectedTrip === item ? 'opacity-100' : ''}`}>›</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom Action Button - Only visible when a trip is selected */}
                            {selectedTrip && (
                                <div className="p-4" style={{ borderColor: '#ffffef' }}>
                                    <button
                                        className="w-full py-4 px-2 border rounded-md text-2sm font-medium transition-colors hover:bg-white/10 flex items-center justify-center gap-2 text-center leading-tight h-full"
                                        style={{ borderColor: '#ffffef', color: '#ffffef' }}
                                    >
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="flex-grow">Open {selectedTrip} <br/> in Google Maps</span>
                                    </button>
                                </div>
                            )}
                            {!selectedTrip && (
                                <div className="p-4 text-sm text-center font-light" style={{ color: '#ffffef', opacity: 0.6, borderColor: '#ffffef' }}>
                                    Select a trip to view route
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Large Content Box */}
                <div className="flex-grow flex items-center justify-center p-8 relative" style={{ backgroundColor: '#2c1608' }}>
                    {/* Temporary Simulation Button */}
                    <button
                        onClick={handlePinClick}
                        className="absolute top-8 right-8 px-3 py-1 border rounded text-xs hover:bg-white/10 transition-colors z-10"
                        style={{ borderColor: '#ffffef', color: '#ffffef' }}
                    >
                        Simulate Pin Click
                    </button>

                    <div className="text-center max-w-md">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10" style={{ color: '#ffffef', opacity: 0.8 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <h2 className="font-serif text-xl leading-tight mb-2" style={{ color: '#ffffef' }}>Interactive Map</h2>
                        <p className="text-sm leading-relaxed font-light" style={{ color: '#ffffef', opacity: 0.8 }}>
                            Select a roadtrip from the sidebar to visualize the route, stops, and highlights on the map.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}