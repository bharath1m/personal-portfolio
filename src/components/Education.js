import React from 'react'

const Education = () => {
  return (
    <section id='education' style={styles.section}>
      
        <h2 style={styles.header}>Experience</h2>
        <ul style={styles.techList}>
            <li>I have over 6+ months of experience as a Database Developer and have also worked on Java backend development. Additionally, I am self-learning ReactJS to enhance my skills and expand my knowledge.</li>
        </ul>
        <h2 style={styles.header}>Education</h2>
        <ul style={styles.techList}>
            <li><h3>Degree:</h3>I completed my graduation in 2023 from Dr. Sri Shivakumara Mahaswamy College of Engineering, Bengaluru, with a degree in Information Science and Engineering.</li><br/>
            <li>Course: Java Full Stack Developer</li>
        </ul>
    </section>
  )
}

const styles = {
  section:{
    padding:'50px',
    backgroundColor:'#f8f8f8',
    color:'#000',
    textAlign:'center',
    borderBottom:'1px solid #ccc',
  },
  techList:{
    listStyle:'none',
    padding:'0'
  },

  header:{
    textDecoration:'underline'
  }
}

export default Education
