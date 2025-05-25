import Image from "next/image";

export const Services = () => (
  <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
    <p className="text-green-500 mb-2">What We Do?</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Services</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Social Development */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 absolute top-0 left-0"></div>
          <div className="relative z-10 pt-4 pl-4">
            <img 
              src="/icons/social-development.svg" 
              alt="Social Development Icon" 
              className="w-16 h-16"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Social Development</h3>
        <p className="text-gray-700">
          People in Africa, Philistine, afghanistan, Livia and 
          many other countries are not getting the proper 
          medical treatment. So we have open a slogan 
          and a project called "people will not suffer for 
          medical treatment
        </p>
      </div>

      {/* Healths & Rights */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-green-100 absolute top-0 left-0"></div>
          <div className="relative z-10 pt-4 pl-4">
            <img 
              src="/icons/health-rights.svg" 
              alt="Health & Rights Icon" 
              className="w-16 h-16"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Healths & Rights</h3>
        <p className="text-gray-700">
          In today's world we know that many people do 
          not get their food daily. It is very difficult for us 
          in today's world that people do not get their 
          food. So we opened a project called "No people 
          will die without eating"
        </p>
      </div>

      {/* Education */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 absolute top-0 left-0"></div>
          <div className="relative z-10 pt-4 pl-4">
            <img 
              src="/icons/education.svg" 
              alt="Education Icon" 
              className="w-16 h-16"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        <p className="text-gray-700">
          Education is the backbone of a nation. But many 
          children do not get a chance to go to school due 
          to their poverty. So we are raising funds for a 
          project called education for everyone and every 
          child will go to school.
        </p>
      </div>
    </div>
    <Image src="/services-bottom-image.png" alt="Services" width={1000} height={1000} className="w-full h-auto text-center mt-20" />
    
  </section>
);