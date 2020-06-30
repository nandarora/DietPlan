const mongoose= require('mongoose');
const Schema= mongoose.Schema;

var LunchSchema= new Schema({
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
    collection: 'lunch'
}
)

module.exports= Lunch =mongoose.model('lunch', LunchSchema);
