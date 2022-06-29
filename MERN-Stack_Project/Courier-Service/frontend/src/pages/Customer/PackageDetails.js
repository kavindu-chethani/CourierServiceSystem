import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { app } from "./Firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import "./PackageDetails.css";
import "../Home-Page/Home.css";

import Header from '../Home-Page/Header';
import Footer from '../Home-Page/Footer';

const PackageDetails = () => {


  /* ____ Get User By ID  ____ */

  const navigate = useNavigate();

  const [currentPackage, setCurrentPackage] = useState({});
	const [id, setId] = useState("");

	const getPackageById = async (id) => {
		const config = {
			headers: { "Content-Type": "application/json", },
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




  /* ____ Email Verification ____ */


  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
        
    // prevent reload
    e.preventDefault()
    console.log("xxxxx");

    // navigation location url
    const config = {
        url: 'http://localhost:3000/packagedetailsedit',
        handleCodeInApp: true
    }

    const auth = getAuth();

    // email verification process
    await sendSignInLinkToEmail(auth, currentPackage.cusEmail, config)
    .then(() => {
        window.localStorage.setItem('email', currentPackage.cusEmail);
        console.log("email sucessfully send");
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });

    toast.success(`Email is send to ${currentPackage.cusEmail}. Click the link to Edit your Details.`);

    // save user email in local storage
    window.localStorage.setItem('emailForRegistration', email)

    //clear state
    setEmail("");
    

  } // handleSubmit



  const registerForm = () =>
  <button onClick={handleSubmit} className="button-35">Edit Your Details</button>









/* ____ Progrees Bar ____ */

  const shop = async (e) => {
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
  }

  const warehouseOne = async (e) => {

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");

  }

  const warehouseTwo = async (e) => {

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");

  }

  const delivery = async (e) => {

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");

  }

  const location = async (e) => {

    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");

  }


  if(currentPackage.pacLocation === "Seller Shop") {
    shop();
  }
  else if(currentPackage.pacLocation === "Colombo Warehouse(1)" ||
    currentPackage.pacLocation === "Galle Warehouse(1)" ||
    currentPackage.pacLocation === "Kandy Warehouse(1)") {
    warehouseOne();
  } 
  else if(currentPackage.pacLocation === "Colombo Warehouse(2)" ||
    currentPackage.pacLocation === "Galle Warehouse(2)" ||
    currentPackage.pacLocation === "Kandy Warehouse(2)") {
    warehouseTwo();
  }
  else if(currentPackage.pacLocation === "Delivery Boy") {
    delivery();
  }
  else if(currentPackage.pacLocation === "Your Location") {
    location();
  }
  else {

  }




  /* ____ Download As PDF Function ____ */

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
  });

  

  return (
    <div className='package'>

     <Header/>

      <div className="packageDetails">
        <div className="main">

          <div className="head">
              <p className="head_1">Hi..<span>{currentPackage.cusFirstName}</span> your Package Details</p>
              <p className="head_2">Estimated Date for Deliver : {currentPackage.pacEsstimatedDate}</p>
          </div>
          
          <ul>
              <li className='package_li'>
                  <i className="icon uil uil-shop"></i>
                  <div className="progress one">
                      <p>1</p>
                      <i className="uil uil-check"></i>
                  </div>
                  <p className="text">Seller Shop</p>
              </li>
              <li className='package_li'>
                  <i className="icon uil uil-building"></i>
                  <div className="progress two">
                      <p>2</p>
                      <i className="uil uil-check"></i>
                  </div>
                  <p className="text">Galle Warehouse</p>
              </li>
              <li className='package_li'>
                  <i className="icon uil uil-building"></i>
                  <div className="progress three">
                      <p>3</p>
                      <i className="uil uil-check"></i>
                  </div>
                  <p className="text">Colombo Warehouse</p>
              </li>
              <li className='package_li'>
                  <i className="icon uil uil-truck"></i>
                  <div className="progress four">
                      <p>4</p>
                      <i className="uil uil-check"></i>
                  </div>
                  <p className="text">Delivery Boy</p>
              </li>
              <li className='package_li'>
                  <i className="icon uil uil-map-marker"></i>
                  <div className="progress five">
                      <p>5</p>
                      <i className="uil uil-check"></i>
                  </div>
                  <p className="text">your Location</p>
              </li>
          </ul>


          
          
          <div className="details-main">

          <div ref={componentRef}>
          
              <div className="cus-detailsPD">
                  <h3>Customer Details</h3>
                  <table>
                      <tbody>
                          <tr>
                              <td><h4>(1) Your Name - {currentPackage.cusFirstName} {currentPackage.cusLastName}</h4></td>
                              <td><h4>(4) Your Email - {currentPackage.cusEmail} </h4></td>
                          </tr>
          
                          <tr>
                          <td><h4>(2) Your Delivery Location - {currentPackage.cusAddress}</h4></td>
                          <td className='package_register_form'>{registerForm()}</td>
                          </tr>
          
                          <tr>
                          <td><h4>(3) Your Contact Number - {currentPackage.cusConNumber}</h4></td>
                          <td><h6>you must verify your email address befor <br /> edit your details</h6></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          
              <div className="pack-details">
                  <h3>Package Details</h3>
                  <table>
                      <tbody>
                          <tr>
                              <td><h4>(1) Package ID - {id}</h4></td>
                              <td><h4>(4) Package Location - {currentPackage.pacLocation}</h4></td>
                          </tr>
          
                          <tr>
                            <td><h4>(2) Type - {currentPackage.pacType}</h4></td>
                            <td><h4>(5) Esstimated Date for Delivery - {currentPackage.pacEsstimatedDate}</h4></td>
                          </tr>
          
                          <tr>
                            <td><h4>(3) Weight - {currentPackage.pacWeight} kg</h4></td>
                            <td></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          
              <div className="seller-details">
                  <h3>Seller Details</h3>
                  <table>
                      <tbody>
                          <tr>
                              <td><h4>(1) Shop Name - {currentPackage.shopName}</h4></td>
                              <td><h4>(4) Pick Up Date - 23/10/2022</h4></td>
                          </tr>
          
                          <tr>
                            <td><h4>(2) Shop Address - {currentPackage.shopAddress}</h4></td>
                            <td></td>
                          </tr>
          
                          <tr>
                            <td><h4>(3) Contact Number - {currentPackage.shopConNumber}</h4></td>
                            <td></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          
              <div className="delivery-details">
                  <h3>Delivery Person Details</h3>
                  <table>
                      <tbody>
                          <tr>
                              <td><h4>(1) Name - {currentPackage.dvName}</h4></td>
                              <td><h4>(3) Vehicle Number - {currentPackage.dvVehicalNumber}</h4></td>
                          </tr>
          
                          <tr>
                            <td><h4>(2) NIC - {currentPackage.dvNIC}</h4></td>
                            <td></td>
                          </tr>
          
                      </tbody>
                  </table>
              </div>

              </div>

              <button className='button-57' onClick={handlePrint}>print</button>
          
          </div>   
          
          </div>
      
      </div> 

    <Footer/> 

  </div>


  )
}

export default PackageDetails