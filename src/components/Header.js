import React, { useState } from 'react'
import { FaBars} from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <button onClick={toggleMenu} style={styles.menuButton}>
        <FaBars />
      </button>
      <nav style={{...styles.nav, display:menuOpen ? 'flex' : 'none'}}>

        <a href='#about' style={styles.link}>About</a>
        <a href='#education' style={styles.link}>Education</a>
        <a href='#projects' style={styles.link}>Projects</a>
        <a href='#hobbies' style={styles.link}>Hobbies</a>
        <a href='#contacts' style={styles.link}>Contacts</a>
      </nav>
    </header>
  )
}

const styles ={
  header:{
    backgroundColor:'#000',
    color:'#fff',
    padding:'10px 20px',
    display:'flex',
    justifyContent:'space-between',
    position:'relative'
  },
  logo:{
    fontSize:'1.5em',
    fontWeight:'bold'
  },

  menuButton:{
    background:'none',
    border:'none',
    color:'#fff',
    fontSize:'1.5em',
    cursor:'pointer',
  },

  nav:{
    position:'absolute',
    top:'60px',
    left:0,
    width:'100%',
    backgroundColor:'#000',
    flexDirection:'column',
    alignItems:'center',
    gap:'10px',
    padding:'10px 0'
  },

  link:{
    color:'#fff',
    textDecoration:'none',
    fontSize:'1.2em',
    padding:'10px',
  },
}

export default Header