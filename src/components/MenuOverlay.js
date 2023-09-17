import Icon from "../images/close-icon.png";
import Logo from "../images/logo.svg";

function MenuOverlay({ onSetToggleMenu }) {
  return (
    <div className="menu__overlay">
      <div className="menu__overlay-images">
        <img className="menu__overlay-images-icon" alt="Logo" src={Logo} />
        <img
          className="menu__overlay-images-icon"
          alt="Close icon"
          src={Icon}
          onClick={() => onSetToggleMenu(false)}
        />
      </div>
      <ul className="menu__overlay-list">
        <li className="menu__overlay-list-item">
          <a href="#">Početna</a>
        </li>
        <li className="menu__overlay-list-item">
          <a href="#">Područja primjene</a>
        </li>
        <li className="menu__overlay-list-item">
          <a href="#">Implementacija</a>
        </li>
        <li className="menu__overlay-list-item">
          <a href="#">Kontakt</a>
        </li>
        <li className="menu__overlay-list-item">
          <a href="#">Help desk</a>
        </li>
        <li className="menu__overlay-list-item">
          <a href="#">Log in</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuOverlay;
