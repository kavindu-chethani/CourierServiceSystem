const router = require("express").Router();
const emppayment = require("../models/Payment");


//employee add salary route
router.route("/addempsalary").post((req,res)=>{//get data from frontend via request
    // get request body data and assining them to variables
    const  empname=req.body.empname;
    const  user_roll=req.body.user_roll;
    const  basicsal=Number(req.body.basicsal);
    const  overtime=Number(req.body.overtime);
    const  rphours=Number(req.body.rphours);
    const  bonus=Number(req.body.bonus);
    const  allowance= Number(req.body.allowance);
    const  loans= Number(req.body.loans);
    const  employeeepf= Number(req.body.employeeepf);
    const  employeerepf= Number(req.body.employeerepf);
    const  employeeretf= Number(req.body.employeeretf);
    const  totsal= Number(req.body.totsal);

    const empSalary = new emppayment({
            empname,
            user_roll,
            basicsal,
            overtime,
            rphours,
            bonus,
            allowance,
            loans,
            employeeepf,
            employeerepf,
            employeeretf,
            totsal
    })
    //exception handling using then
    //pass the variables to database
    empSalary.save().then(()=>{
        res.json("Employee salary save succesfully")
    }).catch((err)=>{
        console.log("err");
    })
})


router.route("/getempsal/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let salId = req.params.id; //fetch the id parameter in url

    const sal = await emppayment.findById(salId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((emppayment) => {
        res.status(200).send({status : "package fetched", emppayment}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})


module.exports = router;
