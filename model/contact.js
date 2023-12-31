const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    dateContact: { type: Date, default: Date.now },
})

const Contact = mongoose.model('Contacts', ContactSchema);

module.exports = Contact;