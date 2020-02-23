const express = require('express');
const router = express.Router();
const Vote = require('../models/vote');
const auth = require('./auth');
const path = require('path');
const multer = require('multer')

var ImagefileName = '';
var storage = multer.diskStorage({
    destination: 'asset/uploads/images/candiate',
    filename: function (req, file, callback) {
        const extension = path.extname(file.originalname);
        ImagefileName = file.fieldname + Date.now() + extension;
        callback(null, ImagefileName);

    }
});


var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: 10000000
    }
});

router.route('/')
    .get((req, res, next) => {
        Vote.find()
            .then((vote) => {
                res.json(vote);
            }).catch((err) => next(err));
    })

    .post(upload.single('image'), (req, res) => {
        let vote = {
            'candidate': req.body.candidate,
            'partyname': req.body.partyname,
            'image': ImagefileName
        }
        Vote.create(vote)
            .then(() => {
                res.json({
                    message:'Vote added'
                });
            }).catch();
    })


//all event
router.get('/all',  (req, res) => {
    Vote.find()
        .then((vote) => {
            res.json(vote);
        }).catch();
})

//delete events by admin
// router.delete('/:eventId',auth.verifyUser,auth.verifyAdmin,(req,res,next)=>{
//     Event.findByIdAndDelete(req.params.eventId)
//     .then((vote)=>{
//         res.json({status:'event deleted!',eventId:vote._id});
//     }).catch(next);
// })

module.exports = router;






