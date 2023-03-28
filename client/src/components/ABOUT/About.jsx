import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"
import imagen from "../../recursos/imagesAbout";
import Footer from '../FOOTER/Footer'




export default function About(){
    return(

        <div className={styles.fondo}>
            <div className={styles.encabezado}> 
                
                <Link to='/home'> 
                <button className={styles.backbutton}>HOME</button>
                </Link>

            </div>
            
            
            <div className={styles.container1}>  
                <h2 className={styles.title}>THE SITE </h2>                                     
                   
                    <p className={styles.text}> This site was created exclusively for the <i><b>Individual Project of <a href='https://www.soyhenry.com/' target='_blank'>'SoyHENRY'</a>  bootcamp.</b></i></p>
                    <p className={styles.text}>The idea was to make -from the begining- a website that shows a large number of video games with their features brought from an external API, as well as the possibility of uploading new video games by the client</p>
                    <p className={styles.text}> This site was created using: </p>
                    
                        <div className={styles.logos}>
                          
                          <a href="http://expressjs.com/" target='_blank'>
                          <img src={imagen.imgExpress} alt="Express Logo" className={styles.img} /> </a>
                          
                          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target='_blank'>
                          <img src={imagen.imgjs} alt="JavaScript Logo" className={styles.img} /> </a>
                         
                          <a href="https://nodejs.org/en" target='_blank'>
                          <img src={imagen.imgNode} alt="Node JS Logo" className={styles.img}/></a>
                          
                          <a href="https://www.postgresql.org/" target='_blank'>
                          <img src={imagen.imgPosgress} alt="Postgres Logo" className={styles.img}/></a>
                          
                          <a href="https://es.reactjs.org/" target='_blank'>
                          <img src={imagen.imgReact} alt="React Logo" className={styles.img}/></a>
                          
                          <a href="https://redux.js.org/" target='_blank'>
                          <img src={imagen.imgRedux} alt="Redux Logo" className={styles.img}/></a>
                          
                          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target='_blank'>
                          <img src={imagen.imgCss} alt="Css Logo" className={styles.img}/> </a>

                            
                        </div>
                        
                        {/* <li>Sequalize</li> */}
                    
                    
            </div>
           

            <div className={styles.container2} >  
                <h2 className={styles.title}> THE CREATOR</h2>
                <p className={styles.text}> My name is Nikki Burgos, Full Stack Web Development student. I'm currently finishing the bootcamp "SoyHENRY" with more than 800 hours of practice in web programming. </p>
                <p className={styles.text}> You can learn more about my work through LinkedIn and Github. </p>
                        <div className={styles.logos}>
                            <a href="https://www.linkedin.com/in/nburgosvega/" target='_blank'>
                            <img src={imagen.imgLinkedin} alt="" className={styles.img2} /> </a>
                            <a href='https://github.com/nikkiburgos' target='_blank'> 
                            <img src={imagen.imgGithub} alt="" className={styles.img2} /></a>
                        </div>

            </div>




         < Footer />

        

        </div>
    );
}
