const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const PaySchema = new Schema({
    empname : {
        type: String,
        required: true,
    },
    user_roll:{
        type: String,
        required: true,
    },
    basicsal : {
        type: Number,
        required: true,
    },
    overtime : {
        type: Number,
        required: true,
    },
    rphours : {
        type: Number,
        required: true,
    },
    bonus : {
        type: Number,
        required: true,
    },
    allowance : {
        type: Number,
        required: true,
    },
    loans : {
        type: Number,
        required: true,
    },
    employeeepf :{
        type: Number,
        required: true,
    },
    employeerepf:{
        type: Number,
        required: true,
    },
    employeeretf:{
        type: Number,
        required: true,
    },
    totsal:{
        type: Number,
        required: true,
    }
    
})

const emppayment = mongoose.model("emppayment", PaySchema); // passing two parameters, tablename(document) & schemaname

module.exports = emppayment; //export employee