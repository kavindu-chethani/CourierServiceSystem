import React,{ useRef,useState,useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GetPDF = ()=>{


    const [packagePDF, setPackage] = useState({});
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



    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return(
        <div>
            <div ref={componentRef}>
                <div class="adminWrapper">
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
                                    <div class="email">Email:<span class="span">bytheminute@gmail.com</span></div>
                                    <div class="number">Contact :<span class="span">011-5623896</span></div>
                                </div>
                            </div>
                        </div> 
                        <div class="billing-invoice">
                            <div class="title">
                                Package Report
                            </div>
                            <div class="des">
                                <p class="code">
                                    #1236745-CDEJ763
                                </p>
                                <p class="issue">Issued: <span>May, 24, 2022</span></p>
                            </div>
                        </div>
                        <div class="table">
                            <table>
                                <tr class="titleData">
                                    <th>Customer & Package Details</th>
                                </tr>
                                <tr class="fetchData">
                                    <td>Name - {packagePDF.cusFirstName} {packagePDF.cusLastName}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Email - {packagePDF.cusEmail}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Address - {packagePDF.cusAddress}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Contact No - {packagePDF.cusConNumber}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Package Location - {packagePDF.pacLocation}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Package Type -{packagePDF.pacType} </td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Estimated Date -{packagePDF.pacEsstimatedDate}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Package Weight - {packagePDF.pacWeight}</td>
                                </tr>
                                <tr class="titleData">
                                    <th>Shop Details</th>
                                </tr>
                                <tr class="fetchData">
                                    <td>Shop Name - {packagePDF.shopName}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Pickup Date - {packagePDF.shopPickUpDate}</td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Shop Contact - {packagePDF.shopConNumber}</td>
                                </tr>
                                <tr class="titleData">
                                    <th>Delivery Details</th>
                                </tr>
                                <tr class="fetchData">
                                    <td>Deliver By - {packagePDF.dvName} </td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Vehicle Number - {packagePDF.dvVehicalNumber} </td>
                                </tr>
                                <tr class="fetchData">
                                    <td>Delivery Person ID -{packagePDF.dvNIC}</td>
                                </tr>
                            </table>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="pdfBtn">
                <a  class="btnbtnAbtnE"  onClick={handlePrint} type="submit">Generate PDF</a>
            </div>
        </div>
    )

      
}

    
export default GetPDF;