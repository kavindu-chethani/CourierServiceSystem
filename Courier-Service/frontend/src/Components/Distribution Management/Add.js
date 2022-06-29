import  React,{useState}from "react"
import axios from "axios";
export default function Add(){

const[PackageId,setPackageId]=useState("");
const[Date,setDate]=useState("");
const[District,setDistrict]=useState("");
const[Warehouse,setWarehouse]=useState("");




 function sendData(e){
e.preventDefault();
    
const newDis={
   PackageId,
   Date,
   District,
   Warehouse
}

axios.post("http://localhost:8090/distribution/add",newDis).then(()=>{
    alert("Added")
    setPackageId("");
    setDate("");
    setDistrict("");
    setWarehouse("");
 

}).catch((err)=>{
    alert(err)
})

 }

    return(
        <div className="container">
        <form onSubmit={sendData}>
        <div className="mb-3">
          <label for="PackageId" className="form-label">PackageId</label>
          <input type="text" class="form-control" id="PackageId" placeholder="Enter PackageId" onChange={(e)=>{
setPackageId(e.target.value);
          }}></input>

        </div>
       
        <div className="mb-3">
          <label for="Date" className="form-label">Date</label>
          <input type="text" className="form-control" id="Date" placeholder="Enter Date" onChange={(e)=>{
setDate(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="District" className="form-label">District</label>
          <input type="text" className="form-control" id="District" placeholder="Enter District" onChange={(e)=>{
setDistrict(e.target.value);
          }}></input>
        </div>

        <div className="mb-3">
          <label for="Warehouse" className="form-label">Warehouse</label>
          <input type="text" className="form-control" id="Warehouse" placeholder="Enter Warehouse Name" onChange={(e)=>{
setWarehouse(e.target.value);
          }}></input>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}


