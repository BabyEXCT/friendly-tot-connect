
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-transito-yellow opacity-20 rounded-bl-full transform -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-transito-green opacity-30 rounded-tr-full transform translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-1 rounded-full bg-transito-yellow/30 border border-transito-yellow/50 text-sm font-medium text-gray-700 mb-6">
              A Safe Transit Center for Children
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Safe & Comfortable <span className="text-gradient">Transit Center</span> for Your Child!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Providing quality before and after-school care with transportation, nutritious meals, 
              homework assistance, and engaging activities in a safe, nurturing environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 button-transition"
              >
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/5 button-transition"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-slideInRight opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy children at Transito Services" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-transito-yellow/70 h-12 w-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Licensed & Certified</p>
                  <p className="text-xs text-gray-500">Child Care Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
