import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import EditWManager from './EditWManager';

const WMList = () =>{

    //add wmanager navigation function
    const navigate = useNavigate();
    const onSubmit2 = () =>{
        navigate("/AddWManager");
    }
 
    //DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const [query,setQuery] = useState("");
    const[wmanagers, setWManagers] = useState([]);
 
    useEffect(()=> {
        function getWManagers(){
            axios.get(`http://localhost:8080/wmanager/?q=${query}`).then((res) =>{
                console.log(res.data);
                setWManagers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        if(query.length === 0 || query.length > 1) getWManagers();
    }, [query])


    // DELETE FUNCTION
    const onDelete =(id)=>{
        
        axios.delete(`http://localhost:8080/wmanager/delete/${id}`).then((res)=>{
            alert("Delete Successfully");
                //getWManagers();
               axios.get(`http://localhost:8080/wmanager/?q=${query}`).then((res) =>{
                console.log(res.data);
                setWManagers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        })
          
    }

 
    
        return(
            <div>
                <div class = "wmlist">
                    <Sidebar/>
                    {/*<!-- {res.data.map(posts = --> */} 
                 <div class="adminContainer">
                    <h3 class="m-0 font-weight-bold text-primry">WAREHOUSE MANAGER LIST</h3>
                    <hr/>
                    <div class="card shodow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primry">
                                <div class="search-container">
                                    <form action="/action_page.php">
                                         <input type="text"
                                          placeholder="Search.." 
                                          class="searchBox" 
                                          name="search" onChange={(e) => setQuery(e.target.value)}/>
                                    </form>
                                </div> 
                            </h6>
                        </div>
                        <div class="card-body">
                            <div class="addWManager">
                                <form action="AddWManager.js">
                                    <button onClick={onSubmit2} type="submit" class="btn btnA addWMbtn">ADD WAREHOUSE MANAGER</button>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th scope="col">WManager ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">District</th>
                                            <th scope="col">EDIT</th>
                                            <th scope="col">DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                     {wmanagers.length >0 ? (wmanagers.map((wmanagers)=>(
                                         
                                        <tr>
                                            <td>{wmanagers.wm_id}</td>
                                            <td>{wmanagers.fullname}</td>
                                            <td>{wmanagers.email}</td>
                                            <td>{wmanagers.contact}</td>
                                            <td>{wmanagers.address}</td>
                                            <td>{wmanagers.district}</td>
                                            <td>
                                            <a  class="btn btnA btnE"  href={`http://localhost:3000/EditWManager/${wmanagers._id}`} type="submit">EDIT</a>
                                                    {/* <button href={`http://localhost:3000/EditWManager/${wmanagers._id}`} 
                                                */}
                                            </td>
                                            <td>
                                                <button type="button" class="btn btnI btnD" onClick={()=>{onDelete(wmanagers._id)}}>DELETE</button>
                                            </td>                                           
                                        </tr>
                                         //)}
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


export default WMList;

                  