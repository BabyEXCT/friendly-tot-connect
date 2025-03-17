
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import ContactForm from '@/components/home/ContactForm';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Handle clicks on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const hash = this.getAttribute('href');
        if (hash && hash !== '#') {
          window.history.pushState(null, '', hash);
          const element = document.querySelector(hash);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+12345678900" />
    </div>
  );
};

export default Index;
