
let express = require ('express');
let router = express.Router();
let Hotel = require('../Model/Hotels');

router.get('/', (req, res) => {
    Hotel.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });   
});

router.post('/', (req, res) => {
    Hotel.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = router;