const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    image: [imageSchema],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('image', imageSchema);