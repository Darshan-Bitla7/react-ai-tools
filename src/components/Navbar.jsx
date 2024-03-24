import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./images/ai-logo.webp";
import menu from "./images/ham.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="pc-nav" className="Navbar">
        <ul>
          <div className="Logo">
            <li>
              <img src={logo} alt="logo image" className="logo-img"></img>
            </li>
            <li>
              <h1 className="logo-text">NEXUSAI</h1>
            </li>
          </div>
          <div className="Links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/favorites">FAVORITES</Link>
            </li>
            <li>
              <Link to="/try">TRY</Link>
            </li>
          </div>
        </ul>
      </nav>
      <nav id="mobile-nav">
        <img alt="logo image" src={logo} className="logo-img" />
        <img
          src={menu}
          alt="menu-icon"
          className="menu-img onClick={toggleMenu}"
          onClick={toggleMenu}
        />
      </nav>
      {isMenuOpen && (
        <div className={`mobile-menu-dropdown ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <hr />
            <li>
              <Link to="/favorites">FAVORITES</Link>
            </li>
            <hr />
            <li>
              <Link to="/try">TRY</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
