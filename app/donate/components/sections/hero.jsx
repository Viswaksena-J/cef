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
                    Help the poor in need
                </h1>
            </div>
        </div>
        <div className='text-center text-[rgb(42, 42, 42)] max-w-7xl mx-auto my-16'>
            <h6 className='text-center text-3xl font-bold mb-12 text-sky-600'>Why Donate?</h6>
            <p className="text-base md:text-lg mb-8">
                Your support can be life-changing literally for hundreds of children and families. At CEF International, we know that nothing makes good programs like good information. In this way, we are able to gather and analyse information in order to build on and refine our efforts based on their effectiveness in creating real change. Running with the idea that every child is the world changer, CEF International makes it its business to ensure such potential is tapped. Using our Evidence & Use process, we can evaluate the effectiveness of our programs and modify them to meet the child development needs. 
            </p>
            <p className="text-base md:text-lg">
                It doesn’t only mean a contribution; it is a step towards a better future for the needy persons who deserve a better life. This is the place where you can be a part of something special, helping to make a real difference and changing the world, person by person.
            </p>
        </div>
    </>
    );
}