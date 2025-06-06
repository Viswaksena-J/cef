import Image from 'next/image';
import './styles.css';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <div>
            {/* Video Background Section */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="./aboutus.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Transparent Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900/50"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-8">
                            ABOUT US
                        </h1>
                    </div>
                </div>
            </div>
            
            {/* About Us Content Section */}
            <div className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-green-500 text-4xl font-semibold mb-4">ABOUT US</h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
                                Children's Hope Foundation (CHF)
                            </h3>
                            
                            <div className="space-y-6 text-gray-600 text-md leading-relaxed">
                                <div className="text-center">
                                    <h4 className="text-xl font-semibold text-green-600 mb-3">
                                        Founded in 2018 | A Vision for a Hunger-Free, Educated India
                                    </h4>
                                </div>
                                
                                <p className="text-center">
                                    At Children's Hope Foundation (CHF), we believe that no child should go to bed hungry or be denied the right to learn. Since our founding in 2018, we've been on a mission to eradicate hunger and unlock the power of education for underprivileged communities across India.
                                    Through tireless on-ground campaigns, CHF ensures daily meals for families who often struggle to secure even one meal a day. But we don't stop there—we bring education to their doorstep, making sure every child, regardless of background, has the opportunity to dream, learn, and rise.
                                    Our Scholarship Awareness Campaigns have reached deep into remote and underserved areas, helping children and parents understand the educational opportunities available to them—opportunities that can change the course of a generation.
                                    To date, we have impacted over <span className="font-semibold text-green-600">700+ children</span> and <span className="font-semibold text-blue-600">400+ families</span>, providing nourishment, educational resources, and above all—hope.
                                    At CHF, we understand that every child is unique. That's why our approach is personalized and thoughtful, aligned with each child's learning pace and capability.
                                    What began as a small movement has grown into a national mission—fueled by compassion, sustained by volunteers, and strengthened by community.
                                    Together, we are not just feeding and teaching—we are nurturing India's future.
                                </p>
                            </div>
                            
                            {/* Statistics */}
                            <div className="flex flex-wrap justify-center lg:justify-center gap-8 py-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-500">12,200+</div>
                                    <div className="text-gray-600 text-sm mt-1">Families get helped</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-500">92,350+</div>
                                    <div className="text-gray-600 text-sm mt-1">Donations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-500">9800+</div>
                                    <div className="text-gray-600 text-sm mt-1">Scholarship to Students</div>
                                </div>
                            </div>
                            
                            {/* Contact Button */}
                            <div className="text-center lg:text-left flex justify-center">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
                                    CONTACT US
                                </button>
                            </div>
                        </div>
                        
                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img 
                                src="./give.jpg" 
                                alt="Give - Children's Education" 
                                className="max-w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Words From Our Volunteers Section */}
            <div className="bg-gray-100 py-16 px-20 ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image - Slide in from left */}
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src="/IMG_20250607_004257.png" 
                                alt="Volunteer helping children" 
                                className="max-w-full h-auto rounded-lg shadow-lg animate-slide-in-left"
                                width={500}
                                height={500}
                            />
                        </div>
                        
                        {/* Right Content */}
                        <div className="space-y-6">
                            {/* Logo and subtitle - Fade in from top */}
                            <div className="flex items-center space-x-3 animate-fade-in-top">
                                
                                <h4 className="text-green-500 text-lg font-semibold">
                                    Hunger Free And Independent Children
                                </h4>
                            </div>
                            
                            {/* Main title - Slide in from right */}
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight animate-slide-in-right">
                                Words From Our Volunteers
                            </h3>
                            
                            {/* Paragraph - Fade in from bottom */}
                            <p className="text-gray-600 text-lg leading-relaxed animate-fade-in-bottom">
                                Parth believes that if we want to grow as a nation, our children must be educated—because children are the roots of a growing nation. With a natural helping spirit since childhood, Parth joined CHF after completing his post-graduation.
                                Beyond supporting children, he is also actively involved in helping the organization build a strong framework so we can reach every corner of India.
                            </p>
                            
                            {/* Designation - Slide in from right with delay */}
                            <div className="text-right animate-slide-in-right-delayed">
                                <p className="text-blue-500 font-semibold text-lg">Mr. Mohit – Volunteer</p>
                                <p className="text-blue-600 font-medium">CHF International</p>
                            </div>
                            
                            {/* Support button - Bounce in */}
                            <div className="pt-4 animate-bounce-in">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
                                    SUPPORT US
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
                            <h2 className="text-green-600 text-lg font-semibold uppercase tracking-wide">Our Vision</h2>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                            Hunger Free And <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                                Independent India
                            </span>
                        </h3>
                        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                            Join us in our mission to create a better tomorrow. Every action counts, every hand helps.
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                        {/* Become Volunteer Card */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 w-full max-w-sm border border-gray-100 overflow-hidden">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            
                            {/* Content */}
                            <Link href="/donate" className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-10 h-10 text-white group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500 mb-3">
                                    Donate Today
                                </h4>
                                <p className="text-gray-600 group-hover:text-green-100 transition-colors duration-500 text-sm leading-relaxed">
                                    Support our cause and help us make a difference in the lives of those in need.
                                </p>
                            </Link>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </div>

                        {/* Contact Us Card */}
                        <Link href="/contact-us" className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 w-full max-w-sm border border-gray-100 overflow-hidden">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                                    <svg className="w-10 h-10 text-white group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500 mb-3">
                                    Contact Us
                                </h4>
                                <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-500 text-sm leading-relaxed">
                                    Get in touch with us to learn more about our initiatives and how you can contribute.
                                </p>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </Link>
                    </div>
                    
                    {/* Call to action */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 text-lg mb-6">
                            Ready to make a difference? Choose your path to impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href='/contact-us' className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Start Volunteering
                            </Link>
                            <Link href='/contact-us' className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}