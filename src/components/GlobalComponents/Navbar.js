import { useState } from "react";
import Logo from "../../images/logo.svg";
import HamburgerMenu from "../../images/hamburger-menu.png";
import DropDownWhite from "../../images/dropdown-white.png";
import DropDownRed from "../../images/dropdown-red.png";
import DropdownBar from "./DropdownBar";
import { Link } from "react-router-dom";

function Navbar({ toggleDropdown, referenca, onHandleClick }) {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <nav className="nav">
      <Link to="/home">
        <img className="nav__logo" src={Logo} alt="Logo" />
      </Link>
      <Link to="/menu">
        <img
          className="nav-menu"
          src={HamburgerMenu}
          alt="Hamburger menu icon"
        />
      </Link>
      <ul className="nav__list">
        <Link to="/home">
          <li className="nav__list-item">Početna</li>
        </Link>
        <span
          ref={referenca}
          className="nav__list-item flex-icon"
          onMouseOver={() => setToggleIcon(true)}
          onMouseLeave={() => setToggleIcon(false)}
          onClick={onHandleClick}
        >
          <li>Područja primjene</li>
          <img
            src={toggleIcon ? DropDownRed : DropDownWhite}
            alt="Drop down icon"
            className="nav__list-item-icon"
          />
        </span>
        <Link to="/implementation">
          <li className="nav__list-item">Implementacija</li>
        </Link>
        <Link to="/contact">
          <li className="nav__list-item">Kontakt</li>
        </Link>
        <Link to="http://77.78.198.63:5663/portal" target="_blank">
          <li className="nav__list-item">Help desk</li>
        </Link>
        <Link to="/login">
          <li className="nav__list-item">Log in</li>
        </Link>
      </ul>
      {toggleDropdown && <DropdownBar />}
    </nav>
  );
}

export default Navbar;
