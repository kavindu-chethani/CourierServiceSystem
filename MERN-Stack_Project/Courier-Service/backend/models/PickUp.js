const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const pickUpSchema = new mongoose.Schema(
    {
        seller_Id:{
            type: String,
            required: true,
        },
        package_Id:{
            type: String,
            required: true,
        },
       shop_Name:{
            type: String,
            required: true,
        },

        seller_District:{
            type: String,
            required: true,
        },
        seller_Address:{
            type: String,
            required: true,
        },
        contact_no:{
            type: String,
            required: true,
        },
        estimate_date:{
            type: String,
            required: true,
        },

        delivery_member:{
            type: String,
            required: true,
        },




    }
);
module.exports = mongoose.model('PickUp', pickUpSchema);



