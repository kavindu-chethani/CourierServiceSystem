import React, {useState} from "react";
import "./AddStore.css";
import axios from "axios";
import validation from "./validation";

export default function AddStore(){
  const [errors, setErrors]=useState({})
const[stores, setValues]=useState({
  store_Id:"",
  package_Id:"",
  delivery_District:"",
  weight:"",
  date:"",
});

const[store_Id, setstore_Id]= useState(" ");
const[package_Id, setpackage_Id]= useState(" ");
const[delivery_District, setdelivery_District]= useState(" ");
const[weight, setweight]= useState(" ");
const[date, setdate]= useState(" ");

function sendData(e){
    e.preventDefault();

    const newStore={
      store_Id,
      package_Id,
      delivery_District,
      weight,
      date
    }

    axios.post("http://localhost:8080/Store/add", newStore).then(()=>{
      alert("store Added");
    }).catch((err)=>{
      alert(err)
    })

   console.log(newStore);

}

  return(
   
        <div  className="content"> 
    <h2>Add Items to Store</h2>
            
            <hr></hr>
            <div className="ui main">
                   
            <form className="ui form" onSubmit={sendData}>
                      <div className="field">
                        <label>Store Id</label>
                        <input
                          type="text"
                          value={store_Id}
                          name="Store_Id"
                          placeholder="ex:st01"
                          // pattern="[a-za-z0-9]{4}"
                          onChange={(e) => setstore_Id(e.target.value)}
                          required/>
                      </div>
                      {errors.store_Id && <p className="error">{errors.store_Id}</p>}

                      <div className="field">
                        <label>Package Id</label>
                        <input
                          type="text"
                          value={package_Id}
                          name="package_Id"
                          placeholder="Pc01"
                          // pattern="[a-za-z0-9]{4}"
                          onChange={(e) => setpackage_Id(e.target.value)}
                          required/>  
                      </div>
                      {errors.package_Id && <p className="error">{errors.package_Id}</p>}

                      <div className="field">
                        <label>Delivery District</label>
                        <input
                          type="text"
                          value={delivery_District}
                          name="delivery_District"
                          placeholder="Delivery District"
                          onChange={(e) => setdelivery_District(e.target.value)}
                          required/>
                        {errors.delivery_District && <p className="error">{errors.delivery_District}</p>}
                        
                      </div>
                      <div className="field">
                        <label>Weight</label>
                        <input
                          type="text"
                          name="weight"
                          value={weight}
                          placeholder="Weight"
                          onChange={(e) => setweight(e.target.value)}
                          required
                        />
                      </div>
                      {errors.weight && <p className="error">{errors.weight}</p>}

                      <div className="field">
                        <label>Date</label>
                        <input
                          type="text"
                          name="date"
                          value={date}
                          placeholder="Date"
                          onChange={(e) => setdate(e.target.value)}
                          required
                        /> 
                      </div>

                      <button className="ui button yellow">Add</button>
                    </form>
                  </div>
                <div>
               
                </div>
                </div>


    );
}