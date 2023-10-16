import AreaAccounting1 from "../images/area-accounting-1.jpg";
import AreaAccounting2 from "../images/area-accounting-2.png";
import AreaAccountingLogo from "../images/racunovodstvo.svg";
import AreaLayout from "../layouts/AreaLayout";

function Accounting() {
  return (
    <AreaLayout
      imageOne={AreaAccounting1}
      imageTwo={AreaAccounting2}
      logo={AreaAccountingLogo}
      title={"Računovodstvo"}
      subTitle={"Pretvorite obavezu u pravovremni izvor informacija."}
      textBox={
        "Ubrzajte i pojednostavite poslovanje. IVIS moduli finansijskog računovodstva pomoći će Vam da brže donosite bolje odluke bazirane na činjenicama."
      }
      questions={[
        "Uspijevate li proknjižiti sve promjene u zakonskom roku?",
        "Koliko vremena trošite na obračun plate?",
        "Možete li sami prenijeti početno stanje u narednu godinu?",
        "Koliko vremena trošite na ponavljajuća knjiženja?",
      ]}
      textOne={""}
      texts={[
        "Moduli finansijskog računovodstva spajaju poslovne i finansijske poslove u jedinstveni sistem. Povezani su sa ostalim modulima koji vode pomoćne računovodstvene evidencije: robno-materijalnim, KUF/KIF, platama, osnovnim sredstvima, uslugama, omogućavajući automatizirani prenos podataka – knjiženje u glavnu knjigu. Fleksibilni model šema knjiženja omogućava veliki broj različitih postavki knjiženja u skladu s poslovnim modelom korisnika. Informacije koje se, pored osnovnih, prenose u glavnu knjigu, omogućiće detaljne analize po različitim dimenzijama poslovanja.",
      ]}
      list={[]}
      textTwo={""}
    />
  );
}

export default Accounting;
