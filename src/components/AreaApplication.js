import useObserver from "../hooks/useObserver";
import SingleArea from "./SingleArea";
// Photos
import Prodaja from "../images/prodaja.svg";
import Nabava from "../images/nabava.svg";
import Proizvodnja from "../images/proizvodnja.svg";
import Racunovodstvo from "../images/racunovodstvo.svg";
import Usluge from "../images/usluge.svg";
import LjudskiResursi from "../images/ljudskiresursi.svg";
import Odrzavanje from "../images/odrzavanje.svg";
import Logistika from "../images/logistika.svg";
//
function AreaApplication() {
  const { element, visibility, animate } = useObserver();
  //
  return (
    <section ref={element} className="areaApplication__section">
      <p
        className={`areaApplication__section-sub-title ${animate(
          "fromBottomAnimation"
        )} ${visibility}`}
      >
        Područja primjene
      </p>
      <h2
        className={`areaApplication__section-title  ${animate(
          "opacityAnimation"
        )} ${visibility} `}
      >
        Za svaki aspekt vašeg poslovanja
      </h2>
      <div
        className={`areaApplication__section-items ${animate(
          "opacityAnimation"
        )} ${visibility}`}
      >
        <SingleArea
          photo={Prodaja}
          title={"Prodaja"}
          bio={"Povećajte promet fokusiranjem na kupca."}
        />
        <SingleArea
          photo={Nabava}
          title={"Nabava"}
          bio={
            "Smanjite troškove i obim posla uz „just-in- time“ sistem nabave."
          }
        />
        <SingleArea
          photo={Proizvodnja}
          title={"Proizvodnja"}
          bio={
            "Povećajte efikasnost upravljanjem proizvodnjom uz visoke industrijske standarde."
          }
        />
        <SingleArea
          photo={Racunovodstvo}
          title={"Računovodstvo"}
          bio={"Pretvorite obavezu u pravovremeni izvor informacija."}
        />
        <SingleArea
          photo={Usluge}
          title={"Usluge"}
          bio={"Odgovorite na zahtjeve brzo i efikasno."}
        />
        <SingleArea
          photo={LjudskiResursi}
          title={"Ljudski resursi"}
          bio={"Povećajte produktivnost i razvijte kompetencije."}
        />
        <SingleArea
          photo={Odrzavanje}
          title={"Održavanje"}
          bio={"Skratite vrijeme otklanjanja zastoja i troškove održavanja."}
        />
        <SingleArea
          photo={Logistika}
          title={"Logistika"}
          bio={"Planirajte i pojednostavite isporuke roba."}
        />
      </div>
    </section>
  );
}

export default AreaApplication;
