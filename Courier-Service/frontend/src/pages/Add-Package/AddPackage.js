import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPackage = () => {

    const [formData, setFormData] = useState({
		cusFirstName: "",
		cusLastName: "",
		cusEmail: "",
		cusAddress: "",
		cusConNumber: "",

        pacLocation: "",
		pacType: "",
		pacEsstimatedDate: "",
		pacWeight: "",

        shopName: "",
        shopPickUpDate: "",
		shopAddress: "",
		shopConNumber: "",

        dvName: "",
		dvVehicalNumber: "",
		dvNIC: "",
		
	});


    const { cusFirstName, cusLastName, cusEmail, cusAddress, cusConNumber, pacLocation, 
            pacType, pacEsstimatedDate, pacWeight, shopName, shopPickUpDate, shopAddress, shopConNumber, dvName, dvVehicalNumber, dvNIC } = formData;

    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
        console.log("xxxx");
		e.preventDefault();
		const newPackage = {
			cusFirstName: cusFirstName,
			cusLastName: cusLastName,
			cusEmail: cusEmail,
			cusAddress: cusAddress,
			cusConNumber: cusConNumber,
            pacLocation: pacLocation,
			pacType: pacType,
			pacEsstimatedDate: pacEsstimatedDate,
			pacWeight: pacWeight,
			shopName: shopName,
            shopPickUpDate: shopPickUpDate,
            shopAddress: shopAddress,
			shopConNumber: shopConNumber,
			dvName: dvName,
			dvVehicalNumber: dvVehicalNumber,
			dvNIC: dvNIC,
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const body = JSON.stringify(newPackage);
			await axios.post("http://localhost:8080/package/add", body, config);
			setFormData({
				cusFirstName: "",
		        cusLastName: "",
		        cusEmail: "",
		        cusAddress: "",
		        cusConNumber: "",

                pacLocation: "",
		        pacType: "",
		        pacEsstimatedDate: "",
		        pacWeight: "",

                shopName: "",
                shopPickUpDate: "",
		        shopAddress: "",
		        shopConNumber: "",

                dvName: "",
		        dvVehicalNumber: "",
		        dvNIC: "",
			});
			window.location.reload();
		} catch (err) {
			console.error("error", err.response.data);
		}
	};


  return (

    <div>

    

    <div className='signIn'>
        <h3>Add Package</h3>
        <br />

    <form className="contact-form" onSubmit={(e) => onSubmit(e)}>

        <input
            type="text"
            name="cusFirstName"
            value={cusFirstName}
            placeholder="Enter your first name"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="cusLastName"
            value={cusLastName}
            placeholder="Enter your last name"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="email"
            name="cusEmail"
            value={cusEmail}
            placeholder="Enter your email"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="cusAddress"
            value={cusAddress}
            placeholder="Enter your Adrees"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="tel"
            name="cusConNumber"
            value={cusConNumber}
            placeholder="Enter your phone no."
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="pacLocation"
            value={pacLocation}
            placeholder="Enter your Package Location"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="pacType"
            value={pacType}
            placeholder="Enter your Package Type"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="pacEsstimatedDate"
            value={pacEsstimatedDate}
            placeholder="Enter Esstimate Date"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="number"
            name="pacWeight"
            value={pacWeight}
            placeholder="Enter your Package Weight"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="shopName"
            value={shopName}
            placeholder="Enter your Shop Name"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="shopPickUpDate"
            value={shopPickUpDate}
            placeholder="Enter Shop Pick Up Date"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="shopAddress"
            value={shopAddress}
            placeholder="Enter your Shop Address"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="tel"
            name="shopConNumber"
            value={shopConNumber}
            placeholder="Enter your Shop Contact Number"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="dvName"
            value={dvName}
            placeholder="Enter Delivery Boy Name"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="dvVehicalNumber"
            value={dvVehicalNumber}
            placeholder="Enter Delivery Vehical Num"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />

        <input
            type="text"
            name="dvNIC"
            value={dvNIC}
            placeholder="Enter Deliver Boy NIC"
            onChange={(e) => onChange(e)}
            required
        ></input>
        <br />
        <br />

        <button type="submit">Submit Package</button>

    </form>

    </div>


    

    </div>


  )
}

export default AddPackage