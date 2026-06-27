import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get In Touch</h2>
      <p style={styles.text}>
        I'm currently open to new opportunities in frontend engineering and UI development. 
        Whether you have a question about my stack or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:collins@example.com" style={styles.button}>Say Hello</a>
    </section>
  );
};

const styles = {
  section: { 
    padding: '100px 20px', 
    textAlign: 'center', 
    backgroundColor: '#0a192f', 
    color: '#8892b0',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { 
    fontSize: '2.5rem', 
    color: '#e6f1ff', 
    marginBottom: '20px' 
  },
  text: { 
    maxWidth: '600px', 
    margin: '0 auto 50px auto',
    lineHeight: '1.7',
    fontSize: '1.1rem'
  },
  button: { 
    padding: '16px 32px', 
    border: '1px solid #64ffda', 
    background: 'transparent', 
    color: '#64ffda', 
    textDecoration: 'none', 
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background 0.3s'
  },
};

export default Contact;   