const express = require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const users = require('./routes/api/users');
const form=require('./routes/api/form');
const app = express();
const path =require('path');


//Body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//db Config
const db=require('./config/keys').mongoURI;


//conect to Mongodb
mongoose
 .connect(db)
 .then(() => console.log('MongoDB connected')
 )
 .catch( err => console.log(err))

// app.use('/', (req,res) =>{
//     res.send("Hello");
// })

//Use Routers to route
app.use('/api/users',users);

app.use('/api/form',form);

//Server satic assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))

    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);