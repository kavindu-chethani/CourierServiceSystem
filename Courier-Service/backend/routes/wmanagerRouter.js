const routerW = require("express").Router(); //import router function in express package
let WManager  = require("../models/WManager"); //import wmanager model



//ADD WMANAGER-Insertion route(http://localhost:8080/wmanager/add)
routerW.route("/add").post((req,res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const wm_id = req.body.wm_id;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const contact = Number(req.body.contact);
    const address = req.body.address;
    const district = req.body.district;

    const newWManager = new WManager({
       wm_id, 
       fullname,
       email,
       contact,
       address,
       district
    })

    //pass the variables to database
    newWManager.save().then(() => {
        res.json("WManager added succecfull")
    }) .catch((err) => {
        console.log(err); //catch errors
    })
})


//DATA RETREIVE
//GET WMANAGER DETAILS (http://localhost:8080/wmanager/)
routerW.route("/").get((req,res) =>{

    const{q} = req.query;

    const keys = ["fullname","email","district"];

    const search = (wmanagers) =>{
        return wmanagers.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    WManager.find().then((wmanagers) =>{
        res.json(search(wmanagers)) //pass data from db to frontend
    }).catch((err) =>{
        console.log(err) //display errors
    })

})


//UPDATE WMANAGER (http://localhost:8080/wmanager/update/<userID>)
routerW.route("/update/:id").put(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId = req.params.id; //fetch the id parameter in url
    const {wm_id,fullname, email, contact, address, district} = req.body; //fetch data from frontend

    const updateWManager = { //create update object and pass values getting from frontend
        wm_id,
        fullname,
        email,
        contact,
        address,
        district
    }

    const update = await WManager.findByIdAndUpdate(userId, updateWManager) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then(() => {
        res.status(200).send({status : "user updated"}) //if update success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"}); //if not display error message
    })

})


//DELETE WMANAGER (http://localhost:8080/wmanager/delete/:id)

routerW.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let userId = req.params.id; // assign userid to variable

    /*(/^[0-9a-fA-F]{24}$/)*/
        await WManager.findByIdAndDelete(userId) //delete data that related to userId
            .then(() => {
                res.status(200).send({status: "user deleted"}); //display user deleted successfull
            }).catch((err) => {
                console.log(err.message)
            res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
            })
    
})



//GET ONE wmanager By ID (http://localhost:8080/wmanager/get/<userID>)

routerW.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId = req.params.id; //fetch the id parameter in url

    const wman = await WManager.findById(userId) //pass two parameters(userid,object that store wmanager data) and find user by id and update relevent data
    .then((wmanager) => {
        res.status(200).send({status : "package fetched", wmanager}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})

module.exports = routerW;


