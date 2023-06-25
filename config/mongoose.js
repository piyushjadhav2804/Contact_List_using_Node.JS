//require the mongoose library
const mongoose = require('mongoose');    

//connect to database using mongoose
mongoose.connect('mongodb://127.0.0.1/contact_list_db');

//acquire the connection with db  
const db = mongoose.connection;

//check if connection is successfull or raising an error
db.on('error', console.error.bind(console, 'error connecting to db'));

//print msg on console if running
db.once('open', function() {
    console.log("Successfully connected to the database");
});