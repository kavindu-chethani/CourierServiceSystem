import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

import Header from '../Home-Page/Header';
import Footer from '../Home-Page/Footer';

import "./PackageDetailsEdit.css"

const PackageDetailsEdit = () => {


  


      /*  ADD DATA */

      const [currentPackage, setCurrentPackage] = useState({});
      const [id, setId] = useState("");

      const getPackageById = async (id) => {
          const config = {
              headers: {
                  "Content-Type": "application/json",
              },
          };
          try {
              const res = await axios.get(`http://localhost:8080/package/get/${id}`, config);
              setCurrentPackage(res.data.package);
              console.log(res.data);
          } catch (err) {
              console.error("error", err);
              console.log("Traking ID Wrong");
          }
      };
  
  
  
    useEffect(() => {
          
          try {
              setId(window.localStorage.getItem('id'))
              console.log(id);
              getPackageById(id);
            }catch (err) {
              console.error("error", err);
            }
        
        
      }, [id]);



      const [open, setOpen] = useState(false);

      const nav = useNavigate();

      function handleClose() {
        nav("/packagedetails");
      }
  
      function handleClickOpen() {
          setOpen(true);
      }
  
      const handleInputChange = (event) => {
          setCurrentPackage({
              ...currentPackage,
              [event.target.name]: event.target.value,
          });
      };






        /*  UPDATE DATA */

        const handleEdit = async (id, inputFname, inputLname, inputEmail, inputNumber) => {
          const config = {
              headers: {
                  "Content-Type": "application/json",
              },
          };
      
          try {

            var fnameformat = /^[a-zA-Z]+$/;
            var lnameformat = /^[a-zA-Z]+$/;
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var numberformat = /^\d{9}$/;

            if(inputFname.value.match(fnameformat) && inputLname.value.match(lnameformat) && inputEmail.value.match(mailformat) && inputNumber.value.match(numberformat) ) {

              toast.success(`your package details successfully updated`);
              await axios.put(
                `http://localhost:8080/package/update/${id}`,
                currentPackage,
                config
              );
                setCurrentPackage({
                  cusFirstName: currentPackage.cusFirstName,
                  cusLastName: currentPackage.cusLastName,
                  cusEmail: currentPackage.cusEmail,
                  cusAddress: currentPackage.cusAddress,
                  cusConNumber: currentPackage.cusConNumber,
                });
                toast.success(`your package details successfully updated`);

            } else {
              toast.error(`OH!..Something went wrong in the input validation field.`);
            }
              
        } catch (err) {
            console.error("error", err);
            }
        };





          /*  DELETE DATA */

          const navigate = useNavigate();

          const handleDelete = async (id) => {
        		await axios.delete(`http://localhost:8080/package/delete/${id}`).then((res) => {
                    toast.error(`OH! Package ${id} was Deleted`);
                    navigate("/");
        			window.location.reload();
        		});
        	};




  return (

    <div className='PackageEdit'>

    <Header />

      <div className="details-main">

      <div className="PDEhead">
              <p className="PDEhead_1">Hi..<span>{currentPackage.cusFirstName}</span> Edit your Personal Details</p>
              <p className="PDEhead_2">If the package has arrived in the relevant delivery district, <br /> you can't change your delivery address.</p>
      </div>

        <div className="cus-details">

        <form className="contact-form" name="contactform">

            <input
              type="text"
              className='PDEinput-01'
              name="cusFirstName"
              value={currentPackage.cusFirstName}
              placeholder="Enter your first name"
               onChange={handleInputChange}
              required
            ></input>
            <br />
            <br />

            <input
              type="text"
              className='PDEinput-01'
              name="cusLastName"
              value={currentPackage.cusLastName}
              placeholder="Enter your last name"
               onChange={handleInputChange}
              required
            ></input>
            <br />
            <br />

            <input
              type="email"
              className='PDEinput-01'
              name="cusEmail"
               value={currentPackage.cusEmail}
              placeholder="Enter your email"
               onChange={handleInputChange}
              required
            ></input>
            <br />
            <br />

            <input
              type="text"
              className='PDEinput-01'
              name="cusAddress"
               value={currentPackage.cusAddress}
              placeholder="Enter your Adrees"
               onChange={handleInputChange}
              required
            ></input>
            <br />
            <br />

            <input
              type="tel"
              className='PDEinput-01'
              name="cusConNumber"
              value={currentPackage.cusConNumber}
              placeholder="Enter your phone no."
              onChange={handleInputChange}
              required
            ></input>
            <br />
            <br />

            <button className="button-55" type="submit" onClick={() => handleEdit(id, 
                                                                                  document.contactform.cusFirstName, 
                                                                                  document.contactform.cusLastName, 
                                                                                  document.contactform.cusEmail, 
                                                                                  document.contactform.cusConNumber)}>Save Edit</button>

            <button className="button-56" onClick={() => handleDelete(id)}>Delete Package</button>
            <button className="button-57" onClick={() => handleClose(id)}>Cancel</button>

        </form>

        </div>
      </div>
 
    <Footer />


    </div>
  )
}

export default PackageDetailsEdit