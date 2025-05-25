import Image from "next/image";

export const GreyCTA = () => (
  <section className="relative py-20 px-4 md:px-8 text-center text-white">
    <div className="absolute inset-0 z-0">
      <Image
        src="/grey-cta.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
    </div>
    
    <div className="relative z-20 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">How Can You Help?</h2>
      <p className="text-lg mb-10">
        Your donation will help us save and improve lives with research, education
        and emergency care.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full">
          KNOW MORE
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
          JOIN US NOW
        </button>
      </div>
    </div>
  </section>
);