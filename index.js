//libraries required to run the server and perform functionalities

const express = require('express'); 
const path = require('path'); //to link path
const port = 8000;

//to set up the mongo database
const db = require('./config/mongoose');

const Contact = require('./models/contact');

app = express();

//to set view engine template to ejs
app.set('view engine', 'ejs');

//to set path of view directory
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES

app.use(express.urlencoded());

app.use(express.static('assets')); //to set assests as static files directory


var contactList = [

    {
        name: 'Piyush Jadhav',
        phone: 123
    },

    {
        name: 'Ashwini B',
        phone: 456
    },

    {
        name: 'Gokudi',
        phone: 789
    }
];

//CONTROLLERS

//to delete contact
app.get('/delete-contact/', function(req, res){

    //get the id from query in the url

    let id = (req.query.id);

    console.log(id);

    // //find the contact in the database using id and delete it

    // Contact.deleteOne({_id: id}).then(()=>{
    //     return res.redirect('back');
    // }); 

    Contact.findByIdAndDelete(id).then(()=>{
        return res.redirect('back');
    });

});


//get contact list from server
app.get('/', function(req, res) {

    Contact.find({}).then(function(contacts){

        return res.render('home', {
            title: 'Contact List',
            contact_list: contacts
        });
    });

});

//post contact list on server
app.post('/create-contact', (req, res) => {
    
    // console.log(req.body);
    // contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    });

    return res.redirect('back');
});



// to run express server on port 8000
app.listen(port, function(err) {

    if(err) {
        console.log("Error: ",err);
        return;
    }

    console.log("Express server is up and running!!");
});