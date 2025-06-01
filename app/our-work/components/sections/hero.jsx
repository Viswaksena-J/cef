import Image from 'next/image';

export const Hero = () => {
    return (
        <>
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image 
                        src="/carousel-1.jpg" 
                        alt="Evidence and Use" 
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-900/30 bg-opacity-75"></div>
                </div>
            </div>
            
            {/* Content */}
            <div className="z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-16">
                    Growth Initiates
                </h1>
            </div>
        </div>
        <div className='bg-gray-100 py-16'>
            <div className='text-center text-[rgb(42, 42, 42)] max-w-7xl mx-auto px-4'>
                <p className="text-base md:text-lg mb-8">
                    Sustainable development across the world has become the definition and one of the motives of any brand. As Bill Ford put it right “ Creating a strong business and building a better world are not conflicting goals. They are both essential ingredients for long-term success”. Corporate Social Responsibility is a means to achieve long-term success, competitiveness, and sustainability. CSR initiatives act as catalysts for corporate to build a dominant brand along with key stakeholders—customers, employees, government, and the public. CEF has always worked as an ally with a group of corporate professionals in the mission to bring sustainable change across the globe. We have partnered with Iscon Eighteesh brands to work together for the betterment and upliftment of society. Let’s come together and create a mark and let the smile of these children shine the world.
                </p>
            </div>
        </div>
    </>
    );
}