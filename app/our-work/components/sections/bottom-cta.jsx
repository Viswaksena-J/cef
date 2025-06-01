import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserSecret, faRupeeSign, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

export const BottomCTA = () => {
    return (
        <div>
            <h6 className='text-center text-2xl font-bold mb-12'>
            How you can apply, Here is process
            </h6>
            <div className="flex justify-center items-center gap-6 mb-12">
                {/* Become Volunteer Badge */}
                <div className={`transform transition-all duration-700 ease-out`}>
                    <div className="relative bg-white border-2 border-blue-400 rounded-2xl px-8 py-6 min-w-[240px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden hover:border-blue-500">
                        {/* Slide-down background */}
                        <div className="absolute inset-0 bg-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-xl"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="bg-blue-100 group-hover:bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500">
                                <FontAwesomeIcon 
                                    icon={faUser}
                                    className="w-6 h-6 text-blue-600 group-hover:text-blue-500 transition-colors duration-500" 
                                />
                            </div>
                            <h3 className="text-blue-600 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-500">
                            ENGAGE
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
                                <FontAwesomeIcon 
                                    icon={faUserSecret}
                                    className="w-6 h-6 text-blue-600 group-hover:text-blue-500 transition-colors duration-500" 
                                />
                            </div>
                            <h3 className="text-blue-600 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-500">
                                INNOVATE
                            </h3>
                        </div>
                    </div>
                </div>

                <div className={`transform transition-all duration-700 ease-out delay-150`}>
                    <div className="relative bg-white border-2 border-blue-400 rounded-2xl px-8 py-6 min-w-[240px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden hover:border-blue-500">
                        {/* Slide-down background */}
                        <div className="absolute inset-0 bg-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-xl"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="bg-blue-100 group-hover:bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500">
                                <FontAwesomeIcon 
                                    icon={faHandHoldingDollar}
                                    className="w-6 h-6 text-blue-600 group-hover:text-blue-500 transition-colors duration-500" 
                                />
                            </div>
                            <h3 className="text-blue-600 group-hover:text-white font-bold text-sm tracking-wide transition-colors duration-500">
                                INSPIRE
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-12'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-xl'>
                    Become a Volunteer
                </button>
            </div>
        </div>
    )
};