const express= require ('express');
const router=express.Router();
const result= require('../models/result');
const auth=require('./auth');

router.route('/')
.get((req,res,next)=>{
    result.find()
    .then((result)=>{
        res.json(result);
    }).catch((err)=>next(err));
})

.post((req,res,next)=>{
    result.create(req.body)
    .then((result)=>{
        res.json(result);
    }).catch(next);
})


//all event
router.get('/all',auth.verifyUser,(req,res,next)=>{
    result.find()
    .then((result)=>{
        res.json(result);
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






