import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSecret, faHandHoldingDollar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const BottomCTA = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-green-500 font-medium mb-4 text-lg">Join Our Mission</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        How You Can Make a Difference
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Together, we can create lasting change in the lives of children and communities across India
                    </p>
                </div>

                {/* Three Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: faUser,
                            title: "ENGAGE",
                            description: "Connect with our community and participate in meaningful activities that create positive impact in children's lives.",
                            gradient: "from-blue-500 to-blue-600",
                            bgGradient: "from-blue-50 to-blue-100",
                            iconBg: "bg-blue-100",
                            iconColor: "text-blue-600",
                            titleColor: "text-blue-600"
                        },
                        {
                            icon: faUserSecret,
                            title: "INNOVATE",
                            description: "Bring fresh ideas and creative solutions to help us develop new approaches to education and child welfare.",
                            gradient: "from-green-500 to-green-600",
                            bgGradient: "from-green-50 to-green-100",
                            iconBg: "bg-green-100",
                            iconColor: "text-green-600",
                            titleColor: "text-green-600"
                        },
                        {
                            icon: faHandHoldingDollar,
                            title: "INSPIRE",
                            description: "Share your story and inspire others to join our mission of creating a better future for every child.",
                            gradient: "from-orange-500 to-orange-600",
                            bgGradient: "from-orange-50 to-orange-100",
                            iconBg: "bg-orange-100",
                            iconColor: "text-orange-600",
                            titleColor: "text-orange-600"
                        }
                    ].map((item, index) => (
                        <div key={index} className="group">
                            <div className={`bg-gradient-to-br ${item.bgGradient} border border-gray-200 rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}>
                                {/* Hover overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-95 transition-opacity duration-500 rounded-2xl`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center h-full">
                                    {/* Icon */}
                                    <div className={`${item.iconBg} group-hover:bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-md`}>
                                        <FontAwesomeIcon 
                                            icon={item.icon}
                                            className={`w-8 h-8 ${item.iconColor} group-hover:text-white transition-colors duration-500`} 
                                        />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className={`${item.titleColor} group-hover:text-white font-bold text-xl tracking-wide mb-4 transition-colors duration-500`}>
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-gray-700 group-hover:text-white/90 leading-relaxed flex-grow transition-colors duration-500">
                                        {item.description}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Lives?
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Join thousands of volunteers who are already making a difference. Your time, skills, and passion can help us reach more children and create lasting change in communities across India.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a 
                                href="/contact-us" 
                                className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                            >
                                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Become a Volunteer
                            </a>
                            
                            <a 
                                href="/donate" 
                                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center"
                            >
                                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Make a Donation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};