// import React from "react";
// import { Link } from "react-router-dom"; 
// import styles from '../HEADER/Header.module.css'



// export default function Header () {



// return (

//   <div  className={styles.encabezado} >
   
//     <Link to='/home'> 
//         <button className={styles.button}>All Videogames</button>
//     </Link>


//     <Link to='/about'> 
//         <button className={styles.button}>about us</button>
//     </Link>

//   </div>


// )

// }


import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [headerType, setHeaderType] = useState('default');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderType('alternative');
      } else {
        setHeaderType('default');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.encabezado} style={headerType === 'alternative' ? { background: 'rgba(255, 160, 28, 0.483)', backdropFilter: 'blur(3px)' } : {}}>


      <Link to='/home'>
        <button className={styles.button}>Home</button>
      </Link>

      <Link to='/about'>
        <button className={styles.button}>about us</button>
      </Link>
    </div>
  );
}
