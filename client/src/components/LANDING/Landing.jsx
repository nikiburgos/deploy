import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'

export default function Landing(){
    return (
        <div className={styles.fondo}>

            <div className={styles.columnaizquierda}>            
                <h2 className={styles.title2}>Welcome to</h2>
                {/* <h1 className={styles.title1}>VIDEOGAMES PI</h1> */}
                <img className={styles.logo} src='/logoPIGAMES.png' alt="" />
                {/* <h3 className={styles.title3}>THE ULTIMATE VIDEOGAMES' SITE</h3> */}
            

                <div className={styles.buttonsContainer}>
           
                    <Link to = '/home' >
                      <button className={styles.button1}>START</button>
                    </Link>

                    <Link to = '/about'>
                      <button className={styles.button2}>LEARN MORE...</button>
                    </Link>

                </div>  
            </div>
        </div>
    )
}