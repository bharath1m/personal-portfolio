import React from "react";
import { FaCamera, FaBasketballBall, FaHiking, FaFootballBall } from "react-icons/fa";
import {  GiCricketBat } from "react-icons/gi";

const Hobbies = () => {
  return (
    <section id="hobbies" style={styles.section}>
      <h2 style={styles.header}>Hobbies</h2>
      <div style={styles.hobbiesList}>
        <div style={styles.hobbyItem}>
          <FaCamera size={40} style={styles.icon} />
          <p>Photography</p>
        </div>
        <div style={styles.hobbyItem}>
          <FaBasketballBall size={40} style={styles.icon} />
          <p>Basketball</p>
        </div>
        <div style={styles.hobbyItem}>
          <FaHiking size={40} style={styles.icon} />
          <p>Adventure</p>
        </div>
        <div style={styles.hobbyItem}>
          <GiCricketBat size={40} style={styles.icon} />
          <p>Cricket</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px",
    backgroundColor: "#f5f5f5",
    color: "#000",
    textAlign: "center",
  },
  header: {
    fontSize: "28px",
    textDecoration: "underline",
    textUnderlineOffset: "6px",
    marginBottom: "20px",
  },
  hobbiesList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap", // Wrap items to the next row on smaller screens
    gap: "30px",
    marginTop: "20px",
  },
  hobbyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000",
    textDecoration: "none",
    transition: "transform 0.3s, color 0.3s",
  },
  icon: {
    color: "#555",
    marginBottom: "10px",
    transition: "color 0.3s",
  },
  '@media (max-width: 768px)': {
    section: {
      padding: "30px",
    },
    hobbiesList: {
      gap: "20px",
    },
    hobbyItem: {
      fontSize: "14px",
    },
    icon: {
      fontSize: "30px",
    },
  },
  '@media (max-width: 480px)': {
    header: {
      fontSize: "22px",
    },
    hobbiesList: {
      gap: "10px",
    },
    icon: {
      fontSize: "25px",
    },
  },
};

export default Hobbies;
