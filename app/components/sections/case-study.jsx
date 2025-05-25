import Image from "next/image";

export const CaseStudy = () => (
  <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-green-500 mb-2">Every Life Matters</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join The Worlds Largest Growing Family</h2>
        
        <p className="text-gray-700 mb-8">
          Join us The Children Educare foundation family to help the children who 
          are devoid of the basic amenities. Your contribution can help the children 
          with education, nutritious food, and better health facilities. Every 
          contribution counts whether it is your out of box ideas or material or 
          monetary support. We have pledged for the upliftment of children of 
          society who got struck hard by either a pandemic, the act of god, or an 
          uncertain event in life. Let's bring smiles to innocent faces and brightness 
          in the eyes of our future.
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
          KNOW MORE
        </button>
      </div>
      
      <div className="relative">
        <img 
          src="/592b6649-0972-4b85-8ed9-58fc321b5b3f.jpeg" 
          alt="Child with educational supplies" 
          className="rounded-lg shadow-lg"
          width={550}
          height={550}
        />
      </div>
    </div>
  </section>
);