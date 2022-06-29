import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Sidebar from '../../Components/sidebar/Sidebar';
import './styleForm.css'
import Packages from './Packages';

function ViewPackage(){

    // const [cusFirstName, setcusFirstName] = useState("");
    // const [cusLastName, setcusLastName] = useState("");
    // const [cusEmail, setcusEmail] = useState("");
    // const [cusAddress, setcusAddress] = useState("");
    // const [cusContact, setcusContact] = useState("");
    // const [pacLocation, setpacLocation] = useState("");
    // const [pacType, setpacType] = useState("");
    // const [estimatedDate, setestimatedDate] = useState("");
    // const [pacWeight, setpacWeight] = useState("");
    // const [shopName, setshopName] = useState("");
    // const [shopPickUpDate, setshopPickUpDate] = useState("");
    // const [shopConNumber, setshopConNumber] = useState("");
    


    



     /*-----------------------------------------ADD DATA------------------------------------------- */

   const [packageV, setPackage] = useState({});
   const [ID, setId] = useState("");

   const getPackageByID = async (ID) => {
       const config = {
           headers: {
               "Content-Type": "application/json",
           },
       };
       try {
           const res = await axios.get(`http://localhost:8080/package/get/${ID}`, config);
           setPackage(res.data.package);
           console.log(res.data);
       } catch (err) {
           console.error("error", err);
           console.log("ID Wrong");
       }
   };

   const {id} = useParams();
   //console.log(id);

 useEffect(() => {
        
       try {
          
           setId(id);
           console.log(id);
           getPackageByID(id);
         }catch (err) {
           console.error("error", err);
         }
     
     
   }, [id]);


   




    


    // useEffect(() => {
    //     axios.get(`http://localhost:8080/package/get/${id}`).then(res => {
      
    //         setcusFirstName(res.data.package.cusFirstName);
    //         setcusLastName(res.data.package.cusLastName);
    //         setcusEmail(res.data.package.cusEmail);
    //         setcusAddress(res.data.package.cusAddress);
    //         setcusContact(res.data.package.cusConNumber);
    //         setpacLocation(res.data.package.pacLocation);
    //         setpacType(res.data.package.pacType);
    //         setestimatedDate(res.data.package.pacEsstimatedDate);
    //         setpacWeight(res.data.package.pacWeight);
    
    //     console.log(res.data.package);
    //     })		
    // }, [])



     return (
        <div class="viewPackage">
             <Sidebar/>
        <div class="viewPContainer">
            <header>Package Details</header>

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Customer & Package Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>First Name</label>
                            <input name="cusFirstName" type="text"  value={packageV.cusFirstName}   required/>
                        </div>

                        <div class="input-field">
                            <label>Last Name</label>
                            <input name="cusLastName" type="text"  value={packageV.cusLastName}  required/>
                        </div>

                        <div class="input-field">
                            <label>Email</label>
                            <input name="cusEmail" type="text"  value={packageV.cusEmail}   required/>
                        </div>

                        <div class="input-field">
                            <label>Address</label>
                            <input name="cusAddress" type="text"  value={packageV.cusAddress} required/>
                        </div>

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input name="cusConNumber" type="text"  value={packageV.cusConNumber}  required/>
                        </div>
                        
                        <div class="input-field">
                            <label>Package Location</label>
                            <input name="pacLocation" type="text"  value={packageV.pacLocation}  required/>
                        </div>

                        <div class="input-field">
                            <label>Package Type</label>
                            <input name="pacType" type="text"  value={packageV.pacType}  required/>
                        </div>

                        <div class="input-field">
                            <label>Estimated Date</label>
                            <input name="EsstimatedDate" type="text"  value={packageV.pacEsstimatedDate}   required/>
                        </div>

                        <div class="input-field">
                            <label>Package weight</label>
                            <input name="pacWeight" type="text"  value={packageV.pacWeight} required/>
                        </div>
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">Shop Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Shop Name</label>
                            <input name="shopName" type="text"  value={packageV.shopName}  required/>
                        </div>

                        <div class="input-field">
                            <label>Pickup Date</label>
                            <input name="shopPickUpDate" type="text"  value={packageV.shopPickUpDate} required/>
                        </div>

                        <div class="input-field">
                            <label>Shop Contact</label>
                            <input name="shopConNumber" type="text"  value={packageV.shopConNumber}  required/>
                        </div>
                    </div>
                </div> 
                <div class="details ID">
                    <span class="title">Delivery Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Deliver By</label>
                            <input name="dvName" type="text" value={packageV.dvName}   required/>
                        </div>

                        <div class="input-field">
                            <label>Vehicle Number</label>
                            <input name="dvVehicalNumber" type="text"  value={packageV.dvVehicalNumber}  required/>
                        </div>

                        <div class="input-field">
                            <label>Delivery Person ID</label>
                            <input name="dvNIC" type="text"  value={packageV.dvNIC}  required/>
                        </div>
                    </div>
                </div> 
                <div class="pdfBtn">
                <a  class="btnbtnAbtnE"  href={`http://localhost:3000/GetPDF/${id}`} type="submit">GENERATE REPORT</a>
                   
                </div>
            </div>

           
        </form>
    </div>
    </div>
      );



}

export default ViewPackage;