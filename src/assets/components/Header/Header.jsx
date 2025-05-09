import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/About">About</Link>
                <Link to="/Contract">Contract Us</Link>
        
            </nav>
        </div>
    );
};

export default Header;