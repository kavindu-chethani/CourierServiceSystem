const router = require ("express").Router();
let Payment = require("../models/payment");

http://localhost:8080/payment/add

router.route("/add").post((req,res)=>{


    const nameoncard = req.body.nameoncard;
    const cardno = req.body.cardno;
    const securitycode= req.body.securitycode;
    const postalcode= req.body.postalcode;

    const newPayment = new Payment({

        nameoncard,
        cardno,
        securitycode,
        postalcode
    });


    newPayment.save().then(()=>{
        
        res.json ("Payment Successfull")

    }).catch ((err)=>{
        
        console.log(err);

    });
});   


http://Localhost:8080/order/update/

router.route ("/update/:id").put(async(req,res)=>{

    let userId=req.params.id;
    const{sellername,customername,shipto}=req.body;

    const updateorder={
        sellername,
        customername,
        shipto,

    }

    const update =await ondragover.findByIdAndUpdate(userId,updateorder)
    .then(()=>{

        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data", err:err.message});

    })
})


module.exports = router;