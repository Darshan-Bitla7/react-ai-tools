import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/ai-logo.png";
// import lines from "./images/lines.png";

function Navbar() {
  return (
    <>
      <nav id="pc-nav" className="Navbar">
        <ul>
          <div className="Logo">
            <li>
              <img src={logo} className="logo-img"></img>
            </li>
            <li>
              <h1 className="logo-text">NEXUSAI</h1>
            </li>
          </div>
          <div className="Links">
            <li>
              <Link to="/">HOME</Link>
            </li>
          </div>
        </ul>
      </nav>
      <nav id="mobile-nav">
        <img src={logo} className="logo-img"></img>
        <div className="Links">
          <li>
            <Link to="/">HOME</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
