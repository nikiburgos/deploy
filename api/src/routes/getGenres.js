const { Router } = require ('express');
const { getApiInfoGenres } = require ('../controllers/getAllgenres');
const router = Router(); 


router.get('/genres', async (req, res) => {
    const genres = await getApiInfoGenres(); //me da la lista de genres creados
    try {
        res.status(200).send(genres); 
    } catch (error) {
        res.status(404).send(error.message); 
    }
})


module.exports = router; 
