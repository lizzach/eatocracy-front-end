import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-nav">
            <a className = "nav-link" href="*">Dashboard</a>
            <a className = "nav-link" href="*">Create New Event</a>
            <a className = "nav-link" href="*">Saved Restaurants</a>
        </nav>
    )
}

export default Navbar;