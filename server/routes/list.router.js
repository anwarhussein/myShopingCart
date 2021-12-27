const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) =>{
    const queryText = "select * from groceries";
    pool.query( queryText).then((result) =>{
        res.send(result.rows);
    }).catch((error) =>{
        console.log("error in gettin groceries", error)
    })
})

router.post('/', (req, res) =>{
    console.log(req.body)
    const queryText = `INSERT INTO groceries (name, quantity, unit)
    VALUES ($1, $2, $3)`;
    pool.query(queryText, [req.body.itemName,req.body.quantity, req.body.units])
    .then((result) =>{
        res.sendStatus(201);
    }).catch((error) =>{
        console.log("error adding an item", error)
    })
})

module.exports = router;