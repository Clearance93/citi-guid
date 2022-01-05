
let express = require('express');
let router = express.Router();
let Registration = require('../Model/Registration');

router.get('/', (req, res) => {
    Registration.find((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

router.post('/', (req, res) => {
    Registration.create((req.body), (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = router;