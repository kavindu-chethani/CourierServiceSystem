import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import './style.css'

const Packages = () =>{


    //DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const[packages,setPackages] = useState([]);
 
    useEffect(()=> {
        function getPackages(){
            axios.get("http://localhost:8080/package/").then((res) =>{
                console.log(res.data);
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
       getPackages();
    }, [])









    //------------------------form------------------------//
        return(
            <div>
                <div class = "packageList">
                    <Sidebar/>
                <div class="adminContainer">
           
       <h3 class="m-0 font-weight-bold text-primry">PACKAGE DETAILS</h3>
       <hr/>
       <div class="card shodow mb-4">
           <div class="card-header py-3">
               <h6 class="m-0 font-weight-bold text-primry">
               </h6>
           </div>
           <div class="card-body">
               <div class="table-responsive">
                   <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                       <thead>
                           <tr>
                               <th scope="col">Customer name</th>
                               <th scope ="col">Contact No</th>
                               <th scope="col">Package Type</th>
                               <th scope="col">Weight(Kg)</th>
                               <th scope="col">Estimated Date</th>
                               <th scope="col">Shop Name</th>
                               <th scope="col">VIEW MORE</th>
                           </tr>
                       </thead>
                       <tbody>
                       {packages.length >0 ? (packages.map((packages)=>(
                           <tr>
                               <td>{packages.cusFirstName}</td>
                               <td>{packages.cusConNumber}</td>
                               <td>{packages.pacType}</td>
                               <td>{packages.pacWeight}</td>
                               <td>{packages.pacEsstimatedDate}</td>
                               <td>{packages.shopName}</td>
                               <td>
                                
                                    <a class="btn btnA btnE" href={`http://localhost:3000/ViewPackage/${packages._id}`} type="submit">View More</a>
                                               {/* <a  class="btn btnA btnE"  href={`http://localhost:3000/EditWManager/${wmanagers._id}`} type="submit">EDIT</a> */}
                                
                               </td>
                               
                           </tr>
                            ))
                            ): (
                              <h3>No details found</h3>
                            )}
                       </tbody>
                   </table>
               </div>
           </div>
       </div>
                </div>
                </div>

            </div>
        );
    }

                      
export default Packages;