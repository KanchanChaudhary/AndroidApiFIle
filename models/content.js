const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    contenttype: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
})



const content = mongoose.model('content', contentSchema);
module.exports = content;