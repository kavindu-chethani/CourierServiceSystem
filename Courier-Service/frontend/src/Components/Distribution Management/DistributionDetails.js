import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Pdf from 'react-to-pdf';




export default function DistributionDetails(){
    const[distributions, setDistributions]=useState([]);
    const[query,setQuery]=useState("")

    function getReturn(e){
        setQuery(e.target.value)
        console.log(query)
       axios.get(`http://localhost:8090/distribution/search/${query}`).then((res)=>{
             console.log(res.data);
             setDistributions(res.data);
         }).catch((err)=>{
             console.log(err.message);
                 })
         
     }

     useEffect(()=>{
        loadUser()
        },[]);



   
        const loadUser =() =>{
        axios.get("http://localhost:8090/distribution/").then((res)=>{
            
            setDistributions(res.data);
        }).catch((err)=>{
            alert(err.message);
                })
        
    }
    
    
        

    const ref=React.createRef();//genarate report define veribale ref

return(

   
<div className="app">
<div className="post" ref={ref}>
<input type="text" placeholder="Search" onChange={getReturn} class="Search box"  name="Search"/>
<table className="container">

  
<thead>
  <tr>
   <th scope ="col">PackageId</th>
    <th scope="col">Date</th>
    <th scope="col">District</th>
    <th scope="col">Warehouse</th>
   
  </tr>
</thead>
<tbody>

{distributions.map((distributionData)=>(
      //<div key={returnitemsData.id}>

<tr>
    
<td>{distributionData.PackageId}</td>
<td>{distributionData.Date}</td>
<td>{distributionData.District}</td>
<td>{distributionData.Warehouse}</td>



<td>
 

 
</td>
</tr>

))} 

</tbody>

</table>
</div>

<button className="btn btn-success"><a href ="/add" style={{textDecoration:'none',color:'white'}}>Add</a></button>

<Pdf targetRef={ref} filename="post1.pdf">
            {({ toPdf }) => <button onClick={toPdf} style={{background:'Blue'}}>pdf</button>}
        </Pdf>

</div>




    
)
}
