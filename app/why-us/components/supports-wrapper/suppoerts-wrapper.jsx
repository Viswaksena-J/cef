'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

const supportSlides = [
  {
    imageSrc: '/carousel-1.jpg', // Using an existing money-related image from the public directory
    text: 'To influence through evidence-based advocacy for Early Childhood Care and Education (ECCE) to be the right of every child (3-6 years) that results in easy transition for children from preschool to public primary schools. The component of ECCE will strengthen the quality of learning in public primary schools.',
  },
  {
    imageSrc: '/carousel-2.jpg', // Another existing image
    text: 'We work with communities to implement sustainable solutions that improve education, healthcare, and economic opportunities for vulnerable populations.',
  },
  {
    imageSrc: '/carousel-3.jpg', // Another existing image
    text: 'Through partnerships with local organizations and government bodies, we create scalable models that can be adopted widely for maximum impact.',
  }
];

export const SupportsWrapper = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          BRINGING A LARGE-SCALE IMPACT THROUGH EVIDENCE AND USE
        </h2>
        
        <div className="text-center mb-10">
          <p>Here are a few images that speak volumes of our achievements.</p>
          <p>This has only been possible because of our donors' support.</p>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <button 
            className="text-blue-600 text-4xl opacity-75 hover:opacity-100 bg-white p-2 rounded-full shadow-md focus:outline-none"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          
          <div className="relative mx-auto max-w-4xl">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {supportSlides.map((slide, index) => (
                  <div key={index} className="embla__slide relative w-full">
                    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <Image 
                          src={slide.imageSrc}
                          alt="Support image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-6 text-center max-w-3xl mx-auto">
                        <p className="text-gray-700 leading-relaxed">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className="text-blue-600 text-4xl opacity-75 hover:opacity-100 bg-white p-2 rounded-full shadow-md focus:outline-none"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
        
        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {supportSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};