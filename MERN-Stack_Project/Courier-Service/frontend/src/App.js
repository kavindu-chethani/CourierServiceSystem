import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./pages/Home-Page/Home";
import Test from "./pages/Add-Package/Test";

/* Package */
import AddPackage from "./pages/Add-Package/AddPackage";
import PackageDetails from "./pages/Customer/PackageDetails";
import PackageDetailsEdit from "./pages/Customer/PackageDetailsEdit";
import PackageWrong from "./pages/Customer/PackageWrong";

/* Sign In */
import Sign_In from "./pages/Sign-in/Sign_In";

/*Store */
import AddStore from './pages/stores/AddStore';
import StoreView from './pages/stores/StoreView';
import Pickup from "./pages/pickup/Pickup";
import EditStore from "./pages/stores/EditStore";
import AddPickup from "./pages/pickup/add_delivery_boy";
import DownloadPdf from "./pages/stores/Downloadpdf";

/* Admin */
import SellerRqst from './pages/Admin/SellerRqst';
import SellerList from './pages/Admin/SellerList';
import Packages from "./pages/Admin/Packages";
import Income from "./pages/Admin/Income";
import WMList from "./pages/Admin/WMList";
import EditSeller from "./pages/Admin/EditSeller";
import EditWManager from "./pages/Admin/EditWManager";
import AddWManager from "./pages/Admin/AddWManager";
import ViewPackage from "./pages/Admin/ViewPackage";
import GetPDF from "./pages/Admin/GetPDF";

/*Employee */
import CreateEmployee from "./pages/Employee/CreateEmployee";
import EmployeeForm from "./pages/Employee/EmployeeForm";
import EditEmployee from "./pages/Employee/EditEmployee";
import ValidateEmp from "./pages/Employee/ValidateEmp";


/*Payment*/
import Payment from "./pages/Payment/Payment";
import PaymentTable from "./pages/Payment/PaymentTable";
import Payslip from "./pages/Payment/Payslip";




function App() {

  return(
    <Router>

       <ToastContainer/> 

      <Routes>
        
        {/* Home Page */}
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>


        {/* Package */}
        <Route path='/addpackage' element={<AddPackage/>}/>
        <Route path='/packagedetails' element={<PackageDetails/>}/>
        <Route path='/packagedetailsedit' element={<PackageDetailsEdit/>}/>
        <Route path='/packagewrong' element={<PackageWrong/>}/>


        {/* Sign In */}
        <Route path='/signin' element={<Sign_In/>}/>


        {/* Store */}
        <Route path='/AddStore' element={<AddStore/>}/>
        <Route path='/StoreView' element={<StoreView/>}/>
        <Route path='/Pickup' element={<Pickup/>}/>
        <Route path='/AddPickup/:id' element={<AddPickup/>}/>
        <Route path='/EditStore/:id' element={<EditStore/>}/>
        <Route path='/Pdf/:id' element={<DownloadPdf/>}/>

        

        {/* Admin */}
        <Route path='/SellerRqst' element={<SellerRqst/>}/>
        <Route path='/SellerList' element={<SellerList/>}/>
        <Route path='/Packages' element={<Packages/>}/>
        <Route path='/Income' element={<Income/>}/>
        <Route path='/WMList' element={<WMList/>}/>
        <Route path='/EditSeller' element={<EditSeller/>}/>
        <Route path='/EditWManager/:id' element={<EditWManager/>}/>
        <Route path='/AddWManager' element={<AddWManager/>}/>
        <Route path='/ViewPackage/:id' element={<ViewPackage/>}/>
        <Route path='/GetPDF/:id' element={<GetPDF/>}/>
        


         {/* Employee */}
        <Route path='/CreateEmployee' element={<CreateEmployee/>}/>
        <Route path='/AddEmployee' element={<EmployeeForm/>}/>
        <Route path='/EditEmployee/:id' element={<EditEmployee/>}/>
        <Route path='/ValidateEmp' element={<ValidateEmp/>}/>



        {/* Payment */}
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/AddPayment/:id' element={<Payment/>}/> 
        <Route path='/PaymentTable' element={<PaymentTable/>}/>
        <Route path='/Payslip/:id' element={<Payslip/>}/>

        </Routes> 
    </Router>
  );
    
}

export default App;
