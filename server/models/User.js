
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        //to initiate the date with the the date of creating the user pass the reference of the function date.now
        default: Date.now
    },
    role: {
        type: String,
        default: "customer"
    }
});

module.exports = mongoose.model('User', userSchema);