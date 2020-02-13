const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    citizenshipno: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
    conpassword: {
        type: String,
        required: true
    },
    
    image: {
        type: String
    },
    admin: {
        type: Boolean,
        default: true
    }
    
});

module.exports = mongoose.model('User', userSchema);