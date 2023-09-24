import { Link, useNavigate } from "react-router-dom";
import Icon from "../images/close-icon.png";
import Logo from "../images/logo.svg";
import DropdownIcon from "../images/dropdown-white.png";
import { useState } from "react";

function MenuLayout() {
  const navigate = useNavigate();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="menu__overlay">
      <div className="menu__overlay-images">
        <img className="menu__overlay-images-icon" alt="Logo" src={Logo} />
        <img
          className="menu__overlay-images-icon"
          alt="Close icon"
          src={Icon}
          onClick={() => navigate(-1)}
        />
      </div>
      <ul className="menu__overlay-list">
        <Link to="/home" className="menu__overlay-list-item">
          <li>Početna</li>
        </Link>
        <Link
          className={`menu__overlay-list-item ${
            toggleDropdown ? "toggle-dropdown-top" : ""
          }`}
          onClick={() => setToggleDropdown((toggle) => !toggle)}
        >
          <li>
            Područja primjene
            <img
              src={DropdownIcon}
              alt="Dropdown icon"
              className={`${toggleDropdown ? "toggle-dropdown-rotate" : ""}`}
            />
          </li>
        </Link>
        <Link to="/implementation" className="menu__overlay-list-item">
          <li className={`${toggleDropdown ? "toggle-dropdown-margin" : ""}`}>
            Implementacija
          </li>
        </Link>
        <Link to="/contact" className="menu__overlay-list-item">
          <li>Kontakt</li>
        </Link>
        <Link
          to="http://77.78.198.63:5663/portal"
          className="menu__overlay-list-item"
        >
          <li>Help desk</li>
        </Link>
        <Link to="/login" className="menu__overlay-list-item">
          <li>Log in</li>
        </Link>
      </ul>
      {toggleDropdown && <MenuOverlayBox />}
    </div>
  );
}

function MenuOverlayBox() {
  return (
    <ul className="menu__overlay-box">
      <Link to="/order" className="menu__overlay-box-item">
        <li>Nabava</li>
      </Link>
      <Link to="/sales" className="menu__overlay-box-item">
        <li>Prodaja</li>
      </Link>
      <Link to="/accounting" className="menu__overlay-box-item">
        <li>Računovodstvo</li>
      </Link>
      <Link to="/logistics" className="menu__overlay-box-item">
        <li>Logistika</li>
      </Link>
      <Link to="/human_resources" className="menu__overlay-box-item">
        <li>Ljudski resursi</li>
      </Link>
      <Link to="/production" className="menu__overlay-box-item">
        <li>Proizvodnja</li>
      </Link>
      <Link to="/maintenance" className="menu__overlay-box-item">
        <li>Održavanje</li>
      </Link>
      <Link to="/services" className="menu__overlay-box-item">
        <li>Usluge</li>
      </Link>
    </ul>
  );
}

export default MenuLayout;
