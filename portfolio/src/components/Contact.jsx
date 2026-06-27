
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get In Touch</h2>
      <p style={styles.text}>
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        my inbox is always open!
      </p>
      <a href="mailto:email@example.com" style={styles.button}>Say Hello</a>
    </section>
  );
};

const styles = {
  section: { padding: '100px 20px', textAlign: 'center', backgroundColor: '#0a192f', color: '#8892b0' },
  title: { fontSize: '2rem', color: '#e6f1ff', marginBottom: '20px' },
  text: { maxWidth: '600px', margin: '0 auto 40px auto' },
  button: { padding: '12px 24px', border: '1px solid #64ffda', background: 'transparent', color: '#64ffda', textDecoration: 'none', borderRadius: '4px' },
};

export default Contact;   