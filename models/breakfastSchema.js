const mongoose= require('mongoose');
const Schema= mongoose.Schema;

var BreakfastSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    b:{
        type: String,
        required: true 
    }   
},
{
    collection: 'breakfast'
}
)

module.exports= Breakfast =mongoose.model('breakfast', BreakfastSchema);
