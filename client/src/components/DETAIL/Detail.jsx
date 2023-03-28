import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/actions";
import { useEffect } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import styles from "../DETAIL/Detail.module.css";

export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id)) //así accedo al id de ese detalle
    },[dispatch, id])


    const detailVideogame = useSelector((state)=> state.detail)



    return (
        <div className={styles.background}>
                <Header />

            <div className={styles.fondo}>       

        {  

             detailVideogame? 

             <div className={styles.contenedor}>
                <div className={styles.columnaizquierda}> 
                    <img  className={styles.img} src={detailVideogame?.image} alt={detailVideogame.name} width='300px' height='100px'/>                
                </div>

                <div className={styles.columnaderecha}>
                    <h1 className={styles.name}>{detailVideogame?.name}</h1>           
                    <h3 className={styles.text}> <b>PLATFORMS:</b> {detailVideogame.platforms}</h3>
                    <h3 className={styles.text}> <b>GENRES:</b> {detailVideogame.genres}</h3>
                    <h2 className={styles.text}> <b>RELEASE DATE:</b> {detailVideogame?.released}</h2>
                    <h2 className={styles.text}> <b>RATING:</b> {detailVideogame?.rating}</h2>
                    <p className={styles.text}>{detailVideogame.description}</p>
                </div>
             
            </div>:

            <div>
                <img src="/loading.gif" alt="" />
            </div>
}


            </div>

                        <div className={styles.margin}>            
                        <Footer />             
                        </div>


        

        </div>
    )
}



// //COMO COMPONENTE DE CLASE: 

// import React from "react";
// import { Link, } from "react-router-dom";
// import { connect } from "react-redux";
// import { getDetail } from "../../redux/actions/actions";

// class Detail extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             detailVideogame: null,
//         };
//     }

//     componentDidMount() {
//         const { id } = this.props.match.params;
//         this.props.dispatch(getDetail(id));
//     }

//     componentDidUpdate(prevProps) {
//         const { id } = this.props.match.params;
//         if (prevProps.match.params.id !== id) {
//             this.props.dispatch(getDetail(id));
//         }
//     }

//     render() {
//         const { detailVideogame } = this.props;

//         return (
//             <div>
//                 {detailVideogame ? (
//                     <div>
//                         <h1>{detailVideogame.name}</h1>
//                         <img
//                             src={detailVideogame.image}
//                             alt={detailVideogame.name}
//                         />
//                         <h3>Rating: {detailVideogame.rating}</h3>
//                         <h3>Platforms: {detailVideogame.platforms}</h3>
//                         <h3>Genres: {detailVideogame.genres}</h3>
//                         <h2>Released Date: {detailVideogame.released}</h2>
//                     </div>
//                 ) : (
//                     <p>Loading...</p>
//                 )}

//                 <Link to="/home">
//                     <button>HOME</button>
//                 </Link>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     detailVideogame: state.detail,
// });

// export default connect(mapStateToProps)(Detail);

