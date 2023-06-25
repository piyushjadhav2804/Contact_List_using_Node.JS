const mongoose = require('mongoose');

//create Schema of contact_list_db database
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    }
});

//collection name
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;