export default function SplitLayoutPage() {
  return (
    
     
        <div className="grid grid-cols-2 gap-0">
          {/* Left Section */}
          <div className="bg-white p-8 border-r-2 border-gray-300">
            {/* Top Image Placeholder */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-amber-200 via-amber-100 to-gray-200 h-64 rounded-lg flex items-end justify-center p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-32 bg-amber-600 rounded-t-lg"></div>
                  <div className="w-16 h-32 bg-amber-700 rounded-t-lg"></div>
                  <div className="w-16 h-32 bg-amber-600 rounded-t-lg"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Lorem ipsum dolor sit</p>
            </div>

            {/* Bottom Image Placeholder */}
            <div>
              <div className="bg-gradient-to-b from-gray-400 to-gray-600 h-48 rounded-lg flex items-center justify-center">
                <div className="flex gap-4">
                  <div className="w-16 h-24 bg-gray-300 rounded"></div>
                  <div className="w-16 h-24 bg-gray-300 rounded"></div>
                  <div className="w-16 h-24 bg-gray-700 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">Consectetur adipiscing elit</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8">
            <div className="space-y-6">
              {/* First Text Block */}
              <div>
                <p className="text-sm text-gray-600 mt-2" style={{ textAlign: 'left' }}>Consectetur adipiscing elit</p>
                <p className="text-sm text-gray-600 mt-2">Consectetur adipiscing elit</p>
              </div>

              {/* Second Text Block */}
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>

              {/* Third Text Block */}
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </div>

              {/* Fourth Text Block */}
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5"></div>
              </div>

              {/* Fifth Text Block */}
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>

              {/* Sixth Text Block */}
              <div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      
  );
}