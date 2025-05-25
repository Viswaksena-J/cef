import Link from 'next/link';
import Image from 'next/image';

export const Articles = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <p className="text-green-500 text-2xl text-center mb-2">Mirror Of Our Progress</p>
      
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-[#333] ml-3">Latest Article</h2>
        <Link href="/articles" className="bg-[#0275d8] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
          ALL ARTICLES
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image 
              src="/mid-day-meal.jpeg" 
              alt="Ration kit" 
              width={500} 
              height={300} 
              className="w-full h-60 object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">9</span>
              <span className="text-xs">Mar</span>
            </div>
          </div>
          <div className="p-6 pt-10">
            <h3 className="text-xl font-semibold mb-4">Ration kit</h3>
            <Link href="/articles/ration-kit" className="text-blue-500 flex items-center">
              READ MORE <span className="ml-1">&#8250;</span>
            </Link>
            <div className="mt-6 flex items-center">
              <span className="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                CEFINTERNATIONAL
              </span>
            </div>
          </div>
        </div>
        
        {/* Article 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image 
              src="/s1.jpeg" 
              alt="Education" 
              width={500} 
              height={300} 
              className="w-full h-60 object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">9</span>
              <span className="text-xs">Mar</span>
            </div>
          </div>
          <div className="p-6 pt-10">
            <h3 className="text-xl font-semibold mb-4">Providing education to underprevillage children</h3>
            <Link href="/articles/education" className="text-blue-500 flex items-center">
              READ MORE <span className="ml-1">&#8250;</span>
            </Link>
            <div className="mt-6 flex items-center">
              <span className="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                CEFINTERNATIONAL
              </span>
            </div>
          </div>
        </div>
        
        {/* Article 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image 
              src="/mid-day-meal.jpeg" 
              alt="Mid Day Meal" 
              width={500} 
              height={300} 
              className="w-full h-60 object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">9</span>
              <span className="text-xs">Mar</span>
            </div>
          </div>
          <div className="p-6 pt-10">
            <h3 className="text-xl font-semibold mb-4">Mid Day Meal</h3>
            <Link href="/articles/mid-day-meal" className="text-blue-500 flex items-center">
              READ MORE <span className="ml-1">&#8250;</span>
            </Link>
            <div className="mt-6 flex items-center">
              <span className="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                CEFINTERNATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);