const router = require('express').Router()
const movieRoutes = require('./movies');
const reviewRoutes = require('./reviews');

//"/api"
router.use('/movies', movieRoutes);

router.use('/reviews', reviewRoutes);


module.exports = router;