import React from 'react'

export default function Roadmap() {
    return (
        <div className="flex flex-col md:flex-row mx-6 lg:mx-12 gap-6 mb-12 p-6 rounded-lg" style={{ backgroundColor: '#2c1608' }}>
            {/* Sidebar for nested navigation */}
            <div className="w-full md:w-72 flex-shrink-0 rounded-lg shadow-sm overflow-hidden border flex flex-col h-[500px]" style={{ backgroundColor: '#2c1608', borderColor: '#ffffef' }}>
                <div className="p-6 border-b" style={{ backgroundColor: '#2c1608', borderColor: '#ffffef' }}>
                    <h3 className="font-serif text-xl leading-tight" style={{ color: '#ffffef' }}>Roadtrip<br></br>Experience</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                    <ul className="space-y-1">
                        {['Cross Country 2024', 'Pacific Coast Highway', 'National Parks Tour', 'Desert Loop', 'Mountain Escape'].map((item) => (
                            <li key={item}>
                                <button
                                    className="w-full text-left px-4 py-3 text-sm font-light hover:bg-white/10 rounded-md transition-colors flex justify-between items-center group"
                                    style={{ color: '#ffffef' }}
                                >
                                    <span>{item}</span>
                                    <span className="opacity-50 group-hover:opacity-80">›</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 border-t text-xs text-center font-light" style={{ color: '#ffffef', opacity: 0.6, borderColor: '#ffffef' }}>
                    Select a trip to view route
                </div>
            </div>

            {/* Large Content Box */}
            <div className="flex-grow rounded-lg shadow-sm overflow-hidden border h-[500px] flex items-center justify-center p-8" style={{ backgroundColor: '#2c1608', borderColor: '#ffffef' }}>
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
                    <div className="mt-6">
                        <button
                            className="text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-2 mx-auto"
                            style={{ color: '#ffffef' }}
                        >
                            Get Started
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}