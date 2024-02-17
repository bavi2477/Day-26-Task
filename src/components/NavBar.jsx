import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto d-flex justify-content-between w-100">
                        <Link className="nav-link" to='/'>ALL</Link>
                        <Link className="nav-link" to='/fullstack'>Full Stack Development</Link>
                        <Link className="nav-link" to='/datascience'>Data Science</Link>
                        <Link className="nav-link" to='/cybersecurity'>Cyber Security</Link>
                        <Link className="nav-link" to='/career'>Career</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;