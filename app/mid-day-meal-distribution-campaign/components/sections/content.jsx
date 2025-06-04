export const Content = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                        In India, providing mid-day meals to students has been a long-standing initiative to address malnutrition, improve attendance, and enhance academic performance. Our Mid-Day Meal initiative under CH Foundation is focused on creating lasting impact through nutrition and education.
                    </p>
                    <div className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all cursor-pointer">
                        Join Our Mission
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 italic">
                        "The mid-day meal program is a reflection of a society that cares for its children, invests in their future, and recognizes the value of education."
                    </blockquote>
                    <cite className="text-lg text-blue-600 font-semibold">– Arjun Ram Meghwal</cite>
                </div>
            </section>

            {/* Key Objectives Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-green-500 font-medium mb-2">Our Focus Areas</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Key Objectives & Impact</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Objectives Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            <div className="text-blue-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectives of the Mid-Day Meal Scheme</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The primary objective is to improve the nutritional status of students and enhance their enrolment, attendance, and academic performance. The program also aims to provide employment opportunities for women, promote social equity, and foster community participation in schools.
                            </p>
                        </div>

                        {/* Nutritional Value Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            <div className="text-green-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutritional Value of Mid-Day Meals</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The meals are designed to meet daily nutritional requirements of growing children. They include a combination of rice, dal, vegetables, and eggs or meat to provide essential nutrients like proteins, carbohydrates, and vitamins.
                            </p>
                        </div>

                        {/* Impact Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                            <div className="text-orange-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Impact of Mid-Day Meals</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Studies show significant impact on health and academic performance. The percentage of underweight children (5-14 years) declined from 43.5% in 2005 to 35.7% in 2014, with increased enrolment and attendance rates among underprivileged children.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-500 to-green-500">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-white">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8">
                            <div className="text-4xl md:text-5xl font-bold mb-2">43.5% → 35.7%</div>
                            <p className="text-lg">Reduction in underweight children (2005-2014)</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8">
                            <div className="text-4xl md:text-5xl font-bold mb-2">Millions</div>
                            <p className="text-lg">Children benefited across India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Support Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-green-500 font-medium mb-2">Make a Difference</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ways to Support Our Mission</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We can join hands to support this noble cause. Here are the ways you can contribute to the Mid-Day Meal Scheme under CH Foundation:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Volunteering Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Volunteering</h3>
                            <p className="text-gray-700 leading-relaxed text-center mb-6">
                                You can volunteer with CH Foundation to help prepare and distribute mid-day meals to students. This can be a great way to give back to the community and make a direct impact on the lives of underprivileged students.
                            </p>
                            <div className="text-center">
                                <a href="/contact-us" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all font-semibold">
                                    Become a Volunteer
                                </a>
                            </div>
                        </div>

                        {/* Donating Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Donating</h3>
                            <p className="text-gray-700 leading-relaxed text-center mb-6">
                                You can make donations to CH Foundation to support the Mid-Day Meal Scheme or directly to schools in need. This helps ensure students receive nutritious meals and covers the cost of cooking equipment and utensils.
                            </p>
                            <div className="text-center">
                                <a href="/donate" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all font-semibold">
                                    Donate Now
                                </a>
                            </div>
                        </div>

                        {/* Spreading Awareness Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                            <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Spreading Awareness</h3>
                            <p className="text-gray-700 leading-relaxed text-center mb-6">
                                Many people are unaware of the Mid-Day Meal Scheme and its impact. By spreading awareness about the program and its benefits, you can encourage more people to support the cause and help ensure every child has access to nutritious meals.
                            </p>
                            <div className="text-center">
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all font-semibold">
                                    Share Our Mission
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Building a Brighter Future</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        The Mid-Day Meal Scheme has been a critical initiative in India to address malnutrition, improve attendance, and enhance academic performance among underprivileged students. Despite the challenges faced by the program, the Mid-Day Meal Scheme has been successful in providing nutritious meals to millions of children across the country.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        By supporting the program through volunteering, donating, or spreading awareness, we can help ensure that every child has access to a nutritious mid-day meal and a brighter future.
                    </p>
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold inline-block shadow-lg hover:shadow-xl transition-all cursor-pointer">
                        Together, we can make a difference
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-600 to-blue-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join CH Foundation in our mission to provide nutritious meals to children in need. Every contribution counts towards building a healthier, more educated future generation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact-us"className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                            Start Volunteering
                        </a>
                        <a href="/donate" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg">
                            Make a Donation
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};