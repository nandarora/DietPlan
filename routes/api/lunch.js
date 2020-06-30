const express=require('express');
const router=express.Router();
const lunchdishes  = require('../../models/lunchSchema')


router.get('/', function(req, res){
    lunchdishes.find().then(function(i){res.json(i)})
});



router.post('/',function(req,res){
    const newLunchDish= new lunchdishes({
        title: req.body.title,
        b: req.body.b
    });
    newLunchDish.save().then(function(i){res.json(i)});

})

router.delete('/:id',function(req,res){
    lunchdishes.findById(req.params.id).then(function(i){i.remove().then(function(){res.json({success: true})})})
})

module.exports= router;