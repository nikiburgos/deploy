const { Videogame, Genre } = require('../db.js');
const { Op } = require('sequelize');
const { getApiInfoGenres } = require('./getAllgenres');
require('dotenv').config();

const createVideogame = async (
  name,
  description,
  released,
  rating,
  platforms,
  image,
  createdInDb,
  genres
) => {
  try {
    const responseDb = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, //esto buscar bien porque no entendí para qué ponerlo así!!! 
        },
      },
    });

    if (responseDb.length) {
      return 'There is already a videogame with this name'; //fijarse si esto vuelve, porq no comprobé
    }

    // Verifica que la tabla de géneros esté cargada, sino la crea:
    const genresCount = await Genre.count();
    if (genresCount === 0) {
      await getApiInfoGenres();
    }

    // Acá busca los géneros y los asocia al videojuego.
    const genresEncontrados = await Promise.all(
      genres.map(async (genre) => {
        const genreEncontrado = await Genre.findOne({
          where: { name: genre },
        });

        if (!genreEncontrado) {
          throw new Error(`El género ${genre} no existe`);
        }

        return genreEncontrado;
      })
    );

    // Acá crea un nuevo videogame con todo lo que le dije que haga :) que felicidattttttt

    const newVideogame = await Videogame.create({ 
      name: name,
      description: description,
      released: released,
      rating: rating,
      platforms: platforms,
      image: image,
      createdInDb: createdInDb,
    });

    await newVideogame.addGenres(genresEncontrados);

    return newVideogame; //NO OLVIDARSE EL RETURNNNN POR EL AMOR DE DIOS, QUE SIEMPRE ME PASA
    
  } catch (error) {
    return error.message;
  }
};

module.exports = { createVideogame };
