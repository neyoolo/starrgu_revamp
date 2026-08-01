import React from 'react';
import './chatButton.css';

const WhatsAppChatButton = () => {
  // ===== CONFIGURE YOUR WHATSAPP NUMBER HERE =====
  const phoneNumber = '1234567890'; // Replace with your number (country code without '+')
  const message = 'Hello! I have a question.';
  

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Opens in new tab. Use window.location.href = whatsappUrl; for same tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      type="button"
      className="whatsapp-chat-button"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Chat with us</span>
    </button>
  );
};

export default WhatsAppChatButton;