const PaymentTable = ()=>{
    return(
        <div>
            <div class="container">
       <h4 class="m-0 font-weight-bold text-primry"> Employee Salary</h4>
       <hr/>
       <div class="card shodow mb-4">
           <div class="card-header py-3">
               <h6 class="m-0 font-weight-bold text-primry">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." class="searchBox" name="search"/>
                            <button type="submit" class="btn btnA btnSearch">SEARCH</button>
                        </form>
                    </div>
               </h6>
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
                           </tr>
                       </thead>
                       <tbody>
                           
                               <tr>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td>
                                <a  class="btn btnA btnE"  type="submit">EDIT</a>
                               </td>
                               <td>
                                   <button type="button" class="btn btnI btnD" >DELETE</button>
                               </td>     
                           </tr>
                       </tbody>
                   </table>
               </div>
           </div>
       </div>     
      </div>
        </div>
    )
}

export default PaymentTable;