import React from "react";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { Avatar } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div>
      <header className="App-header">
          <h1>eatocracy</h1>
          <div className="avatar-container">
            <Avatar src="../images/stock-photo-8.jpg" alt="avatar" />
          </div>
      </header>
      <nav className="main-nav">
        <Link to="dashboard">
          <a className = "nav-link" href="*">Dashboard</a>
        </Link>
        <Link to="newevent">
          <a className = "nav-link" href="*">Create New Event</a>
        </Link>     
          <a className = "nav-link" href="*">Past Events</a>
      </nav>
    </div>
  )
};

export default Navbar;