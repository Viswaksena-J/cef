'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export const HeroCarousal = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        emblaApi.on('select', onSelect);
        
        // Auto-play the carousel
        const autoplayInterval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 5000);
        
        return () => {
            emblaApi.off('select', onSelect);
            clearInterval(autoplayInterval);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="relative overflow-hidden w-full h-[800px]">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div key={index} className="embla__slide relative w-full h-full">
                            <div className="absolute inset-0 bg-blue-900/30"></div>
                            
                            {/* Image with overlay */}
                            <div className="absolute inset-0">
                                <div className="relative w-full h-full">
                                    {/* Real image */}
                                    <Image 
                                        src={slide.imageSrc}
                                        alt="Hero background"
                                        fill
                                        className="object-cover"
                                    />
                                    
                                    {/* Dark blue overlay */}
                                    <div className="absolute inset-0 bg-blue-900/30 bg-opacity-75"></div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-4 md:px-8 max-w-4xl">
                                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
                                        {slide.text}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Dots navigation */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === selectedIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Navigation buttons */}
            <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-75 hover:opacity-100"
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                aria-label="Previous slide"
            >
                &#10094;
            </button>
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl opacity-75 hover:opacity-100"
                onClick={() => emblaApi && emblaApi.scrollNext()}
                aria-label="Next slide"
            >
                &#10095;
            </button>
        </div>
    );
};