import React from 'react';
import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { getVideogames, filteredVideogamesByGenres, filteredByOrigin, orderByName, orderByRating} from '../../redux/actions/actions';
import { Link } from 'react-router-dom'
import Card from '../CARD/Card';
import Paginado from '../PAGINADO/Paginado';
import SearchBar from '../SEARCHBAR/Searchbar';
import Footer from '../FOOTER/Footer';
import Header from '../HEADER/Header'
import styles from '../HOME/Home.module.css'



export default function Home()  {

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)  //es como el mapStatetoProps

  
    //PAGINADO: 
    //defino estados locales que me muestren cuántas CARDS quiero por página: mi ReadMe pide 15 cards
    const [currentPage, setCurrentPage]   = useState(1) 
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)

    const indexOfLastVideogame = currentPage * videogamesPerPage  //al principio será 15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage  //al principio será 0
    
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame) //slice agarra un arreglo y me toma la porción que yo quiero: el indice del primer videogame y el del ultimo. 

    const[loading, setLoading] = useState(true);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getVideogames());
        setLoading(false)
    }, []);


    function handleClick(event){ //Handle que me muestra ALL VIDEOGAMES
        event.preventDefault(); //ponerlo para que no se nos recargue la página por el useEffect! 
        dispatch(getVideogames());
    }
    
    function handleFilteredGenre(event){ //Handle del filtrado by GENRES
        dispatch(filteredVideogamesByGenres(event.target.value));
    }
    
    function handleFilteredByOrigin(event){ //Handle del filtrado by ORIGIN
        dispatch(filteredByOrigin(event.target.value))
    }

    const [orden, setOrden] = useState('')
    function handleSortByName(event){  //Handle del ordenamiento Asc y Desc
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1); //necesito setear la página en la primera
        setOrden(`Order ${event.target.value}`) 
        //esto lo necesito para poder hacer el ordenamiento, un estado que setee mi cambio. Mi estado local arranca vacío y cuando lo cambio lo seteo de esta forma. 
    }

    const [ratingchange, setRatingchange] = useState('');
    function handlerByRating(e) {             //handleByRating
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);   
                          
        setRatingchange(e.target.value); 
        setOrden("Order" + e.target.value); 
    }


    const [sortedByRating, setSortedByRating] = useState([]);
    useEffect(() => {
        const sortedVideogames = allVideogames.slice().sort((a, b) => b.rating - a.rating);
        setSortedByRating(sortedVideogames);
      }, [allVideogames]);
      



    return (
      <div className={styles.fondo}>

        <Header />

        <div className={styles.logo}>
          <Link to='/'>
          <img src="logoPIGAMES.png" alt="" width='500px'  />
          </Link>
        </div>

        <div className={styles.searchandorder}> {/* RENDERIZACION SEARCH BAR */}
         
          <div> {/* FILTROS Y ORDENAMIENTO  */} 
                            
             <div className={styles.selectContainer}>
              <select className={styles.selectContainerDropdown} onChange={event => handleSortByName(event)}>
                <option  className={styles.selectContainerDropdownoption} value=''>Name ▼</option>
                <option className={styles.selectContainerDropdownoption} value='asc'>A-Z</option>
                <option className={styles.selectContainerDropdownoption} value='desc'>Z-A</option>
              </select>

                               
              <select  className={styles.selectContainerDropdown} onChange={event => handleFilteredByOrigin(event)}> {/* filtrar por origen: api o bbd  */}
								<option  value=''>CREATOR ▼</option>
								<option value='all'>All</option>
								<option value='database'>Created by you</option>
								<option value='Api'>Our DataBase</option>
              </select>  

          		<select  className={styles.selectContainerDropdown} onChange={event => handlerByRating(event)}>  {/* filtrar por rating */}
              	<option  value=''>RATING ▼</option>
              	<option value='asc'>lower</option>
              	<option value='desc'>Higher</option>
          		</select>

          		<select  className={styles.selectContainerDropdown} onChange={event => handleFilteredGenre(event)}> {/* filtrar por género  */}
              	<option   value=''>GENRE ▼</option>
              	<option value='All'>All Genres</option>
              	<option value='Action'>Action</option>
              	<option value='Indie'>Indie</option>
              	<option value='Adventure'>Adventure</option>
              	<option value='RPG'>RPG</option>
              	<option value='Strategy'>Strategy</option>
              	<option value='Shooter'>Shooter</option>
              	<option value='Casual'>Casual</option>
              	<option value='Simulation'>Simulation</option>
              	<option value='Puzzle'>Puzzle</option>
              	<option value='Arcade'>Arcade</option>
              	<option value='Platformer'>Platformer</option>
              	<option value='Racing'>Racing</option>
              	<option value='Massively Multiplayer'>Massively Multiplayer</option>
              	<option value='Sports'>Sports</option>
              	<option value='Fighting'>Fighting</option>
              	<option value='Family'>Family</option>
              	<option value='Board Games'>Board Games</option>
              	<option value='Educational'>Educational</option>
              	<option value='Card'>Card</option>                    
          		</select>                           
  					 </div>
					</div>   
                    <Link to='/videogame'> 
                    <button className={styles.buttonCreate}>Add new Videogame</button>
                    </Link>
                  
                    <button className={styles.buttonAll} onClick={event => handleClick(event)}>All Videogames</button>
                 
                    <SearchBar   />

        </div>       

        <div className={styles.blackbackground}>                         
          <div className={styles.tarjetas}> {/* RENDERIZADO DE LA CARD  */}         
          	{  
					currentVideogames?.map ((element) => {
                    return (
                        <Card name={element.name} image = {element.image} genres= {element.genres} key ={element.id} id = {element.id}/>
                    )                
                })            
            }
          </div>

          <div className={styles.selectorPaginas}> {/* RENDERIZACION PAGINADO */}            
            <Paginado 
              videogamesPerPage = {videogamesPerPage}
              allVideogames = {allVideogames.length}
              paginado = {paginado} 
              currentPage= {currentPage}
              setCurrentPage = {setCurrentPage}                
            />        
          </div>
				</div>
        <div className={styles.footer}>
          <Footer />

        </div>

      </div>
    )};