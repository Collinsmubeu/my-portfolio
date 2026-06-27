import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript (ES6+)', level: '3+ years daily use' },
    { name: 'React & Hooks', level: '2+ years production' },
    { name: 'TypeScript', level: '1.5 years active' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git & CI/CD', level: 'Advanced' },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Technical Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.skillName}>{skill.name}</h3>
            <p style={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { 
    padding: '100px 20px', 
    backgroundColor: '#0a192f', 
    color: '#e6f1ff' 
  },
  title: { 
    fontSize: '2rem', 
    marginBottom: '50px', 
    textAlign: 'center' 
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
    gap: '20px', 
    maxWidth: '900px', 
    margin: '0 auto' 
  },
  card: { 
    padding: '25px', 
    backgroundColor: '#112240', 
    borderRadius: '6px', 
    border: '1px solid #233554',
    transition: 'transform 0.2s'
  },
  skillName: {
    margin: '0 0 10px 0',
    color: '#ccd6f6',
    fontSize: '1.2rem'
  },
  skillLevel: {
    margin: 0,
    color: '#64ffda',
    fontFamily: 'monospace',
    fontSize: '0.9rem'
  }
};

export default Skills;   