import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {Contact} from "./Contact";



function Navbar() {
    return (
        <div>
            <h1>Our Dashboard</h1>
        <nav className="navbar-container">
        <NavLink to="/">
         Aniworks
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
    </nav>
    </div>
    );
}

export {Navbar};