import React from "react";
import { Link } from "react-router-dom";
import styles from '../CARD/Card.module.css';


export default function Card({ name, image, genres, id}) {
    return (
        <div className={styles.cardContainer}>

            <div className={styles.cardContent}>

            <Link to={`/videogames/${id}`} target="_blank"> 
            <img className={styles.imageContainer}  src={image} alt={name}  width='300px' height= '300px'/>
            </Link>
            
                   
            <h3 className={styles.title}>{name}</h3>
            <h5 className={styles.genres}>{genres.join(", ")}</h5>

           
           
{/* ARREGLAR: CUNANDO SE HACE CLICK, ABRE UNA CARD; 
PERO SI SE TRATA DE ABRIR OTRA, SE RENDERIZA LA ANTERRIOR ANTES DE CARGAR DE VUELTA LA NUEVA */}
            
            

            </div>
        </div>
    )
}