const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const storeSchema = new mongoose.Schema(
    {
        store_Id:{
            type: String,
            required: true,
        },
        package_Id:{
            type: String,
            required: true,
        },
        delivery_District:{
            type: String,
            required: true,
        },
        weight:{
            type: String,
            required: true,
        },
        date:{
            type: Date,
            required: true,
        },
    }
);
module.exports = mongoose.model('Store',storeSchema);



