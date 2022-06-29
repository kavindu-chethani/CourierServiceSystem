import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./empstyle.css";


const EditEmployee = ()=>{



const {id} = useParams();
const [empname, setEmpname] = useState("");
const [nic, setNic] = useState("");
const [dob, setDob] = useState("");
const [address, setAddress] = useState("");
const [contact_no, setContact_no] = useState("");
const [email, setEmail] = useState("");
const [user_roll, setUser_roll] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

function sendUpData(e){
   e.preventDefault();
   alert("Update Successfully");
   
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

axios.put(`http://localhost:8080/employee/updateEmp/${id}`, newEmployee)
.then(()=>{

   
 }).catch((err)=>{
   alert(err)
   console.log(err);
})
   window.location.href = "/CreateEmployee";
}

useEffect(() => {
   axios.get(`http://localhost:8080/employee/getEmp/${id}`).then(res => {
     
       setEmpname(res.data.employee.empname);
       setNic(res.data.employee.nic);
       setDob(res.data.employee.dob);
       setAddress(res.data.employee.address);
       setContact_no(res.data.employee.contact_no);
       setEmail(res.data.employee.email);
       setUser_roll(res.data.employee.user_roll);
       setUsername(res.data.employee.username);
       setPassword(res.data.employee.password);

       console.log(res.data.employee);
       })		
   }, [])

   function closeEmp(){
      window.location.href = "/CreateEmployee";     
   }


   return(
    <div>
      <div class="wrapper">
        <form >
        <div class="title">
            EDIT EMPLOYEE DETAILS
          </div>
          <div class="form">
             <div class="inputfield">
                <label>Full Name</label>
                <input type="text" name="empname" class="input" value={empname} onChange={(e)=>{setEmpname(e.target.value);}} required/>
             </div>

             <div class="inputfield">
                <label>NIC</label>
                <input type="text" name="nic" class="input" value={nic} onChange={(e)=>{setNic(e.target.value);}} required/>
             </div>   
                    
             <div class="inputfield">
                <label>Date Of Birth</label>
                <input type="date" name="dob" class="input" value={dob} onChange={(e)=>{setDob(e.target.value);}} required/>
             </div>

             <div class="inputfield">
                <label>Address</label>
                <input type="text" name="address" class="input" value={address} onChange={(e)=>{setAddress(e.target.value);}} required/>
             </div>
           
             <div class="inputfield">
                <label>Contact No</label>
                <input type="number" name="contact_no" class="input" value={contact_no} onChange={(e)=>{setContact_no(e.target.value);}} required/>
             </div>
        
             <div class="inputfield">
                <label>Email</label>
                <input type="email" name="email" class="input" value={email} onChange={(e)=>{setEmail(e.target.value);}} required />
             </div>
            
             <div class="inputfield">
                <label>User Roll</label>
                <div class="custom_select">
                    <select value={user_roll} onChange={(e)=>{setUser_roll(e.target.value);}} required>
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
                <input type="text" name="username" class="input" placeholder="User Name" value={username} onChange={(e)=>{setUsername(e.target.value);}} required />
             </div>

             <div class="inputfield">
                <label>Password</label>
                <input type="password" name="password" class="input" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value);}} required />
             </div>
            
              <div class="modal-footer">
                <button type="submit" class="btn btnU" onClick= {sendUpData} >UPDATE</button>
                <button type="submit" onClick= {closeEmp} class="btn btnC" data-bs-dismiss="modal">CLOSE</button>
              </div>
          </div>
          </form>
            </div> 
    </div>
    )
}

export default EditEmployee;