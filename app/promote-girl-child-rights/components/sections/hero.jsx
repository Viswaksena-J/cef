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
                    Promoting The Rights Of Girl Child
                </h1>
            </div>
        </div>
    </>
    );
}