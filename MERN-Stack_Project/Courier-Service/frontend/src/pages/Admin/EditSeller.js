import {useState, useEffect} from 'react';
import React from 'react';
import './style.css'

function EditSeller() {

   const initialValues = {name:"", email:"", contact:"", shopName:"",shopAddress:"",District:""};
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   

   const handleChange = (e) =>{
      const {name, value} = e.target;
      setFormValues({...formValues,[name]:value});
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
         console.log(formValues);
      }
   },[formErrors])

   const validate = (values) => {
      const errors ={};
      const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!values.name){
         errors.name = "Name is required!"
      }
      if (!values.email){
         errors.email = "Email is required!";
      } else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format";
      }
      if (!values.contact){
         errors.contact = "Contact No is required!";
      } else if(!values.contact == 10){
         errors.contact = "This is not a valid Contact No";
      }
      if (!values.shopName){
         errors.shopName = "Shop Name is required!";
      }
      if (!values.shopAddress){
         errors.shopAddress = "Shop Address is required!";
      }
      return errors;
   };


    
        return(
            <div>
                 <div class="adminWrapper">
                    <form onSubmit={handleSubmit}>
        <div class="title">
            EDIT SELLER DETAILS
          </div>
          <div class="form">
             <div class="inputfield">
                <label>Seller ID</label>
                <input type="text" name="sellerID" class="input" placeholder="Seller ID" readonly required/>
             </div>
             <div class="inputfield">
                <label>Full Name</label>
                <input type="text" name="name" class="input" placeholder="Full Name" value={formValues.name} onChange={handleChange} required/>
             </div>
             <p color>{formErrors.name}</p>
             <div class="inputfield">
                <label>Email</label>
                <input type="email" name="email" class="input" placeholder="Email" value={formValues.email} onChange={handleChange} required/>
             </div>
             <p>{formErrors.email}</p>
             <div class="inputfield">
                <label>Contact No</label>
                <input type="text" name="contact" class="input" placeholder="Contact No" value={formValues.contact} onChange={handleChange} required/>
             </div>
             <p>{formErrors.contact}</p>
             <div class="inputfield">
                <label>Shop Name</label>
                <input type="text" name="shopName" class="input" placeholder="Shop Name" value={formValues.shopName} onChange={handleChange}required/>
             </div>
             <p>{formErrors.shopName}</p>
             <div class="inputfield">
                <label>Shop Address</label>
                <input type="text" name="shopAddress" class="input" placeholder="Shop Address" value={formValues.shopAddress} onChange={handleChange}required/>
             </div>
             <p>{formErrors.shopAddress}</p>
             <div class="inputfield">
                <label>District</label>
                <div class="custom_select">
                    <select>
                      <option value="">Select</option>
                      <option value="">Colombo</option>
                      <option value="">Galle</option>
                      <option value="">Kandy</option>
                    </select>
                  </div>
             </div>
            
              <div class="modal-footer">
                <button type="button" class="btn btnC" data-bs-dismiss="modal">CLOSE</button>
                <button type="submit" class="btn btnU">UPDATE</button>
              </div>
          </div>
          </form>
    </div>
            </div>
        );
    }

            
            
export default EditSeller;