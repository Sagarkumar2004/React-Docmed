import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Cross from "../Image/download.webp";
import Menu from "../Image/menu.png";

export default function Navbar() {
  const ActiveMenu = () => {
    document.querySelector(".nav").classList.toggle("h-nav");
    document.querySelector(".navlist").classList.toggle("v-class");
  };

  return (
    <>
      <div className="nav h-nav">
        <div className="menu">
          <img onClick={ActiveMenu} className="ham" src={Menu} />
        </div>
        <div className="logo">
          <img onClick={ActiveMenu} src={Cross} alt="This is Logo" />
        </div>

        <div onClick={ActiveMenu} className="navlist v-class">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Department">Department</Link>
            </li>
            <li>
              <Link to="Doctor">Doctor</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="btn" id="no-btn">
          Make an appoinment
        </div>
      </div>
    </>
  );
}
