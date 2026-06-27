import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Collins<span style={{color: '#00d8ff'}}>Dev</span></div>
      <ul style={styles.links}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'rgba(10, 25, 47, 0.95)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  logo: { 
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: '#e6f1ff',
    cursor: 'pointer'
  },
  links: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '30px',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#ccd6f6',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s'
  }
};

export default Navbar;   