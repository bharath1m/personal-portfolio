import React, { useState } from "react";

const Projects = () => {
  const projects = [
    { name: "Kotak Kraman Project", description: "Used BODS tools and logs to monitor ETL job execution and ensure timely completion of data processing tasks." },
    { name: "Movie Review System", description: "Developed a Movie Review System that will feature a separation of concerns between the client and server code by implementing loosely coupled architecture." },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <FlipCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front Side */}
      <div style={styles.cardFront}>
        <h3>{project.name}</h3>
      </div>

      {/* Back Side */}
      <div style={styles.cardBack}>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const styles = {
  section: {
    padding: "50px",
    backgroundColor: "#f9f9f9",
    color: "#000",
    textAlign: "center",
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  heading: {
    marginBottom: "20px",
    textDecoration:'underline'
  },
  projectsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    width: "200px",
    height: "150px",
    perspective: "1000px",
    cursor: "pointer",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  },
  cardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#f1f1f1",
    color: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  cardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#f1f1f1",
    color: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transform: "rotateY(180deg)",
  },
};

export default Projects;
