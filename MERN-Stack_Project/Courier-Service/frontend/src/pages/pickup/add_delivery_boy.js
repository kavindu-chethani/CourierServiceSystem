import React, {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function AddtoPickup(){
  const [ID, setId] = useState("");
  const [pickups, setPickups]=useState([]);
  const[delivery_member, setdelivery_member]= useState(" ");

  //add
  function sendData(e){

    e.preventDefault();

    const newboy={
     
      delivery_member,

      
    }

    axios.post("http://localhost:8080/PickUp/add", newboy).then(()=>{
      alert("delivery boy Added");
    }).catch((err)=>{
      alert(err)
    })

   console.log(newboy);
  }
//view
  const getpickupByID = async (ID) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get(`http://localhost:8080/PickUp/get/${ID}`, config);
        setPickups(res.data.PickUp);
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
        getpickupByID(id);
      }catch (err) {
        console.error("error", err);
      }
}, [id]);


const handleInputChange = (event) => {
   setPickups({
       ...pickups,
       [event.target.name]: event.target.value,
   });
};

/*  UPDATE DATA */

const handleEdit = async (id) =>{
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

try {
    await axios.put(`http://localhost:8080/PickUp/update/${ID}`,
        pickups,
        config
    );
    setPickups({
      store_Id:pickups.store_Id,
      package_Id: pickups.package_Id,
      shop_Name:pickups.shop_Name,
      seller_District:pickups.seller_District,
      seller_Address:pickups.seller_Address,
      contact_no:pickups.contact_no,
      estimate_date:pickups.estimate_date,
      delivery_member:pickups.delivery_member
    });
 
    window.location.reload();
} catch (err) {
  console.error("error", err);
  }



};

  return(
   
    <div  className="content"> 
    <h2>Add delivery boy to Pick up items</h2>
            
            <hr></hr>
            <div className="ui main">
                   
            <form className="ui form" onSubmit={sendData}>
                      <div className="field">
                        <label>Store Id</label>
                        <input
                          type="text"
                          value={pickups.store_Id}
                          name="Store_Id"
                          placeholder="Store Id"
                          onChange={handleInputChange}/>

                      </div>
                      <div className="field">
                        <label>Package Id</label>
                        <input
                          type="text"
                          value={pickups.package_Id}
                          name="package_Id"
                          placeholder="package_Id"
                          onChange={handleInputChange}
                        />
                        
                      </div>

                      <div className="field">
                        <label>Shop Name</label>
                        <input
                          type="text"
                          value={pickups.shop_Name}
                          name="shop_Name"
                          placeholder="shop name"
                          
                          onChange={handleInputChange}
                        />
                        
                      </div>
                      <div className="field">
                        <label>Seller District</label>
                        <input
                          type="text"
                          name="seller_District"
                          value={pickups.seller_District}
                          placeholder="Weight"
                          onChange={handleInputChange}
                        />
                        
                      </div>
                      <div className="field">
                        <label>Seller Address</label>
                        <input
                          type="text"
                          name="seller_Address"
                          value={pickups.seller_Address}
                          placeholder="Seller Address"
                          onChange={handleInputChange}
                        />
                        
                      </div>

                      <div className="field">
                        <label>contact no</label>
                        <input
                          type="text"
                          name="contact_no"
                          value={pickups.contact_no}
                          placeholder="Contact no"
                          onChange={handleInputChange}
                        />
                        
                      </div>

                      <div className="field">
                        <label>Estimate Date</label>
                        <input
                          type="text"
                          name="estimate_date"
                          value={pickups.estimate_date}
                          placeholder="Estimate date to deliver"
                          onChange={handleInputChange}
                        />
                        
                      </div>
{/* 
                      <div className="field">
                        <label>delivery boy name</label>
                        <input
                          type="text"
                          name="delivery_boy_name"
                          value={delivery_member}
                          placeholder="Delivery boy name"
                          onChange={(e) => setdelivery_member(e.target.value) && handleInputChange }
                        />
                        
                      </div> */}

                      <div class="inputfield">
                <label>Delivery boy name</label>
                <div class="custom_select">
                    <select onChange={(e)=>{setdelivery_member(e.target.value);}} >
                      <option value="">Select</option>
                      <option value="Che">Che</option>
                      <option value="kavindu">kavindu</option>
                      <option value="Sliva">Sliva</option>
                      <option value="abs">abs</option>
                    </select>
                  </div>
             </div>

                      <button className="ui button yellow" onClick={() => handleEdit(id)}>Add </button>
                    </form>
                  </div>
                <div>
               
                </div>
                </div>


    );
}