const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const sellerListSchema = new Schema({  //assign values to schema

    seller_id : {
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
    shop_name : {
        type : String,
        required: true
    },
    shop_address : {
        type : String,
        required: true
    },
    district : {
        type : String,
        required: true
    },

})

const SellerList = mongoose.model("SellerList", sellerListSchema); // passing two modelname & schemaname

module.exports = SellerList; //export sellerlist

