import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
    return (
        <div>
            <h1>Aniworks</h1>
        <nav className="navbar-container">
        <NavLink to="/">
         Aniworks
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
    </div>
    );
}

export {Navbar};