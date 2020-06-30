const http= require('http');
const express= require('express');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const cors= require('cors');
const db= require('./config/mongokey')
const breakfast= require('./routes/api/breakfast');
const lunch= require('./routes/api/lunch');
const dinner= require('./routes/api/dinner');
const userRoute= require('./routes/users');
const path=require('path');

mongoose.connect(db.mongodb)
.then(function(){console.log('mongodb connected...')})
.catch(function(err){console.log(err);})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const app=express();
app.use(cors());
app.use(bodyParser.json());

  

app.use('/breakfast', breakfast);
app.use('/lunch', lunch);
app.use('/dinner', dinner);
app.use('/users', userRoute)
 

const port= process.env.port || 4000;

http.createServer(app).listen(port, function(){console.log('Server in Action...')})

