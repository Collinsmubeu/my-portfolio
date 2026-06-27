import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.greeting}>Hi, I'm</h2>
        <h1 style={styles.name}>Collins Mubeu.</h1>
        <h3 style={styles.role}>Frontend Engineer & UI Specialist.</h3>
        <p style={styles.desc}>
          I build accessible, pixel-perfect, and performant web experiences. 
          In an age of AI-generated code, I focus on what matters most: 
          human-centric design, clean architecture, and solving real user problems.
        </p>
        <div style={styles.buttonGroup}>
          <a href="#projects" style={styles.primaryButton}>View Work</a>
          <a href="#contact" style={styles.secondaryButton}>Contact Me</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#0a192f', 
    color: '#ccd6f6',
    padding: '0 20px'
  },
  content: { 
    maxWidth: '1000px', 
    textAlign: 'left' 
  },
  greeting: { 
    color: '#64ffda', 
    fontWeight: '400',
    fontSize: '1.2rem'
  },
  name: { 
    fontSize: '4.5rem', 
    color: '#e6f1ff', 
    margin: '10px 0',
    lineHeight: '1.1'
  },
  role: { 
    fontSize: '2.5rem', 
    color: '#8892b0',
    marginBottom: '25px'
  },
  desc: { 
    maxWidth: '540px', 
    margin: '20px 0 40px 0', 
    lineHeight: '1.7',
    fontSize: '1.1rem',
    color: '#a8b2d1'
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px'
  },
  primaryButton: {
    padding: '14px 28px', 
    border: '1px solid #64ffda', 
    background: 'transparent', 
    color: '#64ffda', 
    cursor: 'pointer', 
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background 0.3s'
  },
  secondaryButton: {
    padding: '14px 28px', 
    border: '1px solid #8892b0', 
    background: 'transparent', 
    color: '#8892b0', 
    cursor: 'pointer', 
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background 0.3s'
  }
};

export default Hero;   