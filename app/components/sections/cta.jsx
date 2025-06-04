export const CTA = () => (
  <section className="py-20 px-4 md:px-8 bg-white">
    <div className="container mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Reach
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We are now launching our mission with a strong commitment to uplift lives across India.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Statistics and Info */}
        <div className="space-y-8">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center border border-blue-200">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-gray-700 font-medium">Cities</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center border border-green-200">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">13</div>
              <div className="text-gray-700 font-medium">States</div>
            </div>
          </div>

          {/* Presence Information */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Presence
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>16 cities across 13 states</strong>, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Bangalore', 'Tamil Nadu', 'Mumbai', 'Delhi'].map((city) => (
                <span key={city} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-blue-50 leading-relaxed">
              We are actively beginning operations to create meaningful change and impact across the nation.
            </p>
          </div>
        </div>

        {/* Right Side - Video Section */}
        <div className="space-y-6">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Video Container */}
            <div className="aspect-video bg-gray-800 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20"></div>
              
              {/* Play Button Overlay */}
              <button className="relative z-10 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Watch Our Impact Story</p>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="p-6 bg-gray-900">
              <h4 className="text-white font-bold text-lg mb-2">Transforming Lives Across India</h4>
              <p className="text-gray-300 text-sm">See how we're making a difference in communities nationwide</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact-us" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join Our Mission
            </a>
            <a href="/donate" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Support Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);