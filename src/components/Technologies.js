import React from 'react'

const Technologies = () => {
  const techList=["Java","J2EE","Spring Framework","JavaScript","ReactJs","SQL Database"]
  return (
    <section id="technologies" style={styles.section}>
      <h2 style={styles.heading}>Technologies</h2>
      <ul style={styles.techList}>
        {techList.map((tech, index) => (
          <li key={index} style={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px",
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    borderBottom: "1px solid #ccc",
  },
  heading: {
    marginBottom: "20px",
    textDecoration:'underline'
  },
  techList: {
    listStyle: "none",
    padding: 0,
  },
  techItem: {
    fontSize: "18px",
    margin: "10px 0",
  },
}

export default Technologies
