import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setChat((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', {
        message: input,
      });

      const botMessage = { sender: 'bot', text: res.data.reply };
      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setChat((prev) => [...prev, { sender: 'bot', text: 'Error occurred.' }]);
    }

    setInput('');
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>💬 Chat with Us</h2>
      <div style={{
        height: '300px',
        overflowY: 'scroll',
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px'
      }}>
        {chat.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        placeholder="Type your message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        style={{ width: '75%', padding: '8px' }}
      />
      <button onClick={sendMessage} style={{ padding: '8px 12px', marginLeft: '5px',background:'#4CAF50', border:'none'  }}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
