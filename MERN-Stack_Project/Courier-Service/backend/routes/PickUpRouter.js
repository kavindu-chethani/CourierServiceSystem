const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
let PickUp = require("../models/PickUp");


//post method 

router.post('/add', (req,res)=>{
  let PickUp = new PickUp(req.body);
  PickUp.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:"delivery boy added sucessfully"
      });
  });
})

   

router.get('/get', (req,res)=>{
    PickUp.find().exec((err,PickUp)=>{
       if(err){
           return res.status(400).json({
               error:err
           });
       }return res.status(200).json({
           success:"true",
           PickUp
       });
    });
   
   });


    //update   http://localhost:8080/id/

  router.put('update/:id',(req,res)=>{
    PickUp.findByIdAndUpdate(
           req.params.id,
           {
               $set:req.body
           },
           (err,PickUp)=>{
               if(err){
                   return res.status(400).json({error:err});
               }
               return res.status(200).json({
                   success:"Updated Succesfully",
               });
           }
       );
   });


   router.route("/get/:id").get(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId =  req.params.id; //fetch the id parameter in url

    const pickup = await PickUp.findById(userId) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then((PickUp) => {
        res.status(200).send({status : "PickUp fetched", PickUp}) //if find success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with find data"}); //if not display error message
    })

})

   module.exports = router ;