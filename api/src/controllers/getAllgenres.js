const { Genre } = require('../db.js');
const axios = require ('axios');
const { API_KEY } = process.env

const getApiInfoGenres = async function() {

    let gamesData = [];

    const urlData = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    urlData.data.results.forEach(v => {
         gamesData.push({
             id: v.id,
             name: v.name,
         })
    })
     
    gamesData.forEach(el => {
        Genre.findOrCreate({
            where: {
                id: el.id,
                name: el.name
            }
        })
   }) 
   return gamesData       
};

module.exports = { getApiInfoGenres }; 