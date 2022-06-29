import React,{ useRef,useState,useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./pdf.css"; 

function DownloadPdf (){

    const [stores, setStores]=useState([]);
    const [ID, setId] = useState("");
    
    const getstoreByID = async (ID) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.get(`http://localhost:8080/Store/get/${ID}`, config);
            setStores(res.data.Store);
            console.log(res.data);
        } catch (err) {
            console.error("error", err);
            console.log(" Wrong");
        }
    };

    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
         
        try {
            setId(id);
            console.log(id);
            getstoreByID(id);
          }catch (err) {
            console.error("error", err);
          }
       }, [id]);


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return(
        <div>
             
               <div class="adminWrapper">
                <div ref={componentRef}>
                <div class ="page" size ="A4">
                <div class="top-section">
                <div class="address">
                <div class="address-content">
                    <h2>"By the Minute" Courier Service</h2>
                    <p>335, Main Road,Malabe,Colombo</p>
                </div>
            </div>
            <div class="contact">
                <div class="contact-content">
                    <div class="email">Email :<span class="span">bytheminutecourier@gmail.com</span></div>
                    <div class="number">Contact :<span class="span">011-5623896</span></div>
                </div>
            </div>
        </div> 
        <div class="billing-invoice">
            <div class="title">
                Store Report
            </div>
            <div class="des">
                <p class="code">
                    #1236745-CDEJ763
                </p>
                
            </div>
        </div>
        <form class="ui main">
            <div class="title" >
              <h2>Store Details</h2> 
              <hr></hr>
            </div>
                <div class="ui form" >
                
               <div class="inputfield">
                  <label>Store ID</label>
                  <input input  name="store_Id" 
                  class="input" placeholder="ID"  
                  value={stores.store_Id} 
                 />
                  
               </div> 
              

               <div class="inputfield">
                  <label>Package ID</label>
                  <input input  name="package_Id" 
                  class="input" placeholder="Full Name" 
                  value={stores.package_Id} 
                  />
               </div>
               

               <div class="inputfield">
                  <label>Delivery District</label>
                  <input input name="delivery_District" 
                  class="input" 
                  placeholder="Delivery_District" 
                  value={stores.delivery_District} 
                 />
               </div>
             

               <div class="inputfield">
                  <label>Weight</label>
                  <input input  
                  name="weight" 
                  class="input" 
                  placeholder="weight" 
                  value={stores.weight} 
                 />
               </div>
              


               <div class="inputfield">
                  <label>Date</label>
                  <input input  
                  name="date" 
                  class="input" 
                  placeholder="date" 
                  value={stores.date} 
                 />
               </div>
               <a  class="btn btnA btnE"  onClick={handlePrint} type="submit">Generate PDF</a>
               </div> 
             <div class="modal-footer">
                 </div> 
         </form>
         </div>
         </div>
         </div>
         </div>
    
       
         );}

    
export default DownloadPdf;
