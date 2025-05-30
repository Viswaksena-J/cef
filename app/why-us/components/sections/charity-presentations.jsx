import Image from 'next/image';
import Link from 'next/link';

export const CharityPresentations = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-[#0D71BB] mb-16">
                CHARITY PRESENTATIONS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Certificate */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                    <div className="relative w-full h-[400px] mb-6">
                        <Image
                            src="/charity-presentations/Moti-devti-and-nani-devti-project_page-0001-1024x768.jpg"
                            alt="Form 10AC Certificate"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <Link 
                        href="/charity-presentations/Moti-devti-and-nani-devti-project_compressed_compressed-1-1.pdf" 
                        download="Form_10AC_Certificate.pdf"
                        className="bg-[#8BCC55] hover:bg-[#7ab84a] text-white font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        DOWNLOAD PDF
                    </Link>
                </div>
                
                {/* Second Certificate */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                    <div className="relative w-full h-[400px] mb-6">
                        <Image
                            src="/charity-presentations/Scholarship_Program_PPT_page-0001-scaled-1.jpg"
                            alt="Certificate of Incorporation"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <Link 
                        href="/charity-presentations/Scholarship_Program_PPT_compressed-2.pdf" 
                        download="Certificate_of_Incorporation.pdf"
                        className="bg-[#8BCC55] hover:bg-[#7ab84a] text-white font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        DOWNLOAD PDF
                    </Link>
                </div>
            </div>
        </div>
    );
}
