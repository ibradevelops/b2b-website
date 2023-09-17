import Logo from "../images/logo.svg";
import HamburgerMenu from "../images/hamburger-menu.png";

function Navbar({ onSetToggleMenu }) {
  return (
    <nav className="nav">
      <img className="nav-logo" src={Logo} alt="Logo" />
      <img
        className="nav-menu"
        src={HamburgerMenu}
        alt="Hamburger menu icon"
        onClick={() => onSetToggleMenu(true)}
      />
      <ul className="nav__list">
        <li className="nav__list-item">Početna</li>
        <li className="nav__list-item">Područja primjene</li>
        <li className="nav__list-item">Implementacija</li>
        <li className="nav__list-item">Kontakt</li>
        <li className="nav__list-item">Help desk</li>
        <li className="nav__list-item">Log in</li>
      </ul>
    </nav>
  );
}

export default Navbar;
