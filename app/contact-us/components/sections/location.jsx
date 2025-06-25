import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Location = () => {
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
                    Our Locations
                </h2>
                
                {/* Kolkata Button */}
                <div className="flex justify-center mb-12">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300">
                        Bangalore
                    </button>
                </div>
                
                {/* Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Office Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon 
                                    icon={faBuilding}
                                    className="w-8 h-8 text-blue-600" 
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
                            OUR OFFICE
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            103, 2nd Main Rd, Isha Casablanca Mariyappa Layout, Kadubeesanahalli, Panathur, Bengaluru, Karnataka 560103 
                        </p>
                    </div>
                    
                    {/* Phone Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon 
                                    icon={faPhone}
                                    className="w-8 h-8 text-blue-600" 
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
                            PHONE NUMBER
                        </h3>
                        <p className="text-gray-600 text-lg">
                            +91 3241657780
                        </p>
                    </div>
                    
                    {/* Email Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    className="w-8 h-8 text-blue-600" 
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
                            EMAIL ADDRESS
                        </h3>
                        <p className="text-gray-600 text-lg">
                            info@chfoundations.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}