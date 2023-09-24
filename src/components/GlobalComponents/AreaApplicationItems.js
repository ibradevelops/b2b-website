import SingleArea from "../HomeComponents/SingleArea";
//
// Photos
import Prodaja from "../../images/prodaja.svg";
import Nabava from "../../images/nabava.svg";
import Proizvodnja from "../../images/proizvodnja.svg";
import Racunovodstvo from "../../images/racunovodstvo.svg";
import Usluge from "../../images/usluge.svg";
import LjudskiResursi from "../../images/ljudskiresursi.svg";
import Odrzavanje from "../../images/odrzavanje.svg";
import Logistika from "../../images/logistika.svg";
//
//
function AreaApplicationItems() {
  return (
    <div className="areaApplication__section-items">
      <SingleArea
        photo={Prodaja}
        title={"Prodaja"}
        bio={"Povećajte promet fokusiranjem na kupca."}
        href={"/sales"}
      />
      <SingleArea
        photo={Nabava}
        title={"Nabava"}
        bio={"Smanjite troškove i obim posla uz „just-in-time“ sistem nabave."}
        href={"/order"}
      />
      <SingleArea
        photo={Proizvodnja}
        title={"Proizvodnja"}
        bio={
          "Povećajte efikasnost upravljanjem proizvodnjom uz visoke industrijske standarde."
        }
        href={"/production"}
      />
      <SingleArea
        photo={Racunovodstvo}
        title={"Računovodstvo"}
        bio={"Pretvorite obavezu u pravovremeni izvor informacija."}
        href={"/accounting"}
      />
      <SingleArea
        photo={Usluge}
        title={"Usluge"}
        bio={"Odgovorite na zahtjeve brzo i efikasno."}
        href={"/services"}
      />
      <SingleArea
        photo={LjudskiResursi}
        title={"Ljudski resursi"}
        bio={"Povećajte produktivnost i razvijte kompetencije."}
        href={"/human_resources"}
      />
      <SingleArea
        photo={Odrzavanje}
        title={"Održavanje"}
        bio={"Skratite vrijeme otklanjanja zastoja i troškove održavanja."}
        href={"/maintenance"}
      />
      <SingleArea
        photo={Logistika}
        title={"Logistika"}
        bio={"Planirajte i pojednostavite isporuke roba."}
        href={"/logistics"}
      />
    </div>
  );
}

export default AreaApplicationItems;
