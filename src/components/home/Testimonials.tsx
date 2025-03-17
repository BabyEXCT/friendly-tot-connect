
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of 2",
    quote: "Transito Services has been a lifesaver for our family. The staff are amazing with our kids, and the transportation service is always on time and reliable. My children love their time there!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Reynolds",
    role: "Single Parent",
    quote: "The peace of mind I get knowing my daughter is in safe hands before and after school is priceless. The homework assistance has helped improve her grades significantly.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Working Mom",
    quote: "I've tried several before and after school programs, but Transito Services stands out for their personal attention and enriching activities. My son always has a new story to tell me about his day there.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Father of 3",
    quote: "The flexible hours accommodate my unpredictable work schedule, and the nutritious meals give me confidence that my kids are eating well even when I'm not there. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-transito-yellow/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-transito-green opacity-20 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-transito-yellow opacity-30 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Parents Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what families have to say about their experience with Transito Services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-50">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-transito-green">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
