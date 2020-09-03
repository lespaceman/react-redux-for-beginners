import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {

  return (
    <nav className="nav-container">
      <div className="container">
        <a href="/" className="brand-logo">
          Poki'Times
        </a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
