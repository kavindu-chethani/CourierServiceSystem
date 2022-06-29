import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import './style.css'
/* import {useHistory} from "react-router-dom"; */



const SellerRqst = () =>{
    const navigate = useNavigate();
    const onSubmit = () =>{
        navigate("/SellerList");
    }



    //DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const [query,setQuery] = useState("");
    const[sellerrqs, setSellerrqs] = useState([]);
 
    useEffect(()=> {
        function getSellerrqs(){
            axios.get(`http://localhost:8080/sellerRQ/?q=${query}`).then((res) =>{
                console.log(res.data);
                setSellerrqs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        if(query.length === 0 || query.length > 1) getSellerrqs();
    }, [query])


    // DELETE FUNCTION
    const onDelete =(id)=>{
        
        axios.delete(`http://localhost:8080/sellerRQ/delete/${id}`).then((res)=>{
            alert("Delete Successfully");
                //getWManagers();
               axios.get(`http://localhost:8080/sellerRQ/?q=${query}`).then((res) =>{
                console.log(res.data);
                setSellerrqs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        })
          
    }


    //----------------send data to the seller list------------------//

        const[seller_id,setID] = useState("");
        const[fullname,setName] = useState("");
        const[email,setEmail] = useState("");
        const[contact,setContact]= useState("");
        const[shop_name,setShop_name]= useState("");
        const[shop_address,setShop_address]= useState("");
        const[district,setDistrict]= useState("");
        
         function sendData(e){  //create function to submit button
            e.preventDefault();
            
            const newSeller ={ //set data values to object
               seller_id,
               fullname,
               email,
               contact,
               shop_name,
               shop_address,
               district
            }

            axios.post("http://localhost:8080/sellerList/add", newSeller).then(()=>{
               
               alert("New Seller added");
               setID("");
               setName("");
               setEmail("");
               setContact("");
               setShop_name("");
               setShop_address("");
               setDistrict("");
               window.location.reload();
            }) 
            .catch((err)=>{

               alert(err)
            })
             
         }




    return(
    <div class = "sellerRqst">
        <Sidebar/> 
        <div class="adminContainer">
            {/*<!--Topic--> */}            
            <h3 class="m-0 font-weight-bold text-primry">ACCEPTING SELLER REQUESTS</h3>
                <hr/> {/*<!--horizontal line--> */}   
                <div class="card shodow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primry">
                            <div class="search-container">
                                <form action="/action_page.php">
                                    <input type="text"
                                            placeholder="Search.." 
                                            class="searchBox" 
                                            name="search" 
                                            onChange={(e) => setQuery(e.target.value)}/>
                                </form>
                            </div> 
                        </h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th scope="col">Seller ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact No</th>
                                        <th scope="col">Shop Name</th>
                                        <th scope="col">Shop Address</th>
                                        <th scope="col">District</th>
                                        <th scope="col">APPROVE</th>
                                        <th scope="col">IGNORE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {sellerrqs.length >0 ? (sellerrqs.map((sellerrqs)=>(  
                                    <tr>
                                        <td  onChange={(e) =>{
                                            setID(e.target.value);
                                            }}>{sellerrqs.seller_id}</td>
                                            
                                        <td  onChange={(e) =>{
                                            setName(e.target.value);
                                            }}>{sellerrqs.fullname}</td>

                                        <td onChange={(e) =>{
                                            setEmail(e.target.value);
                                            }}>{sellerrqs.email}</td>

                                        <td onChange={(e) =>{
                                            setContact(e.target.value);
                                            }}>{sellerrqs.contact}</td>

                                        <td onChange={(e) =>{
                                            setShop_name(e.target.value);
                                            }}>{sellerrqs.shop_name}</td>

                                        <td onChange={(e) =>{
                                            setShop_address(e.target.value);
                                            }}>{sellerrqs.shop_address}</td>

                                        <td onChange={(e) =>{
                                            setDistrict(e.target.value);
                                            }}>{sellerrqs.district}</td>
                                        <td>
                                            <button type="submit" class="btn btnA" >APPROVE</button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btnI" onClick={()=>{onDelete(sellerrqs._id)}}>IGNORE</button>
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
                <div class="center">
                    <form action="SellerList.html">
                        <button onClick={onSubmit} type="submit" class="btn btnA viewbtn">
                            VIEW APPROVED SELLER DETAILS
                        </button>
                    </form>
                </div>
        </div>
    </div>
    )
}

export default SellerRqst;