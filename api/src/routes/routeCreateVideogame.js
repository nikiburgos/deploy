const { Router } = require ('express');
//const { getAllVideogamesbyId } = require ('../controllers/getVideogameById');
const { Videogame, Genre } = require('../db.js');
const router = Router(); 
const { createVideogame } = require ('../controllers/createVideogame')
require('dotenv').config();

router.post('/videogames', async (req, res) => {
    const { name, description, released, rating, platforms, image, genres, createdInDb } = req.body;

  try {
    if (!name || !description || !platforms ||  !image || !genres) {
      throw Error ('Missing important information');
    } else {
        const newVideogame = await createVideogame(name, description, released, rating, platforms, image, createdInDb, genres);

      res.status(200).json(newVideogame);
    }
    
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;



// router.post('/videogames', async (req, res) => {
//     const { name, description, released, rating, platforms, image, genres, createdInDb } = req.body;

//     let videogameCreated = await Videogame.create({  //hago el post con todo lo que me llega por body, pero el género lo tengo q encontrar en el modelo q tiene todos los generos
//         name, 
//         description,  
//         released, 
//         rating, 
//         platforms, 
//         image, 
//         createdInDb
//     })

//     let genreDB = await Genre.findAll({      //aca hago la relación con genero. 
//         where: {
//             name: genres
//         }
//     })

//     videogameCreated.addGenre(genreDB)
//     res.send('Videogame created succesfully')
// })

// router.post('/videogames', async (req, res) => {
//     const { name, description, released, rating, platforms, image, genres } = req.body;
// try {
    
//     let getDbInfoGenres = await Genre.findAll({
//         where: {
//             name: genres
//         }
//     });
    
//     if(name && description && platforms) {
//         let newVideogame = await Videogame.create({
//             name,
//             description,
//             released,
//             rating,
//             platforms,
//             image
//         })

//         newVideogame.addGenres(getDbInfoGenres);
//         //res.status(200).send("Videogame created successfully");
//         res.status(200).send(newVideogame);
//     }
// } catch (error) {
//     res.status(400).send(error.message)
// }

// })

// module.exports = router 

