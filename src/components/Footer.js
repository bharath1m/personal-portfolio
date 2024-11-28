import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <p style={styles.next}>
            &copy; {new Date().getFullYear()} Bharath M. All rights reserved.
        </p>

    </footer>
  )
}

const styles ={
    footer:{
        backgroundColor:'rgba(0,0,0,0.8)',
        color:'#fff',
        textAlign:'center',
        padding:'10px 0',
        position:'relative',
        bottom:'0',
        width:'100%',
        fontSize:'0.9em'
    },

    text:{
        margin:'0'
    }
}
export default Footer
