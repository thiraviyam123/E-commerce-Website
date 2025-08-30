import React from 'react';
import { FaShippingFast, FaUndoAlt, FaHeadset, FaGift, FaCogs } from 'react-icons/fa';

function Service() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Services</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px' }}>
        <div style={cardStyle}>
          <FaCogs size={40} color="#4CAF50" />
          <h3>Product Customization</h3>
          <p>Customize your products with names, designs, and gift packaging options.</p>
        </div>

        <div style={cardStyle}>
          <FaShippingFast size={40} color="#007bff" />
          <h3>Fast Delivery</h3>
          <p>Get products delivered within 3–5 days with real-time tracking.</p>
        </div>

        <div style={cardStyle}>
          <FaUndoAlt size={40} color="#ff9800" />
          <h3>Easy Returns</h3>
          <p>Return or exchange products within 7 days without any hassle.</p>
        </div>

        <div style={cardStyle}>
          <FaHeadset size={40} color="#e91e63" />
          <h3>24/7 Support</h3>
          <p>We’re here for you anytime via chat, WhatsApp, or email.</p>
        </div>

        <div style={cardStyle}>
          <FaGift size={40} color="#9c27b0" />
          <h3>Gift Wrapping</h3>
          <p>Surprise your loved ones with beautifully wrapped gifts.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '250px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9ff',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
};

export default Service;
