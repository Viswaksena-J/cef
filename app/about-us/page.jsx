import Image from 'next/image';
import './styles.css';

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
                        <h2 className="text-green-500 text-2xl font-semibold mb-4">ABOUT US</h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
                                Welcome To The CEF International (Childrens Educare Foundation).
                            </h3>
                            
                            <p className="text-gray-600 text-md leading-relaxed text-center">
                                Established in 2018 year The Children Educare foundation aims at Hunger 
                                Free India. Through campaigns across India, we have tried to complete the 
                                basic need of meals for families who thrive to get one for a day. We have 
                                aimed at Doorstep education to the children have a bright future. We have 
                                accelerated our motive for education for all by running the Scholarship 
                                Awareness campaign among the communities which are far from the reach 
                                of basic education. We are reaching out to more than 700+ underprivileged 
                                children and 400+ underprivileged families. We at CEF understand the 
                                student mind and therefore we have planned strategically to teach 
                                children according to their grasping capabilities. We have always worked as 
                                a family and are growing it day by day by evolving the voluntary 
                                contribution from people around the nation.
                            </p>
                            
                            {/* Statistics */}
                            <div className="flex flex-wrap justify-center lg:justify-center gap-8 py-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-500">23,000+</div>
                                    <div className="text-gray-600 text-sm mt-1">Families get helped</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-500">485,000+</div>
                                    <div className="text-gray-600 text-sm mt-1">Donations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-500">17,000+</div>
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
                                src="/beg.jpeg" 
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
                                Pratibha believes that if we have to grow as a nation then our children 
                                should be educated. Children are the roots of a growing nation. Tania 
                                fulfilled her helping nature from childhood itself and after the post-
                                graduation, she started helping children with CEF. Other than that she is 
                                helping this organization to build a strong framework and we can reach 
                                each and every corner of India.
                            </p>
                            
                            {/* Designation - Slide in from right with delay */}
                            <div className="text-right animate-slide-in-right-delayed">
                                <p className="text-blue-500 font-semibold text-lg">Mr. Anil- Volunteer</p>
                                <p className="text-blue-600 font-medium">CEF International</p>
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
            <div className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-green-500 text-2xl font-semibold mb-4">OUR VISION</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Hunger Free And Independent India
                        </h3>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                        {/* Become Volunteer Card */}
                        <div className="vision-card volunteer-card bg-white text-green-500 border-4 border-green-500 rounded-3xl px-12 py-16 text-center cursor-pointer relative overflow-hidden w-80 h-64 flex flex-col justify-center items-center">
                            <div className="vision-overlay bg-green-500 absolute inset-0 transform -translate-y-full transition-transform duration-500"></div>
                            <div className="relative z-10 transition-colors duration-500">
                                <div className="mb-4">
                                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold">BECOME VOLUNTEER</h4>
                            </div>
                        </div>

                        {/* Contact Us Card */}
                        <div className="vision-card contact-card bg-white text-blue-500 border-4 border-blue-500 rounded-3xl px-12 py-16 text-center cursor-pointer relative overflow-hidden w-80 h-64 flex flex-col justify-center items-center">
                            <div className="vision-overlay bg-blue-500 absolute inset-0 transform -translate-y-full transition-transform duration-500"></div>
                            <div className="relative z-10 transition-colors duration-500">
                                <div className="mb-4">
                                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold">CONTACT US</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}