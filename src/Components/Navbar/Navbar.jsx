import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="heading">
          <h2>
            <a href="">Wordplay</a>
          </h2>
        </div>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Game</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Rules</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Help</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="btn1">
            <a href="">Register</a>
          </button>
          <button className="btn2">
            <a href="">Log in</a>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
