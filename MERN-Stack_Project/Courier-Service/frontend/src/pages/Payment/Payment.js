import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Payment/Payment.css";


const Payment = ()=>{

    //Data retriving funtion
     const[employees, setEmployees] = useState([]);
     
    //get value from id 
    const {id} = useParams();
    const [empname, setEmpname] = useState("");
    const [user_roll, setUser_roll] = useState("");
    
    //get value from id 
    useEffect(() => {
        axios.get(`http://localhost:8080/employee/getEmp/${id}`).then(res => {
            
            setEmployees(res.data);
            
            setEmpname(res.data.employee.empname);
            setUser_roll(res.data.employee.user_roll);
            // console.log(res.data.employee);
            })		
        }, [])
       
        
        //add salary data to database
        const [basicsal,setBasicsal] = useState("");
        const [overtime,setOvertime] = useState("");
        const [rphours, setRphours] = useState("");
        const [bonus, setBonus] = useState("");
        const [allowance, setAllowance] = useState("");
        const [loans, setLoans] = useState("");
        const [employeeepf, setEmployeeepf] = useState("");
        const [employeerepf, setEmployeerepf] = useState("");
        const [employeeretf, setEmployeeretf] = useState("");
        const [totsal, setTotalsal] = useState("");
        
        let sal=0,empepf=0,eerepf=0,empetf=0;
        
        sal = (parseInt(basicsal)+parseInt(overtime) * parseInt(rphours)+parseInt(bonus)+parseInt(allowance))-(parseInt(loans)+parseInt(empepf));
        
        empepf =  8/100 * parseInt(basicsal);
        eerepf = 12/100 * parseInt(basicsal);
        empetf = 3/100 * parseInt(basicsal);
        

    function sendData(e){
        //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        e.preventDefault(); 
        const empSalary={
            empname,
            user_roll,
            basicsal,
            overtime,
            rphours,
            bonus,
            allowance,
            loans,
            employeeepf,
            employeerepf,
            employeeretf,
            totsal
              }
              axios.post("http://localhost:8080/empsal/addempsalary",empSalary).then(()=>{
                 alert("Salary Added");
              }).catch((err)=>{
                 alert(err.message);
              })
              window.location.href = "";
     }

    return(
        <div>
            <div class="container01">
                <form onSubmit={sendData}>
                    <div class="row01">
                        <div class="col01">
                            <h3 class="title01">Permanent Employee salary</h3>
                            <div class="inputBox">
                                <span>full name :</span>
                                <input type="text" name="empname" class="input"  value={empname} onChange={(e)=>{setEmpname(e.target.value);}} readonly="readonly"/>
                            </div>
                            <div class="inputBox">
                                <span>user role :</span>
                                <input type="text" name='user_roll' value={user_roll} onChange={(e)=>{setUser_roll(e.target.value);}} readonly="readonly"/>
                            </div>
                            <div class="inputBox">
                                <span>Basic Salary :</span>
                                <input type="number" placeholder="Enter Basic Salary :" name='basicsal' min="35000" max="135000"  onChange={(e)=>{setBasicsal(e.target.value);}} required/>
                            </div>
                            <div class="inputBox">
                                <span>over time :</span>
                                <input type="number" placeholder="Enter over time :" name='overtime' min="0" max="5"  onChange={(e)=>{setOvertime(e.target.value);}} required/>
                            </div>
                            <div class="inputBox">
                                <span>Rate per hours :</span>
                                <input type="number" placeholder="Enter Rate per hours :" name='rphours'  min="0" max="200"  onChange={(e)=>{setRphours(e.target.value);}}/>
                            </div>
                            <div class="inputBox">
                                <span>Bonus :</span>
                                <input type="number" placeholder="Enter Bonus :" name='bonus' min="0"  onChange={(e)=>{setBonus(e.target.value);}}/>
                            </div>
                            <div class="inputBox">
                                <span>Allowance :</span>
                                <input type="number" placeholder="Enter Allowance :" name='allowance' min="0"  onChange={(e)=>{setAllowance(e.target.value);}}/>
                            </div>
                        </div>
                        <div class="col01">
                            <h3 class="title01">Deductions</h3>
                        
                            <div class="inputBox">
                                <span>Loans :</span>
                                <input type="number" name='loans' placeholder="Enter Loans" min="0" onChange={(e)=>{setLoans(e.target.value);}}/>
                            </div>
                            {/* <div class="inputBox">
                                <label class="check">
                                <input type="checkbox" value={first} onChange={(e)=>handleChange("first")} />
                                <span class="checkmark"></span>
                                Employee EPF</label>
                            </div> */}
                            <div class="inputBox">
                                <span>Employee EPF Amount :</span>
                                <input type="number"  value={empepf || 0} name='employeeepf' onChange={(e)=>{setEmployeeepf(e.target.value);}}  readonly="readonly"/>
                            </div>
                            {/* <div class="inputBox">
                                <label class="check">
                                <input type="checkbox" value={second} onChange={(e)=>handleChange("second")}/>
                                <span class="checkmark"></span>
                                Employeer EPF</label>
                            </div> */}

                            <h3 class="title01">Employer Contributions</h3>
                            <div class="inputBox">
                                <span> EPF amount :</span>
                                <input type="number"  value={eerepf || 0} name='employeerepf' onChange={(e)=>{setEmployeerepf(e.target.value);}}  readonly="readonly"/>
                            </div>
                            {/* <div class="inputBox">
                                <label class="check">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                Employeer ETF</label>
                            </div> */}
                            <div class="inputBox">
                                <span> ETF amount</span>
                                <input type="number" value={empetf || 0}  name='employeeretf' onChange={(e)=>{setEmployeeretf(e.target.value);}} readonly="readonly"/>
                            </div>
                            <br></br>
                            <div class="inputBox">
                                <span>Total Amount :</span>
                                <input type="number" value={sal || 0} name='totsal' onChange={(e)=>{setTotalsal(e.target.value);}} readonly="readonly"/>
                            </div>
                        </div>
                    </div>
                    <button class="btn btnA btnE" type="submit" >Save</button>
                    <a  class="btn btnA btnE" href={`http://localhost:3000/Payslip/${id}`}  type="submit" >Payslip</a>
                    {/* <a  class="btn btnA btnE" href={`http://localhost:3000/Salaryslip/${id}`}  type="submit">Salslip</a> */}
                    {/* <a  class="btn btnA btnE" href={`http://localhost:3000/PaymentTable`}  type="submit">PAYMENT</a> */}
                </form>
            </div>        
        </div>
    )
}

export default Payment;