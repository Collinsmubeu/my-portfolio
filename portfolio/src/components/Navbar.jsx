import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Collins<span style={{color: '#00d8ff'}}>Dev</span></div>
      <ul style={styles.links}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#0a192f',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' },
  links: { display: 'flex', listStyle: 'none', gap: '20px' },
};

export default Navbar;   