const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const returnitemSchema=new Schema({

    //back end validation
    returnitemid:{
        type: String,
        required: true
    },
    sellerid:{
        type: String,
        required: true
    },
    sellername:{
        type: String,
        required: true
    },
sellercontatnumber:{
    type: String,
    required: true
},
customername:{
    type: String,
    required: true
},
customercontactnumber:{
    type: String,
    required: true
},
reason:{
    type: String,
    required: true
}


})
const Returnitem = mongoose.model("Returnitem",returnitemSchema);

module.exports=Returnitem;