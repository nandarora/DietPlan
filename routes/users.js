const express=require('express');
const router=express.Router();
const User  = require('../models/users')


router.get('/', function(req, res){
    User.find().then(function(i){ 
        const m= i.map(alpha => {return ({_id:alpha._id ,name: alpha.name, emailmail: alpha.email})})
        res.json(m);
    })
});




router.post('/',function(req,res){
    const newUser= new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(function(i){res.json(i)});

})

router.delete('/:id',function(req,res){
User.findById(req.params.id).then(function(i){i.remove().then(function(){res.json({success: true})})})
})

module.exports= router;