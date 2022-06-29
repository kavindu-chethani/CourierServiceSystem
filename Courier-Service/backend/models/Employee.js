const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const empSchema = new Schema({

    empname : {
        type: String,
        required: true,
    },
    nic : {
        type: String,
        required: true,
    },
    dob : {
        type: Date,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    contact_no : {
        type: Number,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    user_roll:{
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    }
})

const employee = mongoose.model("Employee", empSchema); // passing two parameters, tablename(document) & schemaname

module.exports = employee; //export employee


