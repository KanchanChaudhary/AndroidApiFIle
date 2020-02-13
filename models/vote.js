const mongoose = require('mongoose');
const voteSchema = new mongoose.Schema({
    partyname: {
        type: String,
        required: true
    },
    candidate: {
        type: String,
        required: true
    },
    
    candidateId: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('vote', voteSchema);