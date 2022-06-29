 import React from 'react';
 import axios from 'axios';
 import { useParams, useNavigate } from 'react-router-dom';
 import { useState, useEffect } from "react";
 import './style.css'

 
import Header from '../Home-Page/Header';
import Footer from '../Home-Page/Footer';


const EditWManager = ()=>{

   const navigate = useNavigate();
   const onSubmit = () =>{
      navigate("/WMList");
   }
   /*  ADD DATA */

   const [wmanager, setWManager] = useState({});
   const [ID, setId] = useState("");

   const getWManagerByID = async (ID) => {
       const config = {
           headers: {
               "Content-Type": "application/json",
           },
       };
       try {
           const res = await axios.get(`http://localhost:8080/wmanager/get/${ID}`, config);
           setWManager(res.data.wmanager);
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
           getWManagerByID(id);
         }catch (err) {
           console.error("error", err);
         }
     
     
   }, [id]);


   const handleInputChange = (event) => {
      setWManager({
          ...wmanager,
          [event.target.name]: event.target.value,
      });
  };



  /*  UPDATE DATA */

  const handleEdit = async (id) => {
   const config = {
       headers: {
           "Content-Type": "application/json",
       },
   };

   try {
       await axios.put(
           `http://localhost:8080/wmanager/update/${ID}`,
           wmanager,
           config
       );
       setWManager({
         wm_id: wmanager.wm_id,
         fullname: wmanager.fullname,
         email: wmanager.email,
         contact: wmanager.contact,
         address: wmanager.address,
         district: wmanager.district,
         
       });
    
       window.location.reload();
   } catch (err) {
     console.error("error", err);
     }
 };

 
   return(
      
      <div>
         <div class="adminWrapper">
            <form >
               <div class="title">
                  EDIT WAREHOUSE MANAGER DETAILS
               </div>
             
                <div class="form">

                  <div class="inputfield">
                     <label>ID</label>
                     <input input  name="id" class="input" placeholder="ID"  value={wmanager.wm_id}  onChange={handleInputChange}/>
                  </div> 
                  <div class="inputfield">
                     <label>Full Name</label>
                     <input input  name="name" class="input" placeholder="Full Name" value={wmanager.fullname} onChange={handleInputChange}/>
                  </div>
                  <div class="inputfield">
                     <label>Email</label>
                     <input input name="email" class="input" placeholder="Email" value={wmanager.email} onChange={handleInputChange}/>
                  </div>
                  <div class="inputfield">
                     <label>Contact No</label>
                     <input input  name="contact" class="input" placeholder="Contact No" value={wmanager.contact} onChange={handleInputChange}/>
                  </div>
                  <div class="inputfield">
                     <label>Address</label>
                     <input input  name="address" class="input" placeholder="Address" value={wmanager.address} onChange={handleInputChange}/>
                  </div>
                  <div class="inputfield">
                     <label>District</label>
                     <input input  name="district" class="input" placeholder="District" value={wmanager.district} onChange={handleInputChange}/>
                  </div>
               </div> 

                <div class="modal-footer">
                  <button type="button" class="btn btnC" onClick={onSubmit} >CLOSE</button>
                  <button type="submit" class="btn btnU"  onClick={() => handleEdit(id)} >UPDATE</button>
               </div> 
            </form>
         </div>
      </div>
      
   );

}

export default EditWManager;