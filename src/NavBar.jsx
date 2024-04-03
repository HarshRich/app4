import { Link } from "react-router-dom";
import "./App.css";





export const NavBar=()=>
{
    return(
    <nav className="nav-container">
    <div className="Brand">
    <h2 align="left">React Practicals</h2>
    </div>
    <div className="Links">
    <ul>
    <li><Link to="/">BodyComp</Link></li>
    <li><Link to="/weatherapi">Weather Api</Link></li>
    <li><Link to="/Profile">Profile</Link></li>
    <li><Link to="/UseContext">UseContext</Link></li>
    <li><Link to="/ReactQuery">ReactQuery</Link></li>
    <li><Link to="/ChangeProfile">Change Profile Name</Link></li>
    </ul>
    </div>
    </nav>
    );
}