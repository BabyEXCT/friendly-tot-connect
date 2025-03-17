
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Registration", href: "#registration" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-primary">
            Transito <span className="text-transito-dark">Services</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 button-transition"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 w-full button-transition mt-4"
          >
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
