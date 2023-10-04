import { useState } from "react";
import { Link } from "react-router-dom";
import MenuLayout from "../../layouts/MenuLayout";
import DropdownBar from "./DropdownBar";
//
import Logo from "../../images/logo.svg";
import HamburgerMenu from "../../images/hamburger-menu.png";
import DropDownWhite from "../../images/dropdown-white.png";
import DropDownRed from "../../images/dropdown-red.png";
//
function Navbar({
  toggleDropdown,
  setToggleDropdown,
  toggleHamburger,
  setToggleHamburger,
}) {
  const [toggleIconColor, setToggleIconColor] = useState(false);
  //
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "9999",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <nav className="nav">
        <Link to="/home">
          <img className="nav__logo" src={Logo} alt="Logo" />
        </Link>
        <img
          className="nav-menu-img"
          src={HamburgerMenu}
          alt="Hamburger menu icon"
          onClick={(e) => {
            e.stopPropagation();
            setToggleHamburger((toggle) => !toggle);
          }}
        />
        <ul className="nav__list">
          <Link to="/home">
            <li className="nav__list-item">Početna</li>
          </Link>
          <div className="nav-unique-btn">
            <span
              className="nav__list-item flex-icon"
              onClick={(e) => {
                e.stopPropagation();
                setToggleDropdown((toggle) => !toggle);
              }}
              onMouseOver={() => setToggleIconColor(true)}
              onMouseLeave={() => setToggleIconColor(false)}
            >
              <li>Područja primjene</li>
              <img
                src={toggleIconColor ? DropDownRed : DropDownWhite}
                alt="Drop down icon"
                className="nav__list-item-icon"
              />
            </span>
            {toggleDropdown && <DropdownBar />}
          </div>
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
      </nav>
      {toggleHamburger && <MenuLayout />}
    </div>
  );
}

export default Navbar;
