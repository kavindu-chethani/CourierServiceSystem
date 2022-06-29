import React, { useState } from "react";
import axios from "axios";

export default function PaymentInvoice() {

    const [nameoncard, setNameOnCard] = useState("");
    const [cardno, setCardNo] = useState("");
    const [securitycode, SetSecurityCode] = useState("");
    const [postalcode, setPostalCode] = useState("");

    function sendData(e){
        e.preventDefault();

        const newPayment ={

            nameoncard,
            cardno,
            securitycode,
            postalcode,

        };

        axios.post("http://localhost:8080/payment/add", newPayment)
        .then(()=>{

            setNameOnCard("");
            setCardNo("");
            SetSecurityCode("");
            setPostalCode("");

        })
        .catch((err)=>{

            alert(err);
        });


    }


  return (
    <div>
    <div class="row">

<div class="col-lg-12 ml-0"> 
        <h1 class="text-center">Pay Invoice</h1>
</div>
</div>

<br></br>

<div class="row"> 

<div class="col-lg-3 col-0 ml-0">   
</div>

<div class="col-lg-6 col-12">
    <div class="border ml-3 mr-3 bg-light shadow  ">   
     
    <form class="mt-3 ml-3 mr-3 mb-3" onSubmit= {sendData}>

            <div class="form-group">
                <label> Name On Card </label>
                <input type="text" class="form-control" name ="fullname"  placeholder = "Name on card"
                onChange={(e)=>{

                    setNameOnCard(e.target.value);
                }}
                
                ></input>
            </div>

            <div class="form-group">
                <label >Card Number</label>
                <input type="text" class="form-control" name = "Empolyee Name" placeholder = "Card Number"
                onChange={(e)=>{

                    setCardNo(e.target.value);
                }}
                
                ></input>
            </div>

            <div class="form-group">
                <label >Expiry date security code</label>
                <input type="Date" class="form-control" name = "Empolyee Designation" placeholder = "Expiry date security code"
                onChange={(e)=>{

                    SetSecurityCode(e.target.value);


                }}

                ></input>
            </div>

            <div class="form-group">
                <label >Zip/Postal Code</label>
                <input type="text" class="form-control" name = "email" placeholder = "Zip/Postal Code"
                    onChange={(e)=>{

                        setPostalCode(e.target.value);
                    }}
                
                ></input>
            </div>

            <br></br>
            <div class="text-center">
                <button type="submit" class="btn btn-success btn-lg btn-block text-center mb-2">Sending</button> 
            </div>  
    </form>


        

     </div> 
     
</div>  


        <div class="col-lg-3 col-0">
        </div>           
</div>
    </div>
  )
}

