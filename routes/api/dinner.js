const express=require('express');
const router=express.Router();
const dinnerdishes  = require('../../models/dinnerSchema')


router.get('/', function(req, res){
    dinnerdishes.find().then(function(i){res.json(i)})
});



router.post('/',function(req,res){
    const newDinnerDish= new dinnerdishes({
        title: req.body.title,
        b: req.body.b
    });
    newDinnerDish.save().then(function(i){res.json(i)});

})

router.delete('/:id',function(req,res){
    dinnerdishes.findById(req.params.id).then(function(i){i.remove().then(function(){res.json({success: true})})})
})

module.exports= router;