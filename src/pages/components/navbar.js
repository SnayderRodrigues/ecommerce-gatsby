import React from "react";
import { Link } from "gatsby";
import { navLink } from "../examples/navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <span>GATSBY-STUDY</span>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className={navLink}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLink}>
              about
            </Link>
          </li>
          <li>
            <Link to="/services" className={navLink}>
              services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLink}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
