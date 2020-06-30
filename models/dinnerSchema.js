const mongoose= require('mongoose');
const Schema= mongoose.Schema;

var DinnerSchema= new Schema({
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
    collection: 'dinner'
}
)

module.exports= Dinner =mongoose.model('dinner', DinnerSchema);
