export const ContactUsForm = ({ 
    formData, 
    errors, 
    isSubmitting, 
    onInputChange, 
    onSubmit 
}) => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
            
            <form onSubmit={onSubmit} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onInputChange}
                            placeholder="Name"
                            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1 ml-4">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={onInputChange}
                            placeholder="Email"
                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>}
                    </div>
                </div>

                {/* Phone field */}
                <div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={onInputChange}
                        placeholder="Phone"
                        className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 ml-4">{errors.phone}</p>}
                </div>

                {/* Location field */}
                <div>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={onInputChange}
                        placeholder="Location"
                        className={`w-full px-4 py-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500`}
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1 ml-4">{errors.location}</p>}
                </div>

                {/* Subject field */}
                <div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={onInputChange}
                        placeholder="Subject"
                        className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1 ml-4">{errors.subject}</p>}
                </div>

                {/* Message textarea */}
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={onInputChange}
                        placeholder="Message"
                        rows={6}
                        className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500 resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1 ml-4">{errors.message}</p>}
                </div>

                {/* Disclaimer text */}
                <div className="text-sm text-gray-600 leading-relaxed max-w-lg">
                    <p>
                        By sharing your details, you agree to receive stories and updates from CEF via 
                        mobile, Whatsapp, landline, email and post. If you'd like to change this, please 
                        send us an email on writetous reachusidia@cefinternational.org
                    </p>
                </div>

                {/* Submit button */}
                <div className="flex justify-center pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-green-500 hover:bg-green-600'
                        } text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    )
}