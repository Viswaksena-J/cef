export const BottomBadges = () => {
    return (
        <div className="flex justify-center items-center gap-6 py-12">
            {/* Become Volunteer Badge */}
            <div className={`transform transition-all duration-700 ease-out`}>
                <div className="relative bg-white border-2 border-green-400 rounded-2xl px-8 py-6 min-w-[240px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden hover:border-green-500">
                    {/* Slide-down background */}
                    <div className="absolute inset-0 bg-green-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-green-100 group-hover:bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500">
                            <svg 
                                className="w-6 h-6 text-green-600 group-hover:text-green-500 transition-colors duration-500" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-green-600 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-500">
                            BECOME VOLUNTEER
                        </h3>
                    </div>
                </div>
            </div>

            {/* Give Donation Badge */}
            <div className={`transform transition-all duration-700 ease-out delay-150`}>
                <div className="relative bg-white border-2 border-blue-400 rounded-2xl px-8 py-6 min-w-[240px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden hover:border-blue-500">
                    {/* Slide-down background */}
                    <div className="absolute inset-0 bg-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-blue-100 group-hover:bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500">
                            <span className="text-blue-600 group-hover:text-blue-500 text-xl font-bold transition-colors duration-500">₹</span>
                        </div>
                        <h3 className="text-blue-600 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-500">
                            GIVE DONATION
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};