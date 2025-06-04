export const Causes = () => (
  <div className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-green-500 font-medium mb-2">Causes We Help With</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Popular Causes</h2>
      </div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            image: "/mid-day-meal.jpeg",
            alt: "Mid Day Meal Distribution",
            title: "Mid Day Meal Distribution Campaign",
            description: "The mid-day meal program is not just about food. It’s about education, it’s about hunger, it’s about poverty, it’s about childhood.” – Shashi Tharoor",
            link: "/mid-day-meal-distribution-campaign"
          },
          {
            image: "/mid-day-meal.jpeg",
            alt: "Education Support",
            title: "Supporting Under Privileged Children For Education And Food",
            description: "There is a section of society that struggles to meet even the most basic needs like food and education. To survive, they are forced to send their children to work, just to have one meal a day.",
            link: "/support-children-education-food"
          },
          {
            image: "/mid-day-meal.jpeg",
            alt: "Girl Child Rights",
            title: "Promoting The Rights Of Girl Child",
            description: "Right to live, right to speak, and right to education—these are basic rights, yet many girls are still denied them in various parts of society.",
            link: "/promote-girl-child-rights"
          }
        ].map((cause, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src={cause.image}
                alt={cause.alt}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="pt-6 pb-10 px-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{cause.title}</h3>
              <p className="text-gray-600 mb-10">{cause.description}</p>
              <a 
                href={cause.link} 
                className="absolute bottom-5 left-6 inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all"
              >
                READ MORE <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);