import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import './style.css'



const SellerList = () =>{
    const navigate = useNavigate();
    const onSubmit = () =>{
        navigate("/EditSeller");
    }

    
    //DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const [query,setQuery] = useState("");
    const[sellerlists, setSellerlist] = useState([]);
 
    useEffect(()=> {
        function getSellers(){
            axios.get(`http://localhost:8080/sellerList/?q=${query}`).then((res) =>{
                console.log(res.data);
                setSellerlist(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        if(query.length === 0 || query.length > 1) getSellers();
    }, [query])



  
    return(
        <div>
            <div class = "sellerList">
                <Sidebar/>
                <div class="adminContainer">
                    <h3 class="m-0 font-weight-bold text-primry">APPROVED SELLER DETAILS</h3>
                    <hr/>
                    <div class="card shodow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primry">
                                <div class="search-container">
                                    <form action="/action_page.php">
                                        <input type="text" placeholder="Search.." class="searchBox" name="search"  onChange={(e) => setQuery(e.target.value)}/>               
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
                                            <th scope="col">EDIT</th>
                                            <th scope="col">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellerlists.length >0 ? (sellerlists.map((sellerlists)=>( 
                                            <tr>
                                                <td>{sellerlists.seller_id}</td>
                                                <td>{sellerlists.fullname}</td>
                                                <td>{sellerlists.email}</td>
                                                <td>{sellerlists.contact}</td>
                                                <td>{sellerlists.shop_name}</td>
                                                <td>{sellerlists.shop_address}</td>
                                                <td>{sellerlists.district}</td>
                                                <td>
                                                        <button onClick={onSubmit} type="submit" class="btn btnA btnE">EDIT</button>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btnI btnD ">DELETE</button>
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
                        <form action="#">
                            <button type="button" class="btn btnA sRprtbtn">GENERATE SELLER REPORT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    
}


export default SellerList;
