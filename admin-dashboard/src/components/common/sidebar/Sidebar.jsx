import './Sidebar.css';
import logo from '../../../assets/logo-header.png';
import Profile from './subcomponents/Profile/Profile.jsx'

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
            <Profile name='Nicolás Barrio' email="nico@estudiobarca.com" />
        </div>
    </div>
    )
}

export default Sidebar 