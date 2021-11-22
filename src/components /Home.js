import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import Video from "../video/Danvid.mp4";

export const Home = () => {
  return (
    <div>
      <header>
        <div class="header">
          <nav class="navigation">
            <Link className="navbar-logo" to="/">
              Daniel Possehl
            </Link>
            <div class="navbar-right">
              <Link to="/About">About</Link>
              <Link to="/Videos">Videos</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </nav>

          <video class="video" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </header>
    </div>
  );
};

export default Home;
