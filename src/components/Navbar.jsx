import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/ai-logo.webp";

function Navbar() {
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
          </div>
        </ul>
      </nav>
      <nav id="mobile-nav">
        <img alt="logo image" src={logo} className="logo-img"></img>
        <div className="Links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/favorites">FAVORITES</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
