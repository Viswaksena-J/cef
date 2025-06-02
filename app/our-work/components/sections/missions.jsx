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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg">
                    {/* Food Distribution Image */}
                    <div className="relative h-96 lg:h-auto">
                        <img 
                            src="/mission-1.webp" 
                            alt="Community food distribution"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Mission Text */}
                    <div className="bg-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">Mission</h2>
                        </div>
                        
                        <div className="space-y-4 text-sm md:text-base leading-relaxed">
                            <p>
                                The mission is about people, not about the projects.
                                We at CEF have always given importance to the needs of
                                humankind.
                            </p>
                            <p>
                                What are the requirements of a human being:
                            </p>
                            <p>
                                1. Food to have a healthy mind.<br/>
                                2. Healthcare to stay healthy.<br/>
                                3. Education to improve the living of oneself and others.
                            </p>
                            <p>
                                We have aimed at providing all of the above to every community of
                                society.
                            </p>
                            <p>
                                We aim at providing basic facilities to every corner of the world so
                                that they could have healthy minds with healthy bodies.
                            </p>
                            <p>
                                We act as a catalyst to speed up and give a proper direction to the
                                process of world development with various campaigns. This
                                campaign aims at accelerating the process of making a sustainable
                                environment for future generations. You can be the part of this
                                process by even giving small donations in any form.
                            </p>
                            <p>
                                Lets join hands so that these amenities can be available to the
                                societies which are hard to reach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-lg">
                    {/* Education Text */}
                    <div className="bg-blue-600 text-white p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Education For Poor Children</h2>
                        
                        <div className="space-y-4 text-sm md:text-base leading-relaxed">
                            <p>
                                Poverty has always been making people devoid of many basic
                                amenities. One such is the right to education. We at CEF have
                                made it our mission to have education for all children across the
                                world. We have strategically planned the courses by keeping in the
                                mind the learning abilities of children. Education should not be a
                                mundane task, it should enhance the creative ability and
                                innovative way of thinking. We have developed the activities and
                                campaign in such a way that they can build enthusiasm and
                                encouragement in children to come up and shine. We are creating
                                a zeal to learn and enhance moral values among children around
                                the world. We have raised funds across the globe for this mission.
                                You can contribute too and have an opportunity to witness the
                                smile of achievement on these children which is worth a million.
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