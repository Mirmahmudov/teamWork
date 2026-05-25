import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${scroll ? "activeNav" : ""}`}>
      <div className="container">
        <div className="header">
          <img src="/imgs/Logo.svg" alt="" />

          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>

            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>

            <li>
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </li>

            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>

          <button className="nav_btn">Contact</button>
          <img src="./imgs/Button (2).svg" alt="" className="nav_btn_img"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
