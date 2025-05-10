import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contract">Contract Us</NavLink>
        
            </nav>
        </div>
    );
};

export default Header;