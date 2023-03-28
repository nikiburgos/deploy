import { GET_VIDEOGAMES, FILTERED_BY_GENRES, FILTERED_BY_ORIGIN, ORDER_BY_NAME, GET_VIDEOGAME_BY_NAME, POST_VIDEOGAME, GET_GENRES, GET_DETAIL, ORDER_BY_RATING, MOST_RATING } from '../actions/action-types'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: [],
    rating: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }

        case FILTERED_BY_GENRES:
            const allVideogames = state.allVideogames;
            const filteredGenre = action.payload === 'All'? allVideogames : allVideogames.filter((videogame) => videogame.genres?.find(v => v === action.payload));
            return {
                ...state,
                videogames: filteredGenre
            }

        case FILTERED_BY_ORIGIN:
            const allVideogames2 = state.allVideogames;
            const originFilter = action.payload === 'database' ?  allVideogames2.filter((element) => element.createdInDb) : allVideogames2.filter((element) => !element.createdInDb)
            return {
                ...state,
                videogames: action.payload === 'all' ? state.allVideogames : originFilter
            }
            
        case ORDER_BY_NAME: 
        let orderAZ = state.videogames.slice().sort((a,b) =>{
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0
        })
        return{
            ...state,
            videogames: action.payload === 'asc' ? orderAZ : orderAZ.reverse()
        }

        case ORDER_BY_RATING:
            let orderAsc = state.videogames.slice().sort((a,b) =>{
                if (Number(a.rating) > Number(b.rating)) return 1;
                if (Number(b.rating) > Number(a.rating)) return -1;
                return 0
            })
            return{
                ...state,
                videogames: action.payload === 'asc' ? orderAsc : orderAsc.reverse()
            }

        // case MOST_RATING:
        //     let orderAsc2 = state.videogames.slice().sort((a,b) =>{
        //         if (Number(a.rating) > Number(b.rating)) return -1;
        //         if (Number(b.rating) > Number(a.rating)) return 1;
        //         return 0;
        //       });
              
        //       let topThreeGames = orderAsc2.slice(0, 3);
              
        //       return{
        //         ...state,
        //         rating: topThreeGames
        //       }
            
        case GET_VIDEOGAME_BY_NAME: 
        return{
            ...state,
            videogames: action.payload
            }
        
        case GET_GENRES:
           return {
            ...state,
            genres: action.payload
            }

        case POST_VIDEOGAME: //es necesario si no hace nada?? o es como el caso default? Averiguar! 
        return {
            ...state
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        default:
            return {...state}
    }
}
export default rootReducer;