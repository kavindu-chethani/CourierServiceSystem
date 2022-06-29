
const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB 
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application

require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT =process.env.PORT || 8080; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection; // MongoDB Connection
connection.once ("open", ()=>{
    console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
})


//store
const storeRouter = require('./routes/StoreRouter');
app.use('/Store',storeRouter);

//pickup store items
const PickUpRouter = require('./routes/PickUpRouter');
 app.use("/PickUp",PickUpRouter);

//order details
const orderRouter = require('./routes/orderRouter');
app.use('/Order',orderRouter);

//package
const packageRouter = require('./routes/packageRouter.js');
app.use('/package', packageRouter);

/*Admin*/
//import sellerRouter.js
const wmanagerRouter = require("./routes/wmanagerRouter.js"); //import wmanagerRouter.js
const sellerRQRouter = require("./routes/sellerRQRouter.js"); //import sellerRQRouter.js
const sellerListRouter = require("./routes/sellerListRouter.js"); //import sellerListRouter.js

//to load sellerRouter.js we have to pass two parameteres (1.route 2. sellerRouter variable)
app.use("/wmanager",wmanagerRouter); //to load wmanagerRouter.js
app.use("/sellerRQ",sellerRQRouter); //to load sellerRQRouter.js
app.use("/sellerList",sellerListRouter); //to load sellerlist.js

//employee route
const employeeRouter = require(`./routes/empRouter`);
app.use("/employee",employeeRouter);

//employee salary route
const empsalaryRouter = require('./routes/paymentRouter.js');
app.use("/empsal",empsalaryRouter)

// Payment Endpoint
const paymentRouter = require("./routes/payment.js");
app.use("/payment", paymentRouter);




app.listen(PORT,()=>{
    console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
})
