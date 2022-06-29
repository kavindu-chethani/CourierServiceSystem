const router=require("express").Router();
const Distribution = require("../models/Distribution");
//const { findById, findByIdAndDelete, findByIdAndUpdate } = require("../models/Distribution");
//let Distribution = require("../models/Distribution");

router.route("/add").post((req,res)=>{
const PackageId=req.body.PackageId;
const Date=req.body.Date;
const District=req.body.District;
const Warehouse=req.body.Warehouse

const newDistribution=new Distribution({
    PackageId,
    Date,
    District,
    Warehouse
})
newDistribution.save().then(()=>{
    res.json("Added")
}).catch(()=>{
    console.log(err);
})
})


router.route("/search/:data").get((req, res) => {
    let q = req.params.data;
    
    const keys = ["Warehouse"]
    const search = (distributions) => {
         return distributions.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase())))
    }
    Distribution.find().then((distributions) => {
        
        res.json(search(distributions))
    }).catch((err) => {
        console.log(err)
    })

})


router.route("/").get((req,res)=>{

    Distribution.find().then((distributions)=>{
res.json(distributions)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports=router;