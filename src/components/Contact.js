import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacts" style={styles.section}>
      <h2 style={styles.header}>Contact</h2>
      <h3>Have a question or want to work together? Below are the contact details:</h3>
      
      {/* Call and Email Section */}
      <div style={styles.contactGroup}>
        <h4 style={styles.subHeader}></h4>
        <div style={styles.contactList}>
          <a href="tel:+919972813864" style={styles.contactItem}>
            <FaPhoneAlt size={20} style={styles.icon} />
            <p>Call</p>
          </a>
          <a href="mailto:bharathmanjunath770@gmail.com" style={styles.contactItem}>
            <FaEnvelope size={20} style={styles.icon} />
            <p>Email</p>
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div style={styles.contactGroup}>
        <h4 style={styles.subHeader}>Follow on Social Media</h4>
        <div style={styles.contactList}>
          <a href="https://www.linkedin.com/in/bharath-m-57641b1a3" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <FaLinkedin size={20} style={styles.icon} />
            <p>LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/bharath1m__" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <FaInstagram size={20} style={styles.icon} />
            <p>Instagram</p>
          </a>
          <a href="https://github.com/bharath1m" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <FaGithub size={20} style={styles.icon} />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px',
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  header: {
    fontSize: '25px',
    textDecoration: 'underline',
  },
  subHeader: {
    fontSize: '20px',
    margin: '20px 0 10px',
    color: '#555',
  },
  contactGroup: {
    marginBottom: '30px',
  },
  contactList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', 
    gap: '20px',
    marginTop: '10px',
  },
  contactItem: {
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    gap: '5px',
    maxWidth: '100px',
  },
  icon: {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
  },
  '@media (max-width: 768px)': {
    section: {
      padding: '30px',
    },
    contactList: {
      flexDirection: 'column', 
      gap: '15px',
    },
    contactItem: {
      maxWidth: '80px',
    },
    icon: {
      fontSize: '20px', 
    },
  },
  '@media (max-width: 480px)': {
    header: {
      fontSize: '22px',
    },
    subHeader: {
      fontSize: '16px',
    },
    contactList: {
      gap: '10px',
    },
  },
};

export default Contact;
