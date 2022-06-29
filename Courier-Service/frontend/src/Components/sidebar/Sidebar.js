import "./sidebar.css"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
 import GroupIcon from '@mui/icons-material/Group';
 import InventoryIcon from '@mui/icons-material/Inventory';
 import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
 import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
 import PersonIcon from '@mui/icons-material/Person';
 import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
 import DeliveryDiningTwoToneIcon from '@mui/icons-material/DeliveryDiningTwoTone';
 import {Link} from "react-router-dom"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className = "top">
                <DeliveryDiningTwoToneIcon className="icon"/>
                <span className="logo">ByTheMinute</span>
            </div>
            <hr/>

            <div className="centerSb">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icons"/>
                        <span className="spanList">Dashboard</span>
                    </li>
                    <p className="title">SELLERS</p>
                    <Link to = "/SellerRqst" style={{textDecoration : "none"}}>
                        <li>
                            <PersonAddAltIcon className="icons"/>
                            <span  className="spanList">Seller Requests</span>
                        </li>
                    </Link>
                    <Link to = "/SellerList" style={{textDecoration : "none"}}>
                    <li>
                        <GroupIcon className="icons"/>
                        <span  className="spanList">Seller List</span>
                    </li>
                    </Link>
                    <p className="title">PACKAGES</p>
                    <Link to = "/Packages" style={{textDecoration : "none"}}>
                    <li>
                        <InventoryIcon className="icons"/>
                        <span  className="spanList">Package List</span>
                    </li>
                    </Link>
                    <p className="title">RETURN ITEMS</p>
                    <Link to = "/ReturnList" style={{textDecoration : "none"}}>
                    <li>
                        <AssignmentReturnIcon className="icons"/>
                        <span  className="spanList">Return List</span>
                    </li>
                    </Link>
                    <p className="title">INCOME</p>
                    <Link to = "/Income" style={{textDecoration : "none"}}>
                    <li>
                        <MonetizationOnIcon className="icons"/>
                        <span  className="spanList">View Incomes</span>
                    </li>
                    </Link>
                    <p className="title">STAFF</p>
                    <Link to = "/WMList" style={{textDecoration : "none"}}>
                    <li>
                        <PersonIcon className="icons"/>
                        <span  className="spanList">Warehouse</span>
                    </li>
                    </Link>
                    <li>
                        <PersonIcon className="icons"/>
                        <span  className="spanList">Managers</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icons"/>
                        <span  className="spanList">Delivery Staff</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar