import React, { useEffect, useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios';

const CreateEmployee = ()=>{
      
        //employee edit page navigation
        // const navigate = useNavigate();
        // const onSubmit = () =>{
        //     navigate("/EditEmployee");
        // }

        //add employee page navigtion
        const empnavigate = useNavigate();
        const empsubmit = async (e)=>  {
          empnavigate("/AddEmployee");
        }

        //Data retriving funtion
        const[employees, setEmployees] = useState([]);

      // GET  Details FROM DB
        const [query,setQuery] = useState("");
    

        
        //get all employee details
        useEffect(()=> {
            function getEmployee(){
                axios.get(`http://localhost:8080/employee/viewEmp/?q=${query}`).then((res) =>{

                    console.log(res.data);
                    setEmployees(res.data);
                    
                }).catch((err) => {
                    alert(err.message);
                })
            }
            
            if(query.length === 0 || query.length > 1) getEmployee();;
        }, [query])

        // DELETE FUNCTION
        const onDelete =(id)=>{
            axios.delete(`http://localhost:8080/employee/deleteEmp/${id}`).then((res)=>{
                //getWManagers();
                axios.get("http://localhost:8080/employee/").then((res) =>{
                alert("Delete Successfully");
                    console.log(res.data);
                    setEmployees(res.data);
                }).catch((err) => {
                    alert(err.message);
                })
                window.location.href = "/CreateEmployee";
            })
        }



    return(
    <div>
       <div class="container">
       <h4 class="m-0 font-weight-bold text-primry">Add New Employee</h4>
       <hr/>
       <div class="card shodow mb-4">
           <div class="card-header py-3">
               <h6 class="m-0 font-weight-bold text-primry">
                    <div class="search-container">
                        <form action="">
                            <input type="text" placeholder="Search.." class="searchBox" 
                            name="search" 
                            onChange={(e)=> setQuery(e.target.value)}
                            />
                        </form>
                    </div>
               </h6>
               <form onSubmit={empsubmit}>
                 <button type="submit" class="btn btnA btnE">
                    Add Employee
                </button>
                </form>
           </div>
           <div class="card-body">
               <div class="table-responsive">
                   <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                       <thead>
                           <tr>
                               <th scope="col">Employee Name</th>
                               <th scope="col">Nic</th>
                               <th scope="col">Date Of Birth</th>
                               <th scope="col">Address</th>
                               <th scope="col">Contact No</th>
                               <th scope="col">Email</th>
                               <th scope="col">User Roll</th>
                               <th scope="col">User Name</th>
                               <th scope="col">EDIT</th>
                               <th scope="col">DELETE</th>
                               <th scope="col">PAYAMENT</th>

                           </tr>
                       </thead>
                       <tbody>
                           {employees.length >0?(employees.map((employees)=>(
                               <tr>
                               <td>{employees.empname}</td>
                               <td>{employees.nic}</td>
                               <td>{employees.dob}</td>
                               <td>{employees.address}</td>
                               <td>{employees.contact_no}</td>
                               <td>{employees.email}</td>
                               <td>{employees.user_roll}</td>
                               <td>{employees.username}</td>
                               <td>
                                
                                <a  class="btn btnA btnE"  href={`http://localhost:3000/EditEmployee/${employees._id}`} type="submit">EDIT</a>

                               </td>
                               <td>
                                   <button type="button" class="btn btnI btnD" onClick={()=>{onDelete(employees._id)}}>DELETE</button>
                               </td>
                               <td>
                                   <a  class="btn btnA btnE"  href={`http://localhost:3000/AddPayment/${employees._id}`} type="submit">SALARY</a>
                               </td>
                           </tr>
                           ))
                           ):(
                            <h3>No details found</h3>
                           )}
                       </tbody>
                   </table>
               </div>
           </div>
       </div>     
      </div>
    </div>
    )


}

export default CreateEmployee;