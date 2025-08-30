import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram,FaMapMarkerAlt} from 'react-icons/fa';

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <p style={styles.description}>Feel free to reach out through any of the platforms below:</p>

      <div style={styles.cardContainer}>

        {/* Phone */}
        <div style={styles.card}>
          <FaPhone style={styles.icon} />
          <p style={styles.label}>Phone</p>
          <a href="tel:+919342386915" style={styles.link}>+91 9342386915</a>
        </div>

        {/* Email */}
        <div style={styles.card}>
          <FaEnvelope style={styles.icon} />
          <p style={styles.label}>Email</p>
          <a href="mailto:thiraviyamcs01@gmail.com" style={styles.link}>thiraviyamcs01@gmail.com</a>
        </div>

        {/* WhatsApp */}
        <div style={styles.card}>
          <FaWhatsapp style={{ ...styles.icon, color: '#25D366' }} />
          <p style={styles.label}>WhatsApp</p>
          <a
            href="https://wa.me/919342386915?text=Hi%2C%20I%20am%20interested%20in%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Chat on WhatsApp
          </a>
        </div>
        {/* Location */}
<div style={styles.card}>
  <FaMapMarkerAlt style={{ ...styles.icon, color: '#FF5722' }} />
  <p style={styles.label}>Location</p>
  <a
    href="https://www.google.com/maps?rlz=1C1JJTC_enIN1116IN1116&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyDwgAEEUYORiDARixAxiABDINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABNIBCDQ4MjJqMGo3qAIIsAIB8QVvtlWvPnPu4PEFb7ZVrz5z7uA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KaXOe8ZxZ1I6MYhxUf5V7cqp&daddr=Chakrapani+Rd,+Ramapuram,+Old+Narasingapuram,+Race+View+Colony,+Guindy,+Chennai,+Tamil+Nadu+600032"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
  >
    Chakrapani Rd, Ramapuram, Chennai, Tamil Nadu
  </a>
</div>

        {/* Instagram */}
        <div style={styles.card}>
          <FaInstagram style={{ ...styles.icon, color: '#E1306C' }} />
          <p style={styles.label}>Instagram</p>
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            @your_username
          </a>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '80px auto',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#666',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    background: '#f9f9f9',
    padding: '25px',
    borderRadius: '10px',
    width: '200px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.31)',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#444',
  },
  link: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
    wordBreak: 'break-all',
  },
};

export default Contact;
