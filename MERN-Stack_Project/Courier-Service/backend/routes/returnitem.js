const router=require("express").Router();
const { findById, findByIdAndDelete, findByIdAndUpdate } = require("../models/Returnitem");
let Returnitem = require("../models/Returnitem");
//it20644130
router.route("/add").post((req,res)=>{

    const returnitemid=req.body.returnitemid;
    const sellerid=req.body.sellerid;
    const sellername=req.body.sellername;
    const sellercontatnumber=req.body.sellercontatnumber;
    const customername=req.body.customername;
    const customercontactnumber=req.body.customercontactnumber;
    const reason =req.body.reason;

    const newReturnitem=new Returnitem({

        returnitemid,
        sellerid,
        sellername,
        sellercontatnumber,
        customername,
        customercontactnumber,
        reason

    })
  newReturnitem.save().then(()=>{
      res.json("Returnitem Added")
  }).catch((err)=>{
console.log(err);
  })


})

router.route("/").get((req,res)=>{

Returnitem.find().then((returnitem)=>{
    res.json(returnitem)
}).catch((err)=>{
    console.log(err)
})

})


router.route("/search/:data").get((req, res) => {
    let q = req.params.data;
    
    const keys = ["returnitemid", "sellername","customername"]
    const search = (returnitem) => {
         return returnitem.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase())))
    }
    Returnitem.find().then((returnitem) => {
        
        res.json(search(returnitem))
    }).catch((err) => {
        console.log(err)
    })

})


router.route("/update/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {returnitemid,sellerid,sellername,sellercontatnumber,customername,customercontactnumber,reason}=req.body;

    const updateReturnItemDetails={

        returnitemid,
        sellerid,
        sellername,
        sellercontatnumber,
        customername,
        customercontactnumber,
        reason

    }

    const update=await Returnitem.findByIdAndUpdate(userId,updateReturnItemDetails).then(()=>{

    res.status(200).send({status:"Details Updated"})
    }).catch((err)=>{
        console.log(err.message);
res.status(500).send({status:"error updatind data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
let userId=req.params.id;

await Returnitem.findByIdAndDelete(userId).then(()=>{
res.status(200).send({status:"user deleted"});
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"error delete user",error:err.message});
})
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
  const user=  await Returnitem.findById(userId).then((returnitems)=>{
        res.status(200).send({status:"user feched",user:returnitems})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error get user",error:err.message});
    })
})

module.exports=router;