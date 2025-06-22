import Image from 'next/image';
import Link from 'next/link';

export const Certifications = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-[#0D71BB] mb-16">
                CERTIFICATIONS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Certificate */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                    <div className="relative w-full h-[400px] mb-6">
                        <Image
                            src="/certificates/image1.png"
                            alt="SPICE Part B Approval Letter"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <Link 
                        href="/certificates/SPICE_Part B_Approval_Letter_AB4457482.pdf" 
                        download="SPICE_Part_B_Approval_Letter.pdf"
                        className="bg-[#8BCC55] hover:bg-[#7ab84a] text-white font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        DOWNLOAD PDF
                    </Link>
                </div>
                
                {/* Second Certificate */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                    <div className="relative w-full h-[400px] mb-6">
                        <Image
                            src="/certificates/imag2.png"
                            alt="SPICE + Part B Section 8 License"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <Link 
                        href="/certificates/SPICE_+_Part_B_Section_8_License_AB4457482[1].pdf" 
                        download="SPICE_+_Part_B_Section_8_License.pdf"
                        className="bg-[#8BCC55] hover:bg-[#7ab84a] text-white font-medium py-3 px-8 rounded-full transition-colors"
                    >
                        DOWNLOAD PDF
                    </Link>
                </div>
            </div>
        </div>
    );
}
