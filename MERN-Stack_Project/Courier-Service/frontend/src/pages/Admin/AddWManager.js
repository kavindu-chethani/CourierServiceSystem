import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './style.css'


function AddWManager(){
        
      const navigate = useNavigate();
      const onSubmit = () =>{
         navigate("/WMList");
      }

        const[wm_id,setID] = useState("");
        const[fullname,setName] = useState("");
        const[email,setEmail] = useState("");
        const[contact,setContact]= useState("");
        const[address,setAddress]= useState("");
        const[district,setDistrict]= useState("");
        
         function sendData(e){  //create function to submit button
            e.preventDefault();
            
            const newWManager ={ //set data values to object
               wm_id,
               fullname,
               email,
               contact,
               address,
               district
            }

            axios.post("http://localhost:8080/wmanager/add", newWManager).then(()=>{
               
               alert("Warehouse manager added");
               setID("");
               setName("");
               setEmail("");
               setContact("");
               setAddress("");
               setDistrict("");
               window.location.reload();
            }) 
            .catch((err)=>{

               alert(err)
            })
             
         }



        //////FORM
        return(
            <div class="addWM">
                 <div class="adminWrapper">
                
                    <form onSubmit={sendData}>
                        <div class="title">
                           ADD WAREHOUSE MANAGER DETAILS
                        </div>
                        <div class="form">

                           <div class="inputfield">
                              <label>ID</label>
                              <input type="text" name="wm_id" class="input" placeholder="Enter ID"
                                 onChange={(e) =>{
                                    setID(e.target.value);
                                 }} required />
                           </div>
                           
                           <div class="inputfield">
                              <label>Full Name</label>
                              <input type="text" name="fullname" class="input" placeholder="Enter Full Name"
                                 onChange={(e) =>{
                                    setName(e.target.value);
                                 }} required />
                           </div>
             
                           <div class="inputfield">
                              <label>Email</label>
                              <input type="email" name="email" class="input" placeholder="Enter Email Address"
                              
                              onChange={(e) =>{
                                 setEmail(e.target.value);
                              }} required />
                           </div>
             
                           <div class="inputfield">
                              <label>Contact No</label>
                              <input type="text" name="contact" class="input" placeholder="Enter Contact Number"
                              onChange={(e) =>{
                                 setContact(e.target.value);
                              }} required/>
                           </div>
             
                           <div class="inputfield">
                              <label>Address</label>
                              <input type="text" name="address" class="input" placeholder="Enter Address"
                              onChange={(e) =>{
                                 setAddress(e.target.value);
                              }} required />
                           </div>

                           <div class="inputfield">
                              <label>District</label>
                              <input type="text" name="district" class="input" placeholder="Enter District"
                              onChange={(e) =>{
                                 setDistrict(e.target.value);
                              }} required/>
                           </div>
             
                           
                        </div>
            
                        <div class="modal-footer">
                            {/* "functionA(); functionB();" */}
                           <button onClick={onSubmit} type="submit" class="btn btnC" >CLOSE</button>
                           <button type="submit" class="btn btnSbmt">SUBMIT</button>
                        </div>
                     </form>   
                  </div>
               </div> 
        );
}

            
          
export default AddWManager;