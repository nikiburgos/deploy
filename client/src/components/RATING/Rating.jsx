// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { mostRating } from "../../redux/actions/actions";
// import styles from "../RATING/Rating.module.css"
// import { Link } from "react-router-dom"

// export default function Rating( ) {
//   const dispatch = useDispatch();
 
//   const videogames = useSelector((state) => state.rating);

//   useEffect(() => {
//     dispatch(mostRating());
//   }, []);


// //   // Ordena los juegos por calificación y toma solo los 3 primeros
//    const top3 = videogames
   
//   console.log(top3)

//   return (
//     <div className={styles.cardContainer}>
//         <h2 className={styles.title1}>TOP 3</h2>
      
//       <ul className={styles.cardContent}>
//         {top3.map((game) => (
        
//         <li 
//         key={game.id}>

//             <h2 className={styles.title}>{game.name} </h2>
            
//             <Link to={`/videogames/${game.id}`} target="_blank"> 
//             <img className={styles.img} src={game.image} alt=""  width='380px' height='200px'/>
//             </Link>

//             <h2 className={styles.title}>{game.rating} POINTS</h2> 

//         </li>
//         ))}
//     </ul>

//     </div>
//   );
// }
