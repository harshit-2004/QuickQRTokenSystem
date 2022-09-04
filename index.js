const express = require('express');
const router = require('./routes');
const { route } = require('./routes');
const app = express();
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');

const port = 8000;

app.use(cookieParser());
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');
// We have to use this else ejs never gets the stylesheets!
// app.use(expressLayouts());
app.set('layout extractstyles',true);
app.set('layout extractScripts',true);

app.use(express.static('assets'));

//Use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        // console.log("Error",err);
        //Interpolation
        console.log(`Error in running the server : ${err}`);
    }
    else{
        console.log(`Server is up and running at port ${port}`);
    }
});