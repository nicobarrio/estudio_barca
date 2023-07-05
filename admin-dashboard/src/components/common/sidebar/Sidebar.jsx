import './Sidebar.css';
import logo from '../../../assets/logo-header.png';

const Sidebar = () => {
    return (
    <div className="sidebar_box"> 
        <img className="logo" src={logo} alt="" />
        <nav className="nav">
            <p>Dashboard</p>
            <p>Orders</p>
            <p>Products</p>
            <p>Users</p>
            <p>Reports</p>
        </nav>
        <div className="profile">
            <p>Admin</p>
            <p>nicolas@estudiobarca.com</p>
        </div>
    </div>
    )
}

export default Sidebar 