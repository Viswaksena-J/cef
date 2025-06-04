export const Missions = () => {
    return (
        <div className="py-16 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
                    Our Mission and Vision for Impactful Partnership
                </h1>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg rounded-lg overflow-hidden">
                    {/* Food Distribution Image */}
                    <div className="relative h-96 lg:h-auto">
                        <img 
                            src="/mission-1.webp" 
                            alt="Community food distribution"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Mission Text */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
                        </div>
                        
                        <div className="space-y-6 text-sm md:text-base leading-relaxed">
                            <p className="text-lg font-medium text-blue-50">
                                At CH Foundation, our mission begins with people—not just with projects.
                            </p>
                            <p>
                                We have always focused on addressing the essential needs of humankind.
                            </p>
                            
                            <div className="my-8">
                                <p className="font-semibold text-blue-100 mb-4">
                                    What does every person deserve?
                                </p>
                                
                                <div className="space-y-4 pl-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p><span className="font-semibold text-blue-100">Nutritious food</span> to nourish a healthy mind.</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p><span className="font-semibold text-blue-100">Healthcare</span> to live a safe and strong life.</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p><span className="font-semibold text-blue-100">Education</span> to uplift oneself and contribute to society.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <p>
                                We are committed to bringing all these necessities to every community in need.
                            </p>
                            <p>
                                Our goal is to ensure that basic facilities reach even the most remote areas of India, helping individuals build healthy bodies and brighter futures.
                            </p>
                            <p>
                                We work as a catalyst—driving change through impactful campaigns that aim to create a more sustainable, inclusive environment for future generations.
                            </p>
                            <p className="font-medium text-blue-50">
                                You can play a role in this journey—even the smallest contribution makes a difference.
                            </p>
                            <p className="text-lg font-semibold text-blue-50 border-l-4 border-white/50 pl-4 mt-6">
                                Let's come together to ensure these life-changing resources reach the communities that need them the most.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg rounded-lg overflow-hidden">
                    {/* Education Text */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Education For Poor Children</h2>
                        </div>
                        
                        <div className="space-y-6 text-sm md:text-base leading-relaxed">
                            <p className="text-lg font-medium text-blue-50">
                                Poverty continues to deny many children their basic rights—one of the most crucial being the right to education.
                            </p>
                            <p>
                                At CH Foundation, we have made it our mission to ensure education for every child across the nation.
                            </p>
                            <p>
                                Our programs are thoughtfully designed, keeping in mind the unique learning abilities of each child. We believe education should not feel like a burden—it should spark curiosity, creativity, and confidence.
                            </p>
                            <p>
                                We have built activities and campaigns that not only educate but also inspire children to dream, grow, and achieve. Our aim is to instill a lifelong love for learning and strong moral values in children from underserved communities.
                            </p>
                            <p>
                                Through global support, we have raised essential funds to make this vision a reality.
                            </p>
                            <p className="font-medium text-blue-50">
                                You too can become a part of this journey—your contribution can bring a priceless smile of success to a child's face, and that smile is truly worth a million.
                            </p>
                        </div>
                    </div>
                    
                    {/* Children Education Image */}
                    <div className="relative h-96 lg:h-auto">
                        <img 
                            src="/depositphotos_56835989-stock-photo-indian-kids-in-the-jaisalmer.webp" 
                            alt="Children in education program"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}