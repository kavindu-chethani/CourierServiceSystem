import React,{ useRef,useState,useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Payment/PaySlip.css";


const Payslip = ()=>{

       //Data retriving funtion
       const[employees, setEmployees] = useState([]);

       //get value from id 
       const {id} = useParams();
       const [empname, setEmpname] = useState("");
       const [user_roll, setUser_roll] = useState("");


    //get value from id 
    useEffect(() => {
        axios.get(`http://localhost:8080/employee/getEmp/${id}`).then(res => {
            setEmpname(res.data.employee.empname)
            setUser_roll(res.data.employee.user_roll)
            //  console.log('iiiiiiiiiiiiiiiiiiii',res.data.employee);
            })		
        }, [])

    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <div>
            <a  class="btn btnA btnE"  onClick={handlePrint} type="submit">Get PDF</a>
            <div ref={componentRef}>
            <div class="float__start">
              <h3 class="card-title mb-0">Payslip</h3>
            </div>
            <hr/>
                <div class="float__infoss">
                <div className="container">   
                <div class="row">
                    <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                        <div class="row">
                            <div class="receipt-header">
                                <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                                    <div class="receipt-right">
                                        <h5>BY THE MINUTE </h5>
                                        <p>0702298135<i class="fa fa-phone"></i></p>
                                        <p>employee@gmail.com <i class="fa fa-envelope-o"></i></p>
                                        <p>Sri Lankan<i class="fa fa-location-arrow"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="receipt-header receipt-header-mid">
                                <div class="col-xs-4 col-sm-4 col-md-4">
                                <input type="text" name="empname" class="input"  value={empname} onChange={(e)=>{setEmpname(e.target.value);}} />
                                <input type="text" name='user_roll' value={user_roll} onChange={(e)=>{setUser_roll(e.target.value);}}/> 
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-right">
                                        <p>
                                            <strong>Total Amount: </strong>
                                        </p>
                                        <p>
                                            <strong>Late Fees: </strong>
                                        </p>
                                        <p>
                                            <strong>Payable Amount: </strong>
                                        </p>
                                        <p>
                                            <strong>Balance Due: </strong>
                                        </p>
                                        </td>
                                        <td>
                                        <p>
                                            <strong><i class="fa fa-inr"></i> 65,500/-</strong>
                                        </p>
                                        <p>
                                            <strong><i class="fa fa-inr"></i> 500/-</strong>
                                        </p>
                                        <p>
                                            <strong><i class="fa fa-inr"></i> 1300/-</strong>
                                        </p>
                                        <p>
                                            <strong><i class="fa fa-inr"></i> 9500/-</strong>
                                        </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-right"><h2><strong>Total: </strong></h2></td>
                                        <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i> 31.566/-</strong></h2></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="row">
                            <div class="receipt-header receipt-header-mid receipt-footer">
                                <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                                    <div class="receipt-right">
                                        <p><b>Date :</b> 24 may 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}



export default Payslip;