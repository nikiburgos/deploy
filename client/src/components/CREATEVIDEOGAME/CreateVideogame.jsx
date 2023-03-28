import React from "react";
import {  useHistory } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getGenres, postVideogame } from "../../redux/actions/actions";
import styles from "../CREATEVIDEOGAME/CreateVideogame.module.css"
import Footer from "../FOOTER/Footer"
import Header from "../HEADER/Header"


function validation(input){
  let errors = {};
  const urlRegex = /(ftp|http|https):\/\/[^ "]+/;
  
  if (!input.name || /^\s*$/.test(input.name)){
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z0-9\s]*$/.test(input.name)){
    errors.name = "Name must contain only letters or numbers";
  }

  if (!input.description || input.description.trim().length === 0){
    errors.description = 'Description is required'
  }
  
  if (!input.released || input.released.trim().length === 0){
    errors.released = 'Release date is required';
  }
  
  if (!input.image || input.image.trim().length === 0){
    errors.image = 'Image is required' //controlar tmb q sea una url ! 
  } else if (!urlRegex.test(input.image)){
    errors.image = 'Image must be a valid URL'
  }

  if (!input.platforms || input.platforms.length === 0){
    errors.platforms = 'Must select at least one platform'
  }

  if (!input.genres || input.genres.length === 0){
    errors.genres = 'Must select at least one genre'
  }

  if (input.rating === undefined || input.rating === null || isNaN(input.rating)){
    errors.rating = 'Rating must be a number between 0 and 5';
  } else if (input.rating < 0 || input.rating > 5) {
    errors.rating = 'Rating must be a number between 0 and 5'; 
  }
  
  return errors;
}




export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)
    const history = useHistory(); 


    const platformsApi = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox",
        "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux", "Nintendo Switch"]

    const [input, setInput] = useState({
         name: '',
         description: '',
         released: '',
         rating: '',
         platforms: [],
         image: '',
         genres: []      
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch (getGenres());
    }, [])


    function handleChange(event){ 
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        setErrors(validation({
          ...input,
          [event.target.name]: event.target.value
        }))
    }

    function handleCheck(event){
        if(event.target.checked){
          setInput(prevState => ({
            ...prevState,
            platforms: [...prevState.platforms, event.target.value]
          }))
        } else {
          setInput(prevState => ({
            ...prevState,
            platforms: prevState.platforms.filter(platform => platform !== event.target.value)
          }))
        }
      }
      

    function handleSelect(event){
        setInput({
            ...input,
            genres: [...input.genres, event.target.value]
        })
    }

    function handleRemoveGenre(genreName){
        setInput(prevState => ({
          ...prevState,
          genres: prevState.genres.filter(genre => genre !== genreName)
        }))
      }
      
      function handleSubmit(event) {
        event.preventDefault();
      
        if (Object.keys(errors).length > 0) {
          alert('Please fix the errors before submitting the form');
          return;
        }
      
        dispatch(postVideogame(input)).then((response) => {
          console.log(response);
        });
      
        alert('The videogame has been uploaded successfully');
        setInput({
          name: '',
          description: '',
          released: '',
          rating: '',
          platforms: [],
          image: '',
          genres: []
        });
      
        history.push('/home');
      }
      
  
  
    
    return (
        <div >

        <Header /> 

      <div className={styles.divPrincipal}>

      <h2 className={styles.title}>Upload a new videogame</h2>
          
        <div className={styles.otrodiv} >
        <form onSubmit={event => handleSubmit(event)} className={styles.container}> 
      
            <div >
                {/* NAME */}
              <div>
              
              <input className={styles.input} type="text" value={input.name} onChange={event => handleChange(event)} name='name' placeholder="NAME"/>
              {errors.name && (<p className={styles.error}>{errors.name}</p>)}
              </div>

                {/* DESCRIPTION */}
              <div className={styles.separado}>
              <input className={styles.input} type="text" value={input.description} onChange={event => handleChange(event)}name='description'  
              placeholder="DESCRIPTION"/>
              {errors.description && (<p className={styles.error}>{errors.description}</p>)}
              </div>

                {/* RELEASE DATE */}
              <div className={styles.separado}>
              
              <input className={styles.input} type="date" value={input.released} onChange={event => handleChange(event)} name='released'
              placeholder="RELEASE DATE" />
              {errors.released && (<p className={styles.error}>{errors.released}</p>)}
              </div>
      
                {/* RATING */}
              <div className={styles.separado}>
              
              <input className={styles.input} type="number" value={input.rating} onChange={event => handleChange(event)}name='rating' 
              placeholder="RATING"
              />
              {errors.rating && (<p className={styles.error}>{errors.rating}</p>)}

              </div>
      
                {/* PLATFORMS */}
              <div className={styles.platforms}>
              {/* <label className={styles.text}>Platforms: <br/></label> */}
                 <div className={styles.fondoPlataformas}   id="checkbox-container">
                {platformsApi.map((option) => (
                  <label  key={option}>
                    <input  type="checkbox" name="platform" value={option} onChange={handleCheck} />
                    {option}
                  </label> 
                ))} 
                {errors.platform && (<p className={styles.error}>{errors.platform}</p>)}
                 </div>
              </div>
      

             
                {/* GENRES */}
              <div className={styles.separado}>
              <label className={styles.text}>Genres:</label>
              <select onChange={handleSelect} className={styles.genres} >
              { genres && genres.map(g => (
              <option key={g.id} value={g.name}>{g.name}</option>
              ))
              }
              </select>
              
               <ul>
                {input.genres.map((genreName, index) => (
                <li className={styles.genresselection} key={index}>{genreName}{' '}
                <button type="button" onClick={() => handleRemoveGenre(genreName)}>x</button>
                </li>
                 ))}
              </ul>
              {errors.genres && (<p className={styles.error}>{errors.genres}</p>)}
              </div>

             {/* IMAGE */}
              <div className={styles.separado}>
              
              <input className={styles.input} type="text" value={input.image} onChange={event => handleChange(event)} name='image' 
              placeholder="IMAGE URL"/>
              {errors.image && (<p className={styles.error}>{errors.image}</p>)}
              </div>
                    
            </div>
          
          <button  className={styles.buttonUpload} type="submit">Upload Videogame</button>

          </form>
          </div>
          </div>

          <div className={styles.margin}>
            <Footer />
          </div>

        </div>
      );

}