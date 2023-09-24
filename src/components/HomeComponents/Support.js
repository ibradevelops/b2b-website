import { Link } from "react-router-dom";
import useObserver from "../../hooks/useObserver";
import Button from "./Button";

function Support() {
  const { element, visibility, animate } = useObserver();
  return (
    <section
      ref={element}
      className={`support__section ${visibility} ${animate(
        "opacityAnimation"
      )}`}
    >
      <p className={`support__section-sub-title`}>Centar za podršku</p>
      <div className="support__section-box">
        <div className={`support__section-box-left`}>
          <h2 className="support__section-box-left-title">
            Kompletna i brza podrška
          </h2>
          <p className="support__section-box-left-text">
            Svjesni smo velike važnosti kvalitetne podrške u korištenju ERP
            sistema. Naš tim za podršku se sastoji od stručnjaka iz
            informatičkog, računovodstvenog, organizacionog i ostalih područja i
            spreman je prenijeti znanje i iskustvo kako bi naši korisnici svoje
            zahtjeve riješili na brz i efikasan način.
          </p>
        </div>
        <Link to="http://77.78.198.63:5663/portal" target="_blank">
          <Button>Help desk</Button>
        </Link>
      </div>
    </section>
  );
}

export default Support;
