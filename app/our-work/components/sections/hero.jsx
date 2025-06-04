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
        <div className='bg-gray-100 py-20'>
            <div className='text-center text-[rgb(42, 42, 42)] max-w-6xl mx-auto px-6'>
                <p className="text-lg md:text-xl leading-relaxed mb-8 font-light">
                    Sustainable development across the world has become a defining goal and a key focus for every brand. As Bill Ford rightly said, "Creating a strong business and building a better world are not conflicting goals. They are both essential ingredients for long-term success." Corporate Social Responsibility (CSR) is a powerful way to achieve long-term success, competitiveness, and sustainability. CSR initiatives act as catalysts for corporations to build a strong brand alongside key stakeholders—customers, employees, government, and the public. CH Foundation has always stood as a trusted partner with corporate professionals on a mission to bring sustainable change across communities. We have partnered with Iscon Eighteesh brands to collaborate for the betterment and upliftment of society. Let's join hands to create a lasting impact and let the smiles of these children brighten the world.
                </p>
            </div>
        </div>
    </>
    );
}