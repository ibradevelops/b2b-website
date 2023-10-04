import { Link } from "react-router-dom";
import DropdownIcon from "../images/dropdown-white.png";
import { useState } from "react";

function MenuLayout() {
  const [toggleBox, setToggleBox] = useState(false);
  return (
    <div className="menu__overlay">
      <ul className="menu__overlay-list">
        <Link className="menu__overlay-list-single" to="/home">
          Početna
        </Link>
        <div onClick={() => setToggleBox((toggle) => !toggle)}>
          <Link
            className="menu__overlay-list-single"
            style={{
              marginBlock: toggleBox && "12rem",
              position: "relative",
              top: toggleBox && "-12rem",
            }}
          >
            Područja primjene
          </Link>
          <img src={DropdownIcon} alt="Dropdown icon" />
          {toggleBox && <MenuOverlayBox />}
        </div>
        <Link className="menu__overlay-list-single" to="/implementation">
          Implementacija
        </Link>
        <Link className="menu__overlay-list-single" to="/contact">
          Kontakt
        </Link>
        <Link
          className="menu__overlay-list-single"
          to="http://77.78.198.63:5663/portal"
        >
          Help desk
        </Link>
        <Link className="menu__overlay-list-single" to="/login">
          Login
        </Link>
      </ul>
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
