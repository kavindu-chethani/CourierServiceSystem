const router = require("express").Router();
let employee = require("../models/Employee");


//employee add route
router.route("/addemp").post((req,res)=>{//get data from frontend via request

    // get request body data and assining them to variables

    const  empname=req.body.empname;
    const  nic=req.body.nic;
    const  dob=req.body.dob;
    const  address=req.body.address;
    const  contact_no= Number(req.body.contact_no);
    const  email=req.body.email;
    const  user_roll=req.body.user_roll;
    const  username=req.body.username;
    const  password=req.body.password; 
    const  conpass=req.body.conpass;

    const newEmployee = new employee({

        empname,
        nic,
        dob,
        address,
        contact_no,
        email,
        user_roll,
        username,
        password, 
        conpass
    })

    //exception handling using then
    //pass the variables to database
    newEmployee.save().then(()=>{
        res.json("Employee save succesfully")
    }).catch((err)=>{
        console.log("err");
    })
})


//employee details view
router.route("/viewEmp").get((req,res)=>{

    const{q} = req.query;

    const keys = ["empname","email","nic"];
    

    const search = (emp) =>{
        return emp.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    employee.find().then((emp)=>{ //emp:- arrow funtion
        res.json(search(emp)) //pass data from db to frontend
    }).catch((err)=>{
        console.log(err)
    })
})




//employee details update
//async is promis ekak iwra unama thwa ekak 
//params is parameeter
router.route("/updateEmp/:id").put(async(req,res)=>{
    let empID = req.params.id;
    // Destructure
    const {empname,nic, dob, address,contact_no,email,user_roll, username,password} = req.body;

    const updateEmp = {
        empname,
        nic,
        dob,
        address,
        contact_no,
        email,
        user_roll,
        username,
        password, 
        
    }

    //first para user id
    //secn para update kranna ona object ekaa
    //async 
    const update = await employee.findByIdAndUpdate(empID,updateEmp)
    .then(()=>{
        res.status(200).send({Status:"User Update"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with update data", error: err.message});
    })

})

//Employee Delete
router.route("/deleteEmp/:id").delete(async(req,res)=>{
   let empId = req.params.id;
   await employee.findByIdAndDelete(empId).then(()=>{
       res.status(200).send({status:"user deleted"})
   }).catch((err)=>{
       res.status(500).send({status:"Error with delete user",error:err.message});
   })
})

//get one employee data
router.route("/getEmp/:id").get(async(req,res)=>{ let empId = req.params.id; 
    const emp =  await employee.findById(empId)
  .then((employee)=>{
        res.status(200).send({status:"user selected",employee})
    }).catch((err)=>{
        res.status(500).send({status:"Error with user selected", error:err.message});
    })
})

module.exports = router;