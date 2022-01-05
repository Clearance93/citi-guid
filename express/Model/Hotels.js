
var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true,
    },
    Reviews: String,
    Statement: {
        type: String,
        required: true
    }, 
    Directions: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        date: Date.now()
    }
})

module.exports = mongoose.model('Hotel', HotelSchema)