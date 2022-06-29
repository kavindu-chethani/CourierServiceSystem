const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
let Store = require("../models/Store");


//post method 

router.post('/add', (req,res)=>{
  let newStore = new Store(req.body);
  newStore.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:"Store saved sucessfully"
      });
  });
})

//get method to retriew data

router.get('/get', (req,res)=>{
  Store.find().exec((err,Store)=>{
     if(err){
         return res.status(400).json({
             error:err
         });
     }return res.status(200).json({
         success:"true",
         Store
     });
  });
 
 });


//GET ONE PACKAGE By ID (http://localhost:8080/package/<userID>)

router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId =  req.params.id; //fetch the id parameter in url

    const store = await Store.findById(userId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((Store) => {
        res.status(200).send({status : "Store fetched", Store}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})


  //update Store  http://localhost:8080/Store/updateStore/

  router.put('/updateStore/:id',(req,res)=>{
    Store.findByIdAndUpdate(
           req.params.id,
           {
               $set:req.body
           },
           (err,Store)=>{
               if(err){
                   return res.status(400).json({error:err});
               }
               return res.status(200).json({
                   success:"Updated Succesfully",
               });
           }
       );
   });
   

//delete Store  http://localhost:8080/Store/delete/

router.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let userId = req.params.id; // assign userid to variable

    /*(/^[0-9a-fA-F]{24}$/)*/
        await Store.findByIdAndDelete(userId) //delete data that related to userId
            .then(() => {
                res.status(200).send({status: "user deleted"}); //display user deleted successfull
            }).catch((err) => {
                console.log(err.message)
            res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
            })
    
})
//search

router.route("/").get((req,res) =>{

    const{q} = req.query;

    const keys = ["store_Id","package_Id","delivery_District"];

    const search = (stores) =>{
        return stores.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    Store.find().then((stores) =>{
        res.json(search(stores)) //pass data from db to frontend
    }).catch((err) =>{
        console.log(err) //display errors
    })

})







module.exports = router;

