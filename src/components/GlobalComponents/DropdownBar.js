import { Link } from "react-router-dom";

function DropdownBar() {
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        <li className="dropdown__list-item">
          <Link to="/order">Nabava</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/sales">Prodaja</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/accounting">Računovodstvo</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/logistics">Logistika</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/human_resources">Ljudski resursi</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/production">Proizvodnja</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/maintenance">Održavanje</Link>
        </li>
        <li className="dropdown__list-item">
          <Link to="/services">Usluge</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownBar;
