import React, { useState ,  useEffect } from 'react';
import "./empstyle.css";




const ValidateEmp = () => {

   const initialValues = {editempname: "", editnic: "", editdob:"", editaddress:"", editcontactno:"",  editemail:"" , editusername:"", editpassword:"", editconpass:"" };
    const [formValues, setFormValues]= useState(initialValues);
    const [formErrors, setFormErros]= useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      console.log(formValues);
      };
  
      const handleSubmit1 = (e) => {
          e.preventDefault();
          setFormErros(validate(formValues));
          setIsSubmit(true);
      };
  
      useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
          }
        }, [formErrors]);
  
      const validate = (values) => {
          const errors = {};
          const regex1 =  /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
          const regex2 =  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
          const regex3 =  /^\\w[\\w.]{2,18}\\w$/;
          const regex4 =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

          
            if (!values.editempname) {
              errors.editempname = "Name is required!";
            }
            if (!values.editnic) {
              errors.editnic = "NIC is required!";
            } else if (!regex1.test(values.editnic)) {
                errors.editnic = "This is not a valid NIC format!";
            }

            if (!values.editdob) {
              errors.editdob = "Date of Birth is required!";
            }
            if (!values.editaddress) {
              errors.editaddress = "Address is required!";
            }
  
            if (!values.editcontactno) {
              errors.editcontactno = "Contact NO is required!";
            } else if (!regex2.test(values.editcontactno)) {
                errors.editnic = "This is not a valid Contact No format!";
            }
  
            if (!values.editemail) {
              errors.editemail = "Email is required!";
            } else if (!regex.test(values.editemail)) {
              errors.editemail = "This is not a valid email format!";
            }
  
  
            if (!values.editusername) {
              errors.editusername = "Username is required!";
            } else if (!regex3.test(values.editusername)) {
              errors.editusername = "This is not a valid email format!";
            }
            ///^\\w[\\w.]{2,18}\\w$/
            // \w: is a shortcut for [a-zA-Z0-9_]
            // ^: Start
            // \w: Match a word character
            // [\w.]{2,18}: Match 2 to 18 counts of word or dot characters thus making total length between 4 to 20
            // \w: Match a word character
            // $: End
  
            if (!values.editpassword) {
              errors.editpassword = "Password is required!";
            } else if (!regex4.test(values.editpassword)) {
              errors.editpassword = "This is not a valid Password format!";
            }
            // ^	The password string will start this way
            // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
            // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
            // (?=.*[0-9])	The string must contain at least 1 numeric character
            // (?=.[!@#$%^&])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
            // (?=.{8,})	The string must be eight characters or longer
  
  
        
            return errors;
      }



  return (
    <div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Update is successfully</div>
            ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}
       <form onSubmit={handleSubmit1}>
       <div class="wrapper">
        <div class="title">
           Add Employee Form
          </div>
          <div class="form">
            <div class="inputfield">
                <label>Full Name</label>
                <input type="text" name="editempname" class="input" 
                value={formValues.editempname}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editempname}</p>

             <div class="inputfield">
                <label>NIC</label>
                <input type="text" name="editnic" class="input" 
                value={formValues.editnic}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editnic}</p>

             <div class="inputfield">
                <label>Date of birth</label>
                <input type="date" name="editdob" class="input" 
                value={formValues.editdob}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editdob}</p>

             <div class="inputfield">
                <label>Address</label>
                <input type="text" name="editaddress" class="input" 
                value={formValues.editaddress}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editaddress}</p>

             <div class="inputfield">
                <label>Contact No</label>
                <input type="number" name="editcontactno" class="input" 
                value={formValues.editcontactno}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editcontactno}</p>

             <div class="inputfield">
                <label>Email</label>
                <input type="email" name="editemail" class="input" 
                value={formValues.editemail}   onChange={handleChange}
                />
             </div>
             <p className='errorcolor'>{formErrors.editemail}</p>

             <div class="inputfield">
                <label>User Roll</label>
                <div class="custom_select">
                  <select>
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
                <input type="text" name="editusername" class="input" 
                value={formValues.editusername}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editusername}</p>

             <div class="inputfield">
                <label>Password</label>
                <input type="password" name="editpassword" class="input" 
                value={formValues.editpassword}   onChange={handleChange}
                />
             </div>
             <p class="errorcolor">{formErrors.editpassword}</p>

             

              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Update</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
    </div>

       </form> 
    </div>
  )
}

export default ValidateEmp