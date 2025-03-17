
import React from 'react';
import { Bus, Coffee, BookOpen, Puzzle, Clock, Heart } from 'lucide-react';

const services = [
  {
    icon: <Bus className="h-10 w-10 text-primary" />,
    title: "Safe Transportation",
    description: "Reliable transportation to and from local schools with fully licensed and experienced drivers."
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Nutritious Meals",
    description: "Healthy, balanced breakfasts and afternoon snacks prepared fresh daily with quality ingredients."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Homework Assistance",
    description: "Qualified staff provide homework help and structured educational activities."
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    title: "Interactive Activities",
    description: "Age-appropriate games, arts and crafts, and physical activities that promote development."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Flexible Hours",
    description: "Extended morning and evening hours to accommodate working parents' schedules."
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Caring Environment",
    description: "Nurturing staff committed to creating a safe, supportive, and fun atmosphere."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-transito-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-24 top-20 w-64 h-64 bg-transito-yellow opacity-20 rounded-full"></div>
      <div className="absolute -left-24 bottom-20 w-80 h-80 bg-transito-green opacity-20 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            We provide comprehensive before and after-school services designed to keep your children 
            safe, engaged, and thriving while you're at work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-transito-green/30 p-4 inline-block rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
