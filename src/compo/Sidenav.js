import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

const Sidenav = () => {
  const [isOpen, changeClass] = useState(false);

  const handleClick = () => {
    changeClass(!isOpen);
  };
  const linkClassName = isOpen ? "open" : "sidenav";
  return (
    <>
      <nav className="navbar">
        <img src="./logo.svg" className="logo" alt="website logo" />
        <ul className="ul">
          <div className={linkClassName}>
            <span className="closebtn linkA" onClick={handleClick}>
              &times;
            </span>
            <Link className="linkA" to="/">
              Home
            </Link>
            <Link className="linkA" to="/services">
              Our Services
            </Link>
            <Link className="linkA" to="/yoga">
              Yoga Classs
            </Link>
            <Link className="linkA" to="/contact-us">
              Contact Us
            </Link>
            <Link className="linkA" to="/about-us">
              About Us
            </Link>
          </div>

          {/* Use any element to open the sidenav*/}
          <span className="openbtn" onClick={handleClick}>
            &#9776;
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Sidenav;
