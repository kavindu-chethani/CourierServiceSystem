import React, { useState } from 'react';
import axios from "axios";
import "./empstyle.css";


const EmployeeForm = ()=>{

   
const [empname, setEmpname] = useState("");
const [nic, setNic] = useState("");
const [dob, setDob] = useState("");
const [address, setAddress] = useState("");
const [contact_no, setContact_no] = useState("");
const [email, setEmail] = useState("");
const [user_roll, setUser_roll] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 

function sendData(e){
   //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
   e.preventDefault(); 
   const newEmployee={
            empname,
            nic,
            dob,
            address,
            contact_no,
            email,
            user_roll,
            username,
            password
         }
         axios.post("http://localhost:8080/employee/addemp",newEmployee).then(()=>{
            alert("Employee Added");
         }).catch((err)=>{
            alert(err.message);
         })
         window.location.href = "/CreateEmployee";
}

function closeEmp(){
   window.location.href = "/CreateEmployee";     
}

    return(
        <div>
      <div class="wrapper">
        <form onSubmit={sendData}>
        <div class="title">
            REGISTER NEW EMPLOYEE 
          </div>
          <div class="form">
             <div class="inputfield">
                <label>Full Name</label>
                <input type="text" name="empname" class="input" placeholder="Full Name" onChange={(e)=>{setEmpname(e.target.value);}} required/>
             </div>
             <div class="inputfield">
                <label>NIC</label>
                <input type="text" name="nic" class="input" placeholder="NIC" onChange={(e)=>{setNic(e.target.value);}} required/>
             </div>
          
             <div class="inputfield">
                <label>Date Of Birth</label>
                <input type="date" name="dob" class="input" placeholder="Date Of Birth" onChange={(e)=>{setDob(e.target.value);}} required />
             </div>
           
             <div class="inputfield">
                <label>Address</label>
                <input type="text" name="address" class="input" placeholder="Address" onChange={(e)=>{setAddress(e.target.value);}} required />
             </div>
           
             <div class="inputfield">
                <label>Contact No</label>
                <input type="number" name="contact_no" class="input"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Contact No"  onChange={(e)=>{setContact_no(e.target.value);}} required/>
             </div>
        
             <div class="inputfield">
                <label>Email</label>
                <input type="email" name="email" class="input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value);}} required />
             </div>
            
             <div class="inputfield">
                <label>User Roll</label>
                <div class="custom_select">
                    <select onChange={(e)=>{setUser_roll(e.target.value);}} >
                      <option value="">Select</option>
                      <option value="Warehouse Manager">Warehouse Manager</option>
                      <option value="Store Manager">Store Manager</option>
                      <option value="Return Item Manager">Return Item Manager</option>
                      <option value="Delivery Manager">Delivery Manager</option>
                    </select>
                  </div>
             </div>

             <div class="inputfield">
                <label>User Name</label>
                <input type="text" name="username" class="input" placeholder="User Name" onChange={(e)=>{setUsername(e.target.value);}} required />
             </div>

             <div class="inputfield">
                <label>Password</label>
                <input type="password" name="password" class="input" placeholder="Password" onChange={(e)=>{setPassword(e.target.value);}} required />
             </div>
            
              <div class="modal-footer">
                <button type="submit" class="btn btnU">Save</button>
                <button type="submit" onClick= {closeEmp} class="btn btnC" data-bs-dismiss="modal">CLOSE</button>
              </div>
          </div>
          </form>
            </div>
    </div>
    )
}

export default EmployeeForm;