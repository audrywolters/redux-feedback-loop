const router = require('express').Router();
const pool = require('../modules/pool');

// save user's feedback
router.post( '/', ( req, res ) => {

    console.log(req.body);
    
    const query = 
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
     VALUES ( $1, $2, $3, $4 )`;

    pool.query( query, 
              [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ] )
    .then( ( result ) => {
        res.sendStatus( 201 );
    }).catch( ( err ) => {
        console.log( '>:| insert went poorly: ' + err );
        res.sendStatus( 500 );
    })
})

module.exports = router;