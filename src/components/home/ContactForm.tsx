
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-8">
              Have questions about our services or ready to register your child? Fill out the form 
              below and our team will get back to you as soon as possible.
            </p>
            
            <div className="bg-transito-green/30 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Transito Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Licensed and certified childcare professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive before and after-school programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Safe transportation to and from local schools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Nutritious meals and snacks included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flexible scheduling for working parents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-transito-yellow/10 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Tell us about your child and what services you're interested in..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 button-transition"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
