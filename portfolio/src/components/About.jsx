import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <div style={styles.container}>
        <p style={styles.text}>
          Hello! I'm Collins, a frontend developer based in Nairobi. My journey started with tweaking custom themes, 
          which quickly evolved into a passion for building scalable web applications.
        </p>
        <p style={styles.text}>
          Today, I specialize in the React ecosystem, focusing on performance optimization and accessible UI. 
          I believe in writing clean, maintainable code that stands the test of time, rather than chasing every new framework.
        </p>
        <p style={styles.text}>
          When I'm not coding, you can find me contributing to open source or exploring the latest in web accessibility standards.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: { 
    padding: '100px 20px', 
    backgroundColor: '#112240', 
    color: '#8892b0' 
  },
  title: { 
    fontSize: '2rem', 
    color: '#e6f1ff', 
    marginBottom: '40px',
    position: 'relative',
    display: 'inline-block'
  },
  container: { 
    maxWidth: '700px', 
    margin: '0 auto' 
  },
  text: { 
    marginBottom: '20px', 
    lineHeight: '1.8',
    fontSize: '1.05rem'
  },
};

export default About;   