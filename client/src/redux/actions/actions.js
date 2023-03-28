import axios from 'axios'; 

import { GET_VIDEOGAMES, FILTERED_BY_GENRES, FILTERED_BY_ORIGIN, ORDER_BY_NAME, GET_VIDEOGAME_BY_NAME, GET_GENRES, GET_DETAIL, ORDER_BY_RATING, MOST_RATING } from '../actions/action-types'




export const getVideogames = () => { //ACTION QUE TRAE TODOS LOS VIDEOGAMES
    return async function (dispatch){ //lo hago con async await pero se puede hacer con promesas tmb, hacer uno para practicar ! 
        let json = await axios.get("http://localhost:3001/videogames", {  
        //esta es la ruta que hice en el back que me trae TODOS los videojuegos.
        //acá es donde se hace la 'comunicación entre el front y el back :)
        })
        return dispatch({
            type: GET_VIDEOGAMES,
            payload:json.data
        })
    }
}

// export const getVideogames = () => {
//     return async (dispatch) => {
//       try {
//         setLoading(true); // set loading state to true
//         const res = await axios.get("http://localhost:3001/videogames");
//         dispatch({ 
//             type: GET_VIDEOGAMES, 
//             payload: res.data });
//         setLoading(false); // set loading state to false
//       } catch (err) {
//         console.log(err);
//       }
//     };
//   };
  

export const filteredVideogamesByGenres = (payload) => { //ACTION QUE TRAE VIDEOGAMES FILTRADOS POR GENERO
    return {
        type: FILTERED_BY_GENRES,
        payload
    }
}

export const filteredByOrigin = (payload) => { //ACTION QUE TRAE VIDEOGAMES SEGUN FUERON CREADOS EN BDD O DE LA API
    return {
        type: FILTERED_BY_ORIGIN,
        payload
    }
}

export const orderByName = (payload) => { //ACTION QUE ORDENA VIDEOGAMES POR NOMBRE
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export const getVideogameByName = (name) => { //ACTION QUE TRAE EL VIDEOGAME BUSCADO POR NOMBRE
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
                type: GET_VIDEOGAME_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getGenres = () => {  //ACTION QUE TRAE EL ARRAY DE GENEROS
    return async function (dispatch){
        let info = await axios.get(`http://localhost:3001/genres`, {
        })
        return dispatch({
            type: GET_GENRES,
            payload: info.data
        })
    }
}

export const postVideogame = (payload) => { //ACTION QUE CREA UN VIDEOGAME :) 
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/videogames`, payload);
        return response;
    }
}

export const getDetail = (payload) => { //ACTION QUE TRAE EL DETAIL POR ID
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/videogames/${payload}`)
            return dispatch({
               type: GET_DETAIL,
               payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const orderByRating = (payload) => { //ACTION QUE ORDENA VIDEOGAMES POR RATING
    return{
        type: ORDER_BY_RATING,
        payload
       }        
    };

// export const mostRating = (payload) =>{
//     return {
//         type: MOST_RATING,
//         payload
//     }
// }