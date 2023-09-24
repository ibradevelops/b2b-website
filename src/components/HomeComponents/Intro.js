import { Link } from "react-router-dom";
import Button from "./Button.js";
import Image from "../../images/image.svg";
//
function Intro() {
  return (
    <header className="intro__section">
      <div className="intro__section-text">
        <p className="intro__section-text-sub-title">
          ERP - Poslovni informacioni sistem IVIS
        </p>
        <h1 className="intro__section-text-title">Preuzmite kontrolu</h1>
        <p className="intro__section-text-bio">
          Premium ERP sistem koji olakšava upravljanje svim segmentima
          poslovanja. Korištenje IVIS-a pospješuje rast bitnih faktora
          postizanja uspjeha: fleksibilnosti, brzine, efikasnosti i
          transparentnosti.
        </p>
        <Link to="/contact">
          <Button>Osjetite razliku</Button>
        </Link>
      </div>
      <div className="intro__section-photo">
        <img alt="Logo" src={Image} />
        <div className="intro__section-photo-bio">
          <h2>IVIS</h2>
          <h2>SOFTWARE</h2>
        </div>
      </div>
      <p className="intro__section-scroll">Scroll</p>
    </header>
  );
}

export default Intro;
