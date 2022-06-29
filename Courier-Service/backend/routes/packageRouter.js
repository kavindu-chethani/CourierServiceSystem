const router = require("express").Router(); //import router function in express package
let Package = require("../models/Package"); //import package model




//POST PACKAGE-Insertion route(http://localhost:8080/package/add)

router.route("/add").post((req,res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const cusFirstName = req.body.cusFirstName;
    const cusLastName = req.body.cusLastName;
    const cusEmail = req.body.cusEmail;
    const cusAddress = req.body.cusAddress;
    const cusConNumber = Number(req.body.cusConNumber);

    const pacLocation = req.body.pacLocation;
    const pacType = req.body.pacType;
    const pacEsstimatedDate = req.body.pacEsstimatedDate;
    const pacWeight = Number(req.body.pacWeight);

    const shopName = req.body.shopName;
    const shopPickUpDate = req.body.shopPickUpDate;
    const shopAddress = req.body.shopAddress;
    const shopConNumber = Number(req.body.shopConNumber);

    const dvName = req.body.dvName;
    const dvVehicalNumber = req.body.dvVehicalNumber;
    const dvNIC = req.body.dvNIC;
    

    const newPackage = new Package({
        cusFirstName,
        cusLastName,
        cusEmail,
        cusAddress,
        cusConNumber,
        pacLocation,
        pacType,
        pacEsstimatedDate,
        pacWeight,
        shopName,
        shopPickUpDate,
        shopAddress,
        shopConNumber,
        dvName,
        dvVehicalNumber,
        dvNIC
    })

    //pass the variables to database
    newPackage.save().then(() => {
        res.json("Package added succecfull")
    }) .catch((err) => {
        console.log(err); //catch errors
    })
})




//GET ALL PACKAGE DETAILS (http://localhost:8080/package/)

router.route("/").get((req,res) =>{

    Package.find().then((packages) =>{
        res.json(packages) //pass data from db to frontend
    }).catch((err) =>{
        console.log(err) //display errors
    })

})





//GET ONE PACKAGE By ID (http://localhost:8080/package/<userID>)

router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let packId = req.params.id; //fetch the id parameter in url

    const pack = await Package.findById(packId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((package) => {
        res.status(200).send({status : "package fetched", package}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})





//UPDATE PACKAGE (http://localhost:8080/package/update/<userID>)

router.route("/update/:id").put(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let packId = req.params.id; //fetch the id parameter in url
    const {cusFirstName, cusLastName, cusEmail, cusAddress, cusConNumber, pacLocation, pacType, pacEsstimatedDate, pacWeight, shopName, shopPickUpDate, shopAddress, shopConNumber, dvName, dvVehicalNumber, dvNIC} = req.body; //fetch data from frontend

    const updatePackage = { //create update object and pass values getting from frontend
        cusFirstName,
        cusLastName,
        cusEmail,
        cusAddress,
        cusConNumber,
        pacLocation,
        pacType,
        pacEsstimatedDate,
        pacWeight,
        shopName,
        shopPickUpDate,
        shopAddress,
        shopConNumber,
        dvName,
        dvVehicalNumber,
        dvNIC
    }

    const update = await Package.findByIdAndUpdate(packId, updatePackage) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then(() => {
        res.status(200).send({status : "Package updated"}) //if update success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"}); //if not display error message
    })

})





//DELETE PACKAGE (http://localhost:8080/package/delete/<userID>)

router.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let packId = req.params.id; // assign userid to variable

    await Package.findByIdAndDelete(packId) //delete data that related to packId
    .then(() => {
        res.status(200).send({status: "Package deleted"}); //display user deleted successfull
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
    })
})


module.exports = router;
