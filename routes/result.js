const express = require('express');
const router = express.Router();
const result = require('../models/result');
const auth = require('./auth');

router.route('/')
    .get((req, res, next) => {
        result.find()
            .then((result) => {
                res.json(result);
            }).catch((err) => next(err));
    })

    .post((req, res, next) => {
        let resultadd = new result({
            partyname: req.body.partyname,
            candidateId: req.body.candidateId,
            image: req.body.image,
            candidate: req.body.candidate
        })

        resultadd.save().then(function () {
            res.json({
                message: 'Added'
            })
        }).catch(next)


    })

router.post('/getbyid', (req, res, next) => {

    result.find({
        candidateId: req.body.candidateId
    }).then(function (result) {
        res.json(result)
    }).catch(next)
})

//all event
// router.get('/all', (req, res, next) => {
//     result.find()
//         .then((result) => {
//             res.json(result);
//         }).catch(next);
// })


router.get('/all', (req, res, next) => {
    result.find().then(function(votes){
        console.log(votes)
        res.json(votes)
    }).catch(next)
})


module.exports = router;






