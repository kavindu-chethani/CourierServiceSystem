const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const distributionSchema=new Schema({

    //back end validation
    PackageId:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    District:{
        type: String,
        required: true
    },
Warehouse:{
    type: String,
    required: true
},

})
const Distribution = mongoose.model("Distribution",distributionSchema);

module.exports=Distribution;