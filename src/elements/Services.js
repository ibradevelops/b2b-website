import AreaServices1 from "../images/area-services-1.jpg";
import AreaServices2 from "../images/area-services-2.png";
import AreaServicesLogo from "../images/odrzavanje.svg";
import AreaLayout from "../layouts/AreaLayout";

function Services() {
  return (
    <AreaLayout
      imageOne={AreaServices1}
      imageTwo={AreaServices2}
      logo={AreaServicesLogo}
      title={"Usluge"}
      subTitle={"Odgovorite na zahtjeve brzo i efikasno."}
      textBox={
        "IVIS će vam pomoći da imate sve informacije i alate o uslugama na jednom mjestu, bilo da se radi o redovnim paušalnim iznosima, evidenciji izvršenih usluga i utrošenih materijala."
      }
      questions={[
        "Koliko vremena trošite na obračun i fakturisanje usluga?",
        "Kako fakturišete ponavljajuće usluge po ugovorima i koliko to traje?",
        "Imate li evidenciju svih izvršenih usluga na jednom mjestu?",
      ]}
      textOne={""}
      texts={[]}
      list={[
        "Evidencija ugovora i cijena redovnih i vanrednih usluga",
        "Automatski obračun ponavljajućih paušalnih iznosa",
        "Evidencija izvršenih usluga prema radniku, kupcu, vremenu izvršenja usluge",
        "Evidencija izdanih materijala",
        "Dugovanja i potraživanja",
      ]}
      textTwo={""}
    />
  );
}

export default Services;
