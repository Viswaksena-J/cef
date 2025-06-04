export const Content = () => {
    return (
        <div className="bg-white">
            {/* Main Content Section */}
            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-green-500 text-2xl font-semibold mb-4">OUR MISSION</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Breaking The Cycle of Child Labor Through Education
                        </h3>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-blue-500 text-lg font-semibold">
                                        Transforming Lives Through Education
                                    </h4>
                                </div>
                                
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    As a result, these children are deprived of learning and pushed into the harsh cycle of child labor. At CH Foundation, we work together as a family to uplift these underprivileged children by providing them with nutritious meals and access to education, helping them grow with strong minds, perform well in academic activities we organize, and build a future where they can truly shine.
                                </p>
                            </div>
                            
                            {/* Key Points */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800 mb-1">Nutritious Meals</h5>
                                        <p className="text-gray-600">Providing essential nutrition to help children focus on learning instead of hunger</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800 mb-1">Quality Education</h5>
                                        <p className="text-gray-600">Access to education that develops strong minds and academic excellence</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-gray-800 mb-1">Bright Future</h5>
                                        <p className="text-gray-600">Building a foundation where every child can reach their full potential</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <a href="/donate" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
                                    SUPPORT NOW
                                </a>
                            </div>
                        </div>
                        
                        {/* Right Visual Content */}
                        <div className="space-y-8">
                            {/* Statistics Cards */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center border border-blue-200">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">700+</div>
                                    <div className="text-blue-700 font-medium">Children Supported</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center border border-green-200">
                                    <div className="text-3xl font-bold text-green-600 mb-2">400+</div>
                                    <div className="text-green-700 font-medium">Families Helped</div>
                                </div>
                            </div>
                            
                            {/* Mission Statement Card */}
                            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl text-white">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold">Working As A Family</h4>
                                </div>
                                <p className="text-white/90 leading-relaxed">
                                    We believe in the power of community and work together as one family to create lasting change in the lives of underprivileged children.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Call to Action Section */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Help Us Build A Brighter Future For Every Child
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Your support can make a real difference. Together, we can break the cycle of poverty and give every child the opportunity to learn, grow, and shine.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/donate" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                            DONATE NOW
                        </a>
                        <a href="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                            BECOME A VOLUNTEER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};