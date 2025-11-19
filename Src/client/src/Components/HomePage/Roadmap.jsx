import React from 'react'

export default function Roadmap() {
    return (
        <div className="flex flex-col md:flex-row mx-6 lg:mx-12 gap-6 mb-12">
            {/* Sidebar for nested navigation */}
            <div className="w-full md:w-72 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col h-[500px]">
                <div className="p-6 border-b border-gray-100 bg-white">
                    <h3 className="font-serif text-xl text-gray-900 leading-tight">Explorer</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                    <ul className="space-y-1">
                        {['Project Overview', 'Team Members', 'Deliverables', 'Timeline', 'Settings'].map((item) => (
                            <li key={item}>
                                <button className="w-full text-left px-4 py-3 text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors flex justify-between items-center group">
                                    <span>{item}</span>
                                    <span className="text-gray-300 group-hover:text-gray-500">›</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 border-t border-gray-50 text-xs text-gray-400 text-center font-light">
                    Select an item to expand
                </div>
            </div>

            {/* Large Content Box */}
            <div className="flex-grow bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 h-[500px] flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h2 className="font-serif text-xl text-gray-900 leading-tight mb-2">Content Workspace</h2>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                        This space will display the content associated with the selected sidebar item, including nested sidebars or detailed views.
                    </p>
                    <div className="mt-6">
                        <button className="text-xs font-medium text-gray-900 uppercase tracking-wider hover:text-gray-600 transition-colors flex items-center gap-2 mx-auto">
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