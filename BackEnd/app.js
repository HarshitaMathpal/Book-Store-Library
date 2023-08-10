const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/book-route");
const app = express();
const cors = require('cors');
const path = require('path')


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);                  

//static files
app.use(express.static(path.join(__dirname,'../book-store/build')));


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../book-store/build/index.html'));
});


mongoose.connect("mongodb+srv://mathpalharshita45:harshi04@book-store.ykmpr1n.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to Database"))
    .then(()=> {
        app.listen(5000);
    })
    .catch((err) => console.log(err));