const router = require('express').Router()
const db = require('../../config/connection')


//"/api/reviews"
router.get('/', (req, res) => {

    const query = 'SELECT * FROM reviews;'

    db.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });

});

router.delete('/:id', (req,res)=>{
    
    const query = 'DELETE FROM reviews WHERE id=?';

    db.query(query, req.params.id, (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
});


module.exports = router;