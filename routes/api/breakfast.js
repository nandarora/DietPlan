const express=require('express');
const router=express.Router();
const breakfastdishes  = require('../../models/breakfastSchema')


router.get('/', function(req, res){
    breakfastdishes.find().then(function(i){res.json(i)})
});



router.post('/',function(req,res){
    const newBreakfastDish= new breakfastdishes({
        title: req.body.title,
        b: req.body.b
    });
    newBreakfastDish.save().then(function(i){res.json(i)});

})

router.delete('/:id',function(req,res){
    breakfastdishes.findById(req.params.id).then(function(i){i.remove().then(function(){res.json({success: true})})})
})

module.exports= router;