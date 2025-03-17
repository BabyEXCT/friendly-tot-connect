
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Transito Services</h3>
            <p className="text-gray-600 mb-4">
              Providing safe and enriching before and after-school care for children.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#registration" className="text-gray-600 hover:text-primary transition-colors">Registration</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 School Street, Cityville, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-600">info@transitoservices.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Hours of Operation</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Before School:</span> 6:30 AM - 8:30 AM
              </li>
              <li className="text-gray-600">
                <span className="font-medium">After School:</span> 3:00 PM - 6:30 PM
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Weekdays:</span> Monday - Friday
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Transito Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
