
import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
  className?: string;
};

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in Transito Services. Can you provide more information?",
  className = ""
}: WhatsAppButtonProps) => {
  // Format phone number to remove any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:scale-110 ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
