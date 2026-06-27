import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>Designed & Built by Collins Mubeu</p>
        <p style={styles.copyright}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: { 
    textAlign: 'center', 
    padding: '30px', 
    backgroundColor: '#020c1b', 
    color: '#8892b0', 
    fontSize: '0.85rem' 
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  copyright: {
    opacity: 0.7
  }
};

export default Footer;   