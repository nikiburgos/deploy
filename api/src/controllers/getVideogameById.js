const axios = require ('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY } = process.env


// ---------------------- Para traer el videojuego que coincida con el id pasado ---------------------

const getApiInfoById = async function(id) {

    try {
        const urlData = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const gamesData = {
            id: urlData.data.id,
            name: urlData.data.name,
            description: urlData.data.description_raw,
            image: urlData.data.background_image,
            released: urlData.data.released,
            rating: urlData.data.rating,
            platforms: urlData.data.platforms.map(p => p.platform.name).join(', '),
            genres: urlData.data.genres.map(g => g.name).join(', ')
        }

        return gamesData;

    } catch(error) {
        return null;
    }
}


const getDbInfoById = async function(id) {

    try {
        let dbInfo = await Videogame.findOne({
            where: {
                id: id
            },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });

        dbInfo = JSON.parse(JSON.stringify(dbInfo));
        dbInfo.genres = dbInfo.genres.map(g => g.name);
               
        return dbInfo;

    } catch(error) {
        return null;
    }
}



const getAllVideogamesById = async function(id) {

    if (isNaN(id)) {
        const dbInfoById = await getDbInfoById(id);
        return dbInfoById;
    } else {
        const apiInfoById = await getApiInfoById(id);
        return apiInfoById;
    }
}

module.exports = {
    getAllVideogamesById
}
