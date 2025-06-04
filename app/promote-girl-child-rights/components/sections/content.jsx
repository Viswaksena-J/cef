export const Content = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Introduction Section */}
            <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Human Rights • Gender Equality
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Every Girl Deserves Equal Rights
                        </h2>
                    </div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Right to live, right to speak, and right to education—these are basic rights, yet many girls are still denied them in various parts of society. Gender equality is one of our core missions, where we strive to change mindsets and ensure that every individual receives equal rights and opportunities, regardless of gender.
                    </p>
                </div>
            </section>

            {/* Key Rights Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fundamental Rights for Every Girl</h2>
                        <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Right to Live */}
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Right to Live</h3>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Every girl has the fundamental right to life, safety, and protection from violence. This includes protection from harmful practices and ensuring their physical and emotional well-being.
                            </p>
                        </div>

                        {/* Right to Speak */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Right to Speak</h3>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Girls deserve the freedom of expression and the right to voice their opinions, participate in decision-making, and contribute to society without fear or discrimination.
                            </p>
                        </div>

                        {/* Right to Education */}
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Right to Education</h3>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Education is the key to empowerment. Every girl has the right to quality education, learning opportunities, and the chance to develop her full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Reality We Face</h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            These statistics highlight the urgent need for action to protect and promote girls' rights globally.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 text-center text-white">
                            <div className="text-4xl md:text-5xl font-bold mb-2">130M</div>
                            <p className="text-lg opacity-90">Girls denied education worldwide</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 text-center text-white">
                            <div className="text-4xl md:text-5xl font-bold mb-2">12M</div>
                            <p className="text-lg opacity-90">Girls married before age 18 annually</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 text-center text-white">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
                            <p className="text-lg opacity-90">Of girls face discrimination globally</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-8">
                            Our Mission
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Changing Mindsets, Creating Equality
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Gender equality is one of our core missions. We strive to change mindsets and ensure that every individual receives equal rights and opportunities, regardless of gender. Through education, advocacy, and community engagement, we work tirelessly to create a world where girls can thrive and reach their full potential.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/donate" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">
                                Join Our Mission
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How We Make a Difference</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Through comprehensive programs and community initiatives, we address barriers to girls' rights and empowerment.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education Programs */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg">
                            <div className="text-blue-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Education Programs</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We provide educational opportunities, scholarships, and learning resources to ensure girls have access to quality education and can build a brighter future.
                            </p>
                        </div>

                        {/* Awareness Campaigns */}
                        <div className="bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-xl shadow-lg">
                            <div className="text-green-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Awareness Campaigns</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We conduct community awareness programs to change attitudes, challenge stereotypes, and promote gender equality at grassroots level.
                            </p>
                        </div>

                        {/* Support Services */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl shadow-lg">
                            <div className="text-purple-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Support Services</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We offer counseling, mentorship, and support services to help girls overcome challenges and build confidence in pursuing their dreams.
                            </p>
                        </div>

                        {/* Policy Advocacy */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl shadow-lg">
                            <div className="text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9l3-9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Policy Advocacy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We work with policymakers and organizations to advocate for laws and policies that protect girls' rights and promote gender equality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of the Change</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Together, we can create a world where every girl has equal rights and opportunities. Your support can make a real difference in the lives of girls everywhere.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/donate" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                            Make a Donation
                        </a>
                        <a href="/contact-us" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all">
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};