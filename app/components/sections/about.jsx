export const About = () => {
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 container mx-auto">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Welcome to Children's Hope Foundation
                    </h1>
                    <p className="text-gray-700 mb-6">
                        We are dedicated to bringing hope, care, and opportunities to underprivileged children—especially the girl child. Our mission is to ensure that every child, regardless of their background, has access to food, education, hygiene, and a brighter future.We work tirelessly to support:
                    </p>
                    <p className="text-gray-700 mb-8">
                        - Girl child education and empowerment<br/>
                        - Nutritious meals for children in need<br/>
                        - Clean hygiene practices and awareness<br/>
                        - Education and welfare for orphans and poor children<br/>
                    </p>
                    <p className="text-gray-700 mb-6">
                        Our goal is to build a society where every child has the chance to grow, learn, and dream without limitations. Through community-driven efforts and generous support, we strive to make a lasting impact on children's lives, empowering them to reach their full potential.
                    </p>
                    <p className="text-[#4986E8] text-3xl font-bold mb-6">one step at a time.</p>
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Donations Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300">
                        <div className="text-blue-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-500 mt-2">GIVE DONATIONS</h3>
                    </div>
                    
                    {/* Volunteer Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300">
                        <div className="text-green-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-500 mt-2">BECOME VOLUNTEER</h3>
                    </div>
                    
                    {/* Our Work Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300">
                        <div className="text-green-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-500 mt-2">OUR WORK</h3>
                    </div>
                    
                    {/* Contact Us Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300">
                        <div className="text-blue-500 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-500 mt-2">CONTACT US</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};