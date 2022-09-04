//require library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/snackers');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',function(){console.error.bind("Error connecting to db")});

//up, running, print!
db.once("open",function(){
    console.log("Connected to the database mongoose!");
})