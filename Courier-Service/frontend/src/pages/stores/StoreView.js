import React from "react";
import {useRef, useState, useEffect} from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import "./tabel.css"; 
import { useReactToPrint } from "react-to-print";
import Header from '../Home-Page/Header';
import Footer from '../Home-Page/Footer';

export default function StoreView(){


const storenavigate = useNavigate();


    const submit = async (e)=>  {
      storenavigate("/AddStore");
    }
    const edit = async (e)=>  {
      edit("/AddStore");
    }
    const pickup = async(e)=>{
      storenavigate("/Pickup");
    }
    const generate = async(e)=>{
      storenavigate("/Pdf");
    }




const [stores, setStores]=useState([]);

useEffect(()=>{
function getAllStores(){
    axios.get("http://localhost:8080/Store/get").then((res)=>{
            console.log(res.data);
            setStores(res.data.Store);
        }).catch((err)=>{
            alert(err.message);
        })
    }
    getAllStores();

}, [])


const dataList = [...stores];
console.log("adfgh", dataList);

const dataArr=[];

//console.log(dataList.existingSt[0])
//delete

const onDelete =(id)=>{
        
  axios.delete(`http://localhost:8080/Store/delete/${id}`).then((res)=>{
      alert("Delete Successfully");
          //get();
          axios.get("http://localhost:8080/Store/").then((res) =>{
          console.log(res.data);
          setStores(res.data);
      }).catch((err) => {
          alert(err.message);
      })
  })
}
//DATA RETRIEVING FUNCTION
    // GET WAREHOUSE MANAGER Details FROM DB
    const [query,setQuery] = useState("");
   
 
    useEffect(()=> {
        function getStores(){
            axios.get(`http://localhost:8080/Store/?q=${query}`).then((res) =>{
                console.log(res.data);
                setStores(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        if(query.length === 0 || query.length > 1) getStores();
    }, [query])

return (
  <div>
  
<div className="container">   
<hr></hr>

{/* header cards */}

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Add new packages to store</h5>
        <p class="card-text">After pick up packages we add packages to stores</p>
        <form onSubmit={submit}>
        <button type="submit" className="ui button yellow" >Add packages to Store</button>
        </form>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
       
        <h5 class="card-title">Packages pick up from sellers</h5>
        <p class="card-text">Here we go to add delivery boy to pick up packages from sellers</p>
        
        <form onSubmit={pickup}>
        <button  type="submit" className="ui button yellow" >Go to pick up page</button>
        </form>
      </div>
    </div>
  </div>
</div>

<h3>Store Managment </h3>

{/* tabel for store*/}
<div className="card shodow mb-4">        
        <div className="card-body">
            {/* search  */}
            <div class="input-group">
             <div class="form-outline">
                <input type="search" 
                name="search"
                 id="form1" 
                 class="form-control" 
                 placeholder="search" 
                  onChange={(e)=>setQuery(e.target.value)}/>
                </div>
                <button type="button" className="ui button yellow">search</button>
               
 
</div>
        <hr></hr>
            <div className="table-responsive">
            <div>
           
            { <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Store ID</th>
                                            <th scope="col">Package ID</th>
                                            <th scope="col">Delivery District</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">EDIT</th>
                                            <th scope="col">DELETE</th>
                                            <th scope="col">PRINT</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {dataList.length >0 ? (dataList.map((stores)=>(
                                        <tr>
                                        <td>{stores.store_Id}</td>
                                        <td>{stores.package_Id}</td>
                                        <td>{stores.delivery_District}</td>
                                        <td>{stores.weight}</td>
                                        <td>{stores.date}</td>
                                        <td>
                                        <a  className="ui button yellow"  href={`http://localhost:3000/EditStore/${stores._id}`} type="submit">EDIT</a>
                                        </td>
                                        <td>
                                            <button type="button" className="ui button yellow" onClick={()=>{onDelete(stores._id)}}>DELETE</button>
                                        </td>
                                        <td>
                                        <a  className="ui button yellow"  href={`http://localhost:3000/Pdf/${stores._id}`} type="submit">PRINT</a>
                                        </td>
                                         </tr>   
                                      ))
                                      ): (
                                        <p>No details found</p>
                                      )}
                                    </tbody>
                                </table> }
                    </div>  
            </div>
        </div>

    </div>
    </div>
</div> 

);}

   


