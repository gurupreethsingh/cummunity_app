const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message_text: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;