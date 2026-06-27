import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Pizzara',
      description: 'A responsive pizza restaurant menu and ordering interface. Features include dynamic menu rendering and cart functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/Collinsmubeu/pizzara',
      liveLink: '#',
    },
    {
      title: 'Play',
      description: 'A clean, open-source web template designed for startups and portfolios. Focuses on speed and minimalism.',
      tech: ['HTML', 'CSS', 'React'],
      repoLink: 'https://github.com/Collinsmubeu/play',
      liveLink: '#',
    },
    {
      title: 'My Portfolio',
      description: 'The personal portfolio website you are building right now. Showcases skills, about me, and project history.',
      tech: ['React', 'Vite', 'ESLint'],
      repoLink: 'https://github.com/Collinsmubeu/my-portfolio',
      liveLink: '#',
    },
    {
      title: 'Project Four',
      description: 'Description of your next big project goes here. Update this card as you build new things.',
      tech: ['React', 'Node.js'],
      repoLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Some Things I've Built</h2>
      
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <div style={styles.links}>
                {project.repoLink !== '#' && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={styles.iconLink} title="View Code">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                )}
                {project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.iconLink} title="View Live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
            </div>
            
            <p style={styles.cardDesc}>{project.description}</p>
            
            <ul style={styles.techList}>
              {project.tech.map((tech, i) => (
                <li key={i} style={styles.techItem}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#112240',
    color: '#8892b0',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    color: '#e6f1ff',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: '700',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#0a192f',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    color: '#e6f1ff',
    fontSize: '1.4rem',
    margin: 0,
    fontWeight: '600',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  iconLink: {
    color: '#e6f1ff',
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'flex',
    alignItems: 'center',
  },
  cardDesc: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    color: '#a8b2d1',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '0.85rem',
    fontFamily: 'monospace',
    color: '#64ffda',
  },
  techItem: {
    marginRight: '0',
  },
};

export default Projects;   