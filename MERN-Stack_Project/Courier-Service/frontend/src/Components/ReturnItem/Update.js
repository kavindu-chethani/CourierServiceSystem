import  React,{useState , useEffect}from "react"
import axios from "axios";
import {useLocation} from "react-router-dom";



export default function Update(props){
    
const[returnitemid,setReturnitemid]=useState("");
const[sellerid,setSellerid]=useState("");
const[sellername,setSellername]=useState("");
const[sellercontatnumber,setSellerContact]=useState("");
const[customername,setCustomername]=useState("");
const[customercontactnumber,setCustomercontactnumber]=useState("");
const[reason,setReason]=useState("");
const[ID,setID]=useState(null);
    

const location = useLocation();
const sid = location.pathname.split("/")[2];

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
 
//console.log(newReturnItem)

axios.put(`http://localhost:8070/returnitem/update/${sid}`,newReturnItem).then(()=>{
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
 useEffect(()=>{
setReturnitemid(localStorage.getItem("returnitemid"));
setSellerid(localStorage.getItem("sellerid"));
setSellername(localStorage.getItem("sellername"));
setSellerContact(localStorage.getItem("sellercontatnumber"));
setCustomername(localStorage.getItem("customername"));
setCustomercontactnumber(localStorage.getItem("customercontactnumber"));
setReason(localStorage.getItem("reason"));
setID(localStorage.getItem("ID"));
 },[]);

    return(
        <div className="container">
        <form onSubmit={sendData}>
        <div className="mb-3">
          <label for="returnitemid" className="form-label">ReturnitemID</label>
          <input type="text" class="form-control" id="returnitemid" value={returnitemid} placeholder="Enter ReturnItemID"  onChange={(e)=>{
setReturnitemid(e.target.value);
          }}></input>

        </div>
       
        <div className="mb-3">
          <label for="sellerid" className="form-label">SellerId</label>
          <input type="text" className="form-control" id="sellerid" value={sellerid}  placeholder="Enter SellerId"  onChange={(e)=>{
setSellerid(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="sellername" className="form-label">SellerName</label>
          <input type="text" className="form-control" id="sellername" value={sellername} placeholder="Enter SellerName"  onChange={(e)=>{
setSellername(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="sellercontatnumber" className="form-label">SellerContatnumber</label>
          
          <input type="text" className="form-control" id="sellercontatnumber" value={sellercontatnumber} placeholder="Enter SellerContactNumber"  onChange={(e)=>{
setSellerContact(e.target.value);
          }}></input>
        </div>


        <div className="mb-3">
          <label for="customername" className="form-label">CustomerName</label>
          <input type="text" className="form-control" id="customername" value={customername} placeholder="Enter CustomerName"  onChange={(e)=>{
setCustomername(e.target.value);
          }}></input>
        </div>


        <div class="mb-3">
          <label for="customercontactnumber" class="form-label">CustomerContactNumber</label>
          <input type="text" class="form-control" id="customercontactnumber" value={customercontactnumber} placeholder="Enter CustomerContactNumber"   onChange={(e)=>{
setCustomercontactnumber(e.target.value);
          }}></input>
        </div>
        
        <div class="mb-3">
          <label for="reason" class="form-label">Reason</label>
         
          <input type="text" class="form-control" id="reason"  value={reason}  placeholder="Enter Reason" onChange={(e)=>{
setReason(e.target.value);
          }}></input>
        </div>

        <button type="submit" className="btn btn-primary">UPDATE</button>
      </form>
      </div>
    )

        
        }
