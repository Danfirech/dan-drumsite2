import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="ComponentNavigation">
        <Link className="navbar-logo" to="/">
          Daniel Possehl
        </Link>
        <div class="navbar-right">
          <Link to="/About">About</Link>
          <Link to="/Videos">Videos</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
