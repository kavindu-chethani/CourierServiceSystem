import  React,{useState}from "react"
import axios from "axios";
export default function Add(){
//it20644130
const[returnitemid,setReturnitemid]=useState("");
const[sellerid,setSellerid]=useState("");
const[sellername,setSellername]=useState("");
const[sellercontatnumber,setSellerContact]=useState("");
const[customername,setCustomername]=useState("");
const[customercontactnumber,setCustomercontactnumber]=useState("");
const[reason,setReason]=useState("");



 function sendData(e){
e.preventDefault();
    
const newReturnItem={
    returnitemid,
        sellerid,
        sellername,
        sellercontatnumber,
        customername,
        customercontactnumber,
        reason
}

axios.post("http://localhost:8070/returnitem/add",newReturnItem).then(()=>{
    alert("Student Added")
    setReturnitemid("");
    setSellerid("");
    setSellername("");
    setSellerContact("");
    setCustomername("");
    setCustomercontactnumber("");
    setReason("");

}).catch((err)=>{
    alert(err)
})

 }

    return(
        <div className="container">
        <form onSubmit={sendData}>
        <div className="mb-3">
          <label for="returnitemid" className="form-label">ReturnitemID</label>
          <input type="text" class="form-control" id="returnitemid" placeholder="Enter ReturnItemID" onChange={(e)=>{
setReturnitemid(e.target.value);
          }}></input>

        </div>
       
        <div className="mb-3">
          <label for="sellerid" className="form-label">SellerId</label>
          <input type="text" className="form-control" id="sellerid" placeholder="Enter SellerId" onChange={(e)=>{
setSellerid(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="sellername" className="form-label">SellerName</label>
          <input type="text" className="form-control" id="sellername" placeholder="Enter SellerName" onChange={(e)=>{
setSellername(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="sellercontatnumber" className="form-label">SellerContatnumber</label>
          <input type="text" className="form-control" id="sellercontatnumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter SellerContactNumber" onChange={(e)=>{
setSellerContact(e.target.value);
          }}></input>
        </div>


        <div className="mb-3">
          <label for="customername" className="form-label">CustomerName</label>
          <input type="text" className="form-control" id="customername" placeholder="Enter CustomerName" onChange={(e)=>{
setCustomername(e.target.value);
          }}></input>
        </div>


        <div class="mb-3">
          <label for="customercontactnumber" class="form-label">CustomerContactNumber</label>
          <input type="text" class="form-control" id="customercontactnumber" placeholder="Enter CustomerContactNumber" onChange={(e)=>{
setCustomercontactnumber(e.target.value);
          }}></input>
        </div>
        
        <div class="mb-3">
          <label for="reason" class="form-label">Reason</label>
          <input type="text" class="form-control" id="reason" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter Reason" onChange={(e)=>{
setReason(e.target.value);
          }}></input>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}


