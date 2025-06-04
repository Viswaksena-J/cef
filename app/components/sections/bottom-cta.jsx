import { Suspense } from 'react';
import { StatisticsWrapper } from '../client';

// Fallback for SSR
const StaticNumber = ({ value, text }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-6xl md:text-7xl font-bold text-[#90c459]">{value.toLocaleString()}+</h2>
    <p className="text-white text-center mt-2">{text}</p>
  </div>
);

export const BottomCTA = () => (
  <section className="w-full bg-[#21232e] py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-4">
        <Suspense fallback={<StaticNumber value={12200} text="Families get helped" />}>
          <StatisticsWrapper value={12200} text="Families get helped" />
        </Suspense>
        
        <div className="hidden md:block w-px h-20 bg-gray-700"></div>
        
        <Suspense fallback={<StaticNumber value={9800} text="Scholarship to Students" />}>
          <StatisticsWrapper value={9800} text="Scholarship to Students" />
        </Suspense>
        
        <div className="hidden md:block w-px h-20 bg-gray-700"></div>
        
        <Suspense fallback={<StaticNumber value={92350} text="Donations" />}>
          <StatisticsWrapper value={92350} text="Donations" />
        </Suspense>
      </div>
      
      <div className="flex justify-center mt-16">
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white font-medium rounded-full hover:bg-[#005885] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
          FOLLOW ON INSTAGRAM
        </a>
      </div>
    </div>
  </section>
); 