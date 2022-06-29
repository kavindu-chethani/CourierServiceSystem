const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const packageSchema = new Schema({  //assign values to schema

    cusFirstName: {
        type: String,
        required: true,
    },
    cusLastName: {
        type: String,
        required: true,
    },
    cusEmail: {
        type: String,
        required: true,
    },
    cusAddress: {
        type: String,
        required: true,
    },
    cusConNumber: {
        type: Number,
        required: true,
    },



    
    pacLocation: {
        type: String,
        required: true,
    },
    pacType: {
        type: String,
        required: true,
    },
    pacEsstimatedDate: {
        type: String,
        required: true,
    },
    pacWeight: {
        type: Number,
        required: true,
    },



    shopName: {
        type: String,
        required: true,
    },
    shopPickUpDate: {
        type: String,
        required: true,
    },
    shopAddress: {
        type: String,
        required: true,
    },
    shopConNumber: {
        type: Number,
        required: true,
    },



    dvName: {
        type: String,
        required: true,
    },
    dvVehicalNumber: {
        type: String,
        required: true,
    },
    dvNIC: {
        type: String,
        required: true,
    }

})

const Package = mongoose.model("Package", packageSchema); // passing two parameters, tablename(document) & schemaname

module.exports = Package; //export Package