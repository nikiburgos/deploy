const { Router } = require ('express');
const { getAllVideogames, getAllVideogamesByName, getApiInfo, getDbInfo, getApiInfoByName, getDbInfoByName }  = require ('../controllers/getAllVideogames')
const router = Router(); 

router.get('/videogames', async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            let videogamesByName = await getAllVideogamesByName(name);
            
            if(videogamesByName.length <= 0) {
                res.status(404).send("No results");
            } else {
                res.status(200).json(videogamesByName);
            }
    
        } else {
            let videogames = await getAllVideogames();
            res.status(200).send(videogames);
        }
        
    } catch (error) {
            res.status(404).send(error.message)
    }
})

module.exports = router; 