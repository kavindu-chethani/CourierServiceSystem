const routerS = require("express").Router(); //import router function in express package
let Sellerrqst  = require("../models/SellerRQ"); //import wmanager model



//ADD sellerRQ-Insertion route(http://localhost:8080/sellerRQ/add)
routerS.route("/add").post((req,res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const seller_id = req.body.seller_id;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const contact = Number(req.body.contact);
    const shop_name = req.body.shop_name;
    const shop_address = req.body.shop_address;
    const district = req.body.district;

    const newSellerrqst = new Sellerrqst({
       seller_id, 
       fullname,
       email,
       contact,
       shop_name,
       shop_address,
       district
    })

    //pass the variables to database
    newSellerrqst.save().then(() => {
        res.json("seller rqst added succecfull")
    }) .catch((err) => {
        console.log(err); //catch errors
    })
})


//DATA RETREIVE
//GET SELLER RQST DETAILS (http://localhost:8080/sellerRQ/)
routerS.route("/").get((req,res) =>{

    const{q} = req.query;

    const keys = ["fullname","email","district"];

    const search = (sellerrqs) =>{
        return sellerrqs.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    Sellerrqst.find().then((sellerrqs) =>{
        res.json(search(sellerrqs)) //pass data from db to frontend
    }).catch((err) =>{
        console.log(err) //display errors
    })

})


//UPDATE WMANAGER (http://localhost:8080/sellerRQ/update/<userID>)
routerS.route("/update/:id").put(async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userId = req.params.id; //fetch the id parameter in url
    const {seller_id,fullname, email, contact,shop_name,shop_address, district} = req.body; //fetch data from frontend

    const updateSellerrqst = { //create update object and pass values getting from frontend
        seller_id,
        fullname,
        email,
        contact,
        shop_name,
        shop_address,
        district
    }

    const update = await Sellerrqst.findByIdAndUpdate(userId, updateSellerrqst) //pass two parameters(userid,object that store seller data) and find user by id and update relevent data
    .then(() => {
        res.status(200).send({status : "user updated"}) //if update success, display success message
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"}); //if not display error message
    })

})


//DELETE WMANAGER (http://localhost:8080/sellerRQ/delete/:id)

routerS.route("/delete/:id").delete(async(req,res) => { //get userid from frontend
    let userId = req.params.id; // assign userid to variable

    /*(/^[0-9a-fA-F]{24}$/)*/
        await Sellerrqst.findByIdAndDelete(userId) //delete data that related to userId
            .then(() => {
                res.status(200).send({status: "user deleted"}); //display user deleted successfull
            }).catch((err) => {
                console.log(err.message)
            res.status(500).send({status: "Error with delete user", error:err.message}); //display error message
            })
    
})

module.exports = routerS;