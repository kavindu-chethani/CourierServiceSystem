const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const wmanagerSchema = new Schema({  //assign values to schema

    wm_id : {
        type : String,
        required: true
    },
    fullname : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    contact : {
        type : Number,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    district : {
        type : String,
        required: true
    },

})

const WManager = mongoose.model("WManager", wmanagerSchema); // passing two modelname & schemaname

module.exports = WManager; //export wManager

