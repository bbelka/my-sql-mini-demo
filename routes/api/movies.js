const router = require('express').Router()
const db = require('../../config/connection')


//"/api/movies"
router.get('/', (req, res) => {

    const query = 'SELECT * FROM movies;'

    db.query(query, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });

});

router.post('/',(req, res)=> {

    const query = 'INSERT INTO movies (movie_name) VALUES (?)';

        db.query(query, req.body.name ,(err, data) => {
            if (err) {
                res.status(500).json({ error: 'you messed up' });
                return;
            }
            res.json(data);
        });
});

router.put('/:id',(req,res)=>{
    const query = 'UPDATE movies SET movie_name=? WHERE id=?';

    db.query(query,[req.body.name ,req.params.id], (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
})

router.delete('/:id', (req,res)=>{
    
    const query = 'DELETE FROM movies WHERE id=?';

    db.query(query, req.params.id, (err,data)=>{
        if (err) {
            res.status(500).json({ error: 'you messed up' });
            return;
        }
        res.json(data);
    });
});




module.exports = router;