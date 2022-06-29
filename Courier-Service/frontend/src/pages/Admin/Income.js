import React from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import './style.css'

const Income = () =>{
    return(
        <div>
            <div class = "income">
                <Sidebar/>
            
             <div class="adminContainer">
   <h3 class="m-0 font-weight-bold text-primry">INCOME LIST</h3>
   <hr/>
   <div class="card shodow mb-4">
       <div class="card-header py-3">
           <h6 class="m-0 font-weight-bold text-primry">
           </h6>
       </div>
       <div class="card-body">
           <div class="table-responsive">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
                           <th scope="col">Payment ID</th>
                           <th scope="col">Payment Date</th>
                           <th scope="col">Payment Total(Rs)</th>
                           <th scope="col">Payment Method</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>PY0001</td>
                           <td>2022-03-08</td>
                           <td>1200.00</td>
                           <td>mastercard</td>
                       </tr>
                       <tr>
                           <td>PY0002</td>
                           <td>2022-03-10</td>
                           <td>1500.00</td>
                           <td>VISA</td>
                       </tr>
                       <tr>
                           <td>PY0003</td>
                           <td>2022-03-14</td>
                           <td>1350.00</td>
                           <td>mastercard</td>
                       </tr>
                       <tr>
                        <td>PY0004</td>
                        <td>2022-03-18</td>
                        <td>1400.00</td>
                        <td>mastercard</td> 
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
       <div class="center">
            <form>
                <div class="form-grouprow">
                    <label id="labelIncome"><b>Total Income</b></label>
                    <div class="IncomeView">
                        <input type="text" id="displayIncome" value="16000.00" readonly />
                    </div>
                </div>
            </form>
            <form action="#">
               <button type="button" class="btn btnA sRprtbtn">GENERATE INCOME REPORT</button>
            </form>
       </div>
</div>
</div>
        </div>

    );
    }
                              
export default Income;