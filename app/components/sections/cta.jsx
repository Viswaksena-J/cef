import Image from "next/image";

export const CTA = () => (
  <section className="flex flex-col md:flex-row items-center bg-gray-50 relative overflow-hidden">
    {/* Left side with green accent and video */}
    <div className="w-full md:w-1/2 relative">
      {/* Green accent on left edge */}
      <div className="absolute left-0 top-0 h-full w-[12%] bg-green-800 z-0"></div>
      
      {/* Video thumbnail with play button */}
      <div className="relative z-10 pl-[12%] pr-4 py-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/592b6649-0972-4b85-8ed9-58fc321b5b3f.jpeg" 
            alt="Children in a doorway" 
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-20 h-20 rounded-full bg-white bg-opacity-75 flex items-center justify-center"
              aria-label="Play video"
            >
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="white"/>
                <path d="M40 32l-12 8V24l12 8z" fill="#4CAF50"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Right side - Content */}
    <div className="w-full md:w-1/2 p-8 md:p-16 bg-gray-50">
      <p className="text-green-500 font-light mb-2">Watch Video</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Reach</h2>
      <p className="text-gray-700">
        We have done 392 projects during pandemic and still counting. Our presence 16 Cities, 13 States In India Actively working In India, Thailand, Singapore, Sri Lanka
      </p>
    </div>
  </section>
);