import React, { useState } from 'react';

function Help() {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Browse products, add to cart, and proceed to checkout with your payment details.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, UPI, and net banking.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once shipped, we send you a tracking ID via email or SMS.',
    },
    {
      question: 'What is your return policy?',
      answer: 'You can return items within 7 days of delivery if unopened and unused.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact us via email at support@yourdomain.com or WhatsApp at +91-9876543210.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Help & FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <h3
            onClick={() => toggleFAQ(index)}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              color: '#007bff',
              marginBottom: '5px',
            }}
          >
            {faq.question}
          </h3>
          {activeIndex === index && <p style={{ color: '#333' }}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default Help;
