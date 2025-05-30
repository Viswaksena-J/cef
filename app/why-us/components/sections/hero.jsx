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
                    EVIDENCE AND USE
                </h1>
            </div>
        </div>
        <div className='text-center text-[rgb(42, 42, 42)] max-w-7xl mx-auto my-16'>
            <p className="text-base md:text-lg mb-8">
                To guarantee the wide-scale success of any programme, collecting and analysing data becomes a poignant virtue. Introducing interventions and implementing
                modifications within CEF International programmes have led to a larger success ratio through the Evidence & Use approach.
            </p>
            
            <p className="text-base md:text-lg">
                CEF International was founded on the belief that every child has the potential to change the world; this is exactly what we aim to do through the Evidence & Use
                approach by understanding the impact of a programme and altering to ensure and sustain children's overall growth and development.
            </p>
        </div>
    </>
    );
}