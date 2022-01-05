
var mongoose = require('mongoose')

var RegistrationSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },

    Surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    home_address: {
        type: String,
        required: true,
    },

    Username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirm_password: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Registration', RegistrationSchema)