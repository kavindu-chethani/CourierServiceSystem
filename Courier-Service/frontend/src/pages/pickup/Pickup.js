import React, {useState, useEffect} from "react";
import axios from "axios";



export default function Pick_up(){


    const [pickups, setPickup]=useState([]);

    useEffect(()=>{
    function getAllPickups(){
        axios.get("http://localhost:8080/PickUp/get").then((res)=>{
                console.log(res.data);
                setPickup(res.data.PickUp);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAllPickups();
    
    }, [])
    
    
    const dataList = [...pickups];
    console.log("adfgh", dataList);
    
    const dataArr=[];

const[seller_Id, setseller_Id]= useState(" ");
const[package_Id, setpackage_Id]= useState(" ");
const[shop_Name, setshop_Name]= useState(" ");
const[seller_District, setseller_District]= useState(" ");
const[seller_Address, setseller_Address]= useState(" ");
const[contact_no, setcontact_no]= useState(" ");
const[estimate_date, setestimate_date]= useState(" ");
const[delivery_member, setdelivery_member]= useState(" ");

function sendData(e){

    e.preventDefault();

    const newboy={
      seller_Id,
      package_Id,
      shop_Name,
      seller_District,
      seller_Address, 
      contact_no,
      estimate_date,
      delivery_member,

      
    }

    axios.post("http://localhost:8080/PickUp/add", newboy).then(()=>{
      alert("delivery boy Added");
    }).catch((err)=>{
      alert(err)
    })

   console.log(newboy);
}



return (
    <div>
    
  <div className="container">   
  <hr></hr>
  <div className="card shodow mb-4">        
          <div className="card-body">
          <form >
                   
                  <h3>
                      Assign Delivery boys for pick up
                  </h3>
                </form>
       
          <hr></hr>
         
  
              <div className="table-responsive" onSubmit={sendData} >
              
               {<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                      <thead>
                                      <th>Seller Id</th>
                                    <th>Package Id</th>
                                    <th>Shop Name</th>
                                    <th>Seller District</th>
                                    <th>Seller Address</th>
                                    <th>Contact</th>
                                    <th>Estimate date</th>
                                   
                                    </thead>
                                    <tbody>
                                     {dataList.length >0 ? (dataList.map((pickups)=>(
                                        <tr>
                                        <td>{pickups.seller_Id}</td>
                                        <td>{pickups.package_Id}</td>
                                        <td>{pickups.shop_Name}</td>
                                        <td>{pickups.seller_District}</td>
                                        <td>{pickups.seller_Address}</td>
                                        <td>{pickups.contact_no}</td>
                                        <td>{pickups.estimate_date}</td>
                                       
                                        <td>
                                         { <a  class="btn btnA btnE" href={`http://localhost:3000/AddPickup/${pickups._id}`} type="submit">Add delivery boy</a> } 
                                        </td>
                                       
                                         </tr>
                                      ))
                                      ): (
                                        <p>No details found</p>
                                      )}
                                    </tbody>
                                </table> }
                         
                          
              </div>
          </div>
  
      </div>
      </div>



      {/* add delivery boy row */}


      <div className="container">   
  <hr></hr>
  <div className="card shodow mb-4">        
          <div className="card-body">
          <form >
                   
            <h3>Assigned delivery members for pick up </h3>
                </form>
       
          <hr></hr>
         
  
              <div className="table-responsive" onSubmit={sendData} >
              
               {<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                      <thead>
                                      <th>Seller Id</th>
                                    <th>Package Id</th>
                                    <th>Shop Name</th>
                                    <th>Seller District</th>
                                    <th>Seller Address</th>
                                    <th>Contact</th>
                                    <th>Estimate date</th>
                                    
                                    <th>delivery_member</th>
                                    </thead>
                                    <tbody>
                                     {dataList.length >0 ? (dataList.map((pickups)=>(
                                        <tr>
                                        <td>{pickups.seller_Id}</td>
                                        <td>{pickups.package_Id}</td>
                                        <td>{pickups.shop_Name}</td>
                                        <td>{pickups.seller_District}</td>
                                        <td>{pickups.seller_Address}</td>
                                        <td>{pickups.contact_no}</td>
                                        <td>{pickups.estimate_date}</td>
                                        <td>{pickups.delivery_member}</td>
                                       
                                       
                                        

                                         </tr>
                                      ))
                                      ): (
                                        <p>No details found</p>
                                      )}
                                    </tbody>
                                </table> }
                         
                          
              </div>
          </div>
  
      </div>
      </div>
  </div> 





  
)}
                                      

                                      