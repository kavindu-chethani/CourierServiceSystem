
import React,{useState,useEffect } from 'react';
import axios from 'axios';
// import PDF from './PDF';
import Pdf from 'react-to-pdf';



export default function ReturnItemDetails(){
  const[query,setQuery]=useState("");
    const[returnitems, setReturnitems]=useState([]);

    
    function getReturn(e){
      setQuery(e.target.value)
      console.log(query)
     axios.get(`http://localhost:8070/returnitem/search/${query}`).then((res)=>{
           console.log(res.data);
           setReturnitems(res.data);
       }).catch((err)=>{
           console.log(err.message);
               })
       
   }
  


useEffect(()=>{
  loadUser()
},[])


function loadUser(){
      axios.get("http://localhost:8070/returnitem/").then((res)=>{
        console.log(res.data);
          setReturnitems(res.data);
      }).catch((err)=>{
        console.log(err.message);
            })
          } 



function Delete(id){
    axios.delete(`http://localhost:8070/returnitem/delete/${id}`)
    .then(
loadUser()
    ) 
}



const ref=React.createRef();//genarate report define veribale ref
return(

<div className="app">
 
<input type="text" placeholder="Search" onChange={getReturn} class="Search box"  name="Search"/>
<div className="Post" ref={ref}>
<table className ="container">
  
  
<thead>
  <tr>
   <th scope ="col">returnitemid </th>
    <th scope="col">sellerid</th>
    <th scope="col">sellername</th>
    <th scope="col">sellercontatnumber</th>
    <th scope="col">customername</th>
    <th scope="col">customercontactnumber</th>
    <th scope="col">reason</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>

{returnitems.map((returnitemsData)=>(
      //<div key={returnitemsData.id}>

<tr key={returnitemsData.id}>
    
<td>{returnitemsData.returnitemid}
</td>
<td>{returnitemsData.sellerid}</td>
<td>{returnitemsData.sellername}</td>
<td>{returnitemsData.sellercontatnumber}</td>
<td>{returnitemsData.customername}</td>
<td>{returnitemsData.customercontactnumber}</td>
<td>{returnitemsData.reason}</td>


<td>
 

  <a className="btn btn-warning" href={`/update/${returnitemsData._id}`}>
    <i className="fas fa-edit"></i>Update
  </a>

 
   
  <button  onClick={() => Delete(returnitemsData._id)} className="btn btn-danger">Delete</button> 
  
</td>
</tr>

))} 

</tbody>
</table>
</div>
<button className="btn btn-success"><a href ="/add" style={{textDecoration:'none',color:'white'}}>Add</a></button>

<Pdf targetRef={ref} filename="post.pdf">
            {({ toPdf }) => <button onClick={toPdf} style={{background:'Blue'}}>pdf</button>}
        </Pdf>


</div>




    
);
}





