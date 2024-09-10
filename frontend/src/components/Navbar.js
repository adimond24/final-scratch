import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Amelia's Bookworm Library</Link>
                <ul className="navbar-menu">
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    <li><Link to="/book-list" className="navbar-item">Book List</Link></li>
                    <li><Link to="/bookreview" className="navbar-item">Book Reviews</Link></li>
                    <li><Link to="/TBR" className="navbar-item">TBR</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

