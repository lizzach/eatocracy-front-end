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
        <Link to="dashboard" className="nav-link">Dashboard</Link>
        <Link to="newevent" className="nav-link">Create New Event</Link>
        <Link to="pastevents" className="nav-link">Past Events</Link>   
      </nav>
    </div>
  )
};

export default Navbar;