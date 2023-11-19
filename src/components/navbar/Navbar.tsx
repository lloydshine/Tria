import "./navbar.css";
import { FaBars } from "react-icons/fa";

import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <img src="/main.png" alt="main" />
        </div>
        <FaBars size={30} onClick={() => setToggle(!toggle)} />
        <div className="nav-links links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <button>Hire Us</button>
        </div>
      </nav>
      <nav
        className="pop-nav links"
        style={{ maxHeight: toggle ? "10rem" : "0px" }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <button>Hire Us</button>
      </nav>
    </>
  );
}
