import {useState, useEffect} from 'react';
import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import validation from "./validation";

function EditStore() {

const [stores, setStores]=useState([]);
const [ID, setId] = useState("");
const [errors, setErrors]=useState({})

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


const handleInputChange = (event) => {
   setStores({
       ...stores,
       [event.target.name]: event.target.value,

   });
};

/*  UPDATE DATA */

const handleEdit = async (id) => {
  setErrors(validation(stores));
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

try {
    await axios.put(`http://localhost:8080/Store/updateStore/${ID}`,
        stores,
        config
    );
    setStores({
      store_Id: stores.store_Id,
      package_Id: stores.package_Id,
      delivery_District: stores.delivery_District,
      weight: stores.weight,
      date: stores.date,
      
    });
 
    window.location.reload();
} catch (err) {
  console.error("error", err);
  }
};


return(
 
 
   <div>
      <div class="content">
         <form class="ui main">
            <div class="title" >
              <h2>Edit Store Details</h2> 
              <hr></hr>
            </div>
          
             <div class="ui form" >

               <div class="inputfield">
                  <label>Store ID</label>
                  <input input  name="store_Id" 
                  class="input" placeholder="ID"  
                  value={stores.store_Id} 
                  onChange={handleInputChange}/>
                  
               </div> 
               {errors.store_Id && <p className="error">{errors.store_Id}</p>}

               <div class="inputfield">
                  <label>Package ID</label>
                  <input input  name="package_Id" 
                  class="input" placeholder="Full Name" 
                  value={stores.package_Id} 
                  onChange={handleInputChange}/>
               </div>
               {errors.package_Id && <p className="error">{errors.package_Id}</p>}


               <div class="inputfield">
                  <label>Delivery District</label>
                  <input input name="delivery_District" 
                  class="input" 
                  placeholder="Delivery_District" 
                  value={stores.delivery_District} 
                  onChange={handleInputChange}/>
               </div>
               {errors.delivery_District && <p className="error">{errors.delivery_District}</p>}

               <div class="inputfield">
                  <label>Weight</label>
                  <input input  
                  name="weight" 
                  class="input" 
                  placeholder="weight" 
                  value={stores.weight} 
                  onChange={handleInputChange}/>
               </div>
               {errors.weight && <p className="error">{errors.weight}</p>}


               <div class="inputfield">
                  <label>Date</label>
                  <input input  
                  name="date" 
                  class="input" 
                  placeholder="date" 
                  value={stores.date} 
                  onChange={handleInputChange}/>
               </div>
               {errors.date && <p className="error">{errors.date}</p>}


            </div> 

             <div class="modal-footer">
               <button type="button" class="btn btnC" data-bs-dismiss="modal">CLOSE</button>
               <button type="submit" class="btn btnU"  onClick={() => handleEdit(id)} >UPDATE</button>
            </div> 
         </form>
      </div>
      </div>
 
);

}


export default EditStore;