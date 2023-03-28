import React from "react";
import { Link } from "react-router-dom";
import styles from "../FOOTER/Footer.module.css";
import imagen from "../../recursos/imagesAbout";

export default function Footer () {
  return (
    <div className={styles.container}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.left}> 

            <h1 className={styles.title}>VIDEOGAMES PI</h1>

            <h2 className={styles.text}>Nikki Burgos | © All rights reserved </h2>


        </div>


    {/* COLUMNA DERECHA */}
        <div className={styles.right}>   
            <h2 className={styles.text}>Contact us:</h2>

                 <div className={styles.logos}>
                 <a href="https://www.linkedin.com/in/nburgosvega/" target='_blank'>
                 <img src={imagen.imgLinkedin} alt="" className={styles.img2} /> </a>
                 <a href='https://github.com/nikkiburgos' target='_blank'> 
                 <img src={imagen.imgGithub} alt="" className={styles.img2} /></a>
             </div>

        </div>



    </div>
    

        )}