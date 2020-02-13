const express= require ('express');
const router=express.Router();
const Vote= require('../models/vote');
const auth=require('./auth');

router.route('/')
.get((req,res,next)=>{
    Vote.find()
    .then((vote)=>{
        res.json(vote);
    }).catch((err)=>next(err));
})

.post((req,res,next)=>{
    Vote.create(req.body)
    .then((vote)=>{
        res.json(vote);
    }).catch(next);
})


//all event
router.get('/all',auth.verifyUser,(req,res,next)=>{
    Vote.find()
    .then((vote)=>{
        res.json(vote);
    }).catch(next);
})

//delete events by admin
// router.delete('/:eventId',auth.verifyUser,auth.verifyAdmin,(req,res,next)=>{
//     Event.findByIdAndDelete(req.params.eventId)
//     .then((vote)=>{
//         res.json({status:'event deleted!',eventId:vote._id});
//     }).catch(next);
// })

module.exports=router;






