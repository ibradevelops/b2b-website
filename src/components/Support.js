import useObserver from "../hooks/useObserver";
import Button from "./Button";

function Support() {
  const { element, visibility, animate } = useObserver();
  return (
    <section ref={element} className="support__section">
      <p
        className={`support__section-sub-title ${visibility} ${animate(
          "fromBottomAnimation"
        )}`}
      >
        Centar za podršku
      </p>
      <div className="support__section-box">
        <div
          className={`support__section-box-left ${visibility} ${animate(
            "fromLeftAnimation"
          )}`}
        >
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
        <span className={`${animate("fromRightAnimation")} ${visibility}`}>
          <Button>Help desk</Button>
        </span>
      </div>
    </section>
  );
}

export default Support;
