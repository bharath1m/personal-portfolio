import React, { useState, useEffect } from "react";
import profileImage from "../assests/Bharath.jpeg"; 

const About = () => {
  const fullText = "Developer"; 
  const [text, setText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const typingSpeed = isDeleting ? 50 : 100; 
  const pauseTime = 1000; 

  useEffect(() => {
    let timer;

    const updateText = () => {
      setText((prev) => {
        if (!isDeleting) {
          
          const nextText = fullText.slice(0, prev.length + 1);
          if (nextText === fullText) setTimeout(() => setIsDeleting(true), pauseTime);
          return nextText;
        } else {
         
          const nextText = fullText.slice(0, prev.length - 1);
          if (nextText === "") setIsDeleting(false); // Restart typing
          return nextText;
        }
      });
    };

    timer = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.profileImageContainer}>
          <img src={profileImage} alt="Profile" style={styles.profileImage} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bharath M</h2>
          <h3 style={styles.typingText}>I'm <span style={styles.dynamicText}>{text}</span></h3>
          <p style={styles.aboutText}>Dedicated and detail-oriented software developer with hands-on experience in database 
management, ETL processes, and full-stack development. Proven ability to design efficient 
solutions that enhance data integrity and streamline processes. Seeking to leverage technical 
skills and innovative thinking in a challenging environment to drive organizational success.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(0,0,0,0.3)", 
    color:'#fff'
  },
  container: {
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left", 
  },
  profileImageContainer: {
    borderRadius: "50%", 
    padding: "5px", 
    marginRight: "20px", 
    border: "5px solid white", 
  },
  profileImage: {
    width: "150px", 
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover", 
  },
  textContainer: {
    color: "#333", 
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
  },
  name: {
    fontSize: "2.5em", 
    fontWeight: "bold",
    marginBottom: "5px", 
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
  },
  typingText: {
    fontSize: "1.5em", 
    fontWeight: "normal",
    color: "#333", 
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)", // Optional shadow effect for typing text
  },
  dynamicText: {
    fontWeight: "bold", 
    color: "#333", 
  },
  aboutText: {
    fontSize: "1.1em",
    marginTop: "15px", 
    lineHeight: "1.6",
    color: "#333",
  },
 
  '@media (max-width: 768px)': {
    section: {
      flexDirection: "column",
      padding: "20px",
    },
    container: {
      flexDirection: "column",
      textAlign: "center", 
    },
    profileImage: {
      width: "120px", 
      height: "120px",
    },
    name: {
      fontSize: "2em", 
    },
    typingText: {
      fontSize: "1.2em", 
    },
    aboutText: {
      fontSize: "1em", 
    },
  },
  '@media (max-width: 480px)': {
    profileImage: {
      width: "100px", 
      height: "100px",
    },
    name: {
      fontSize: "1.8em", 
    },
    typingText: {
      fontSize: "1em", 
    },
    aboutText: {
      fontSize: "0.9em", 
    },
  },
};

export default About;
