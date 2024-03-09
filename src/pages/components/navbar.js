import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header>
      <nav>
        <span>GATSBY-STUDY</span>
        <ul className="navbar-ul">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
