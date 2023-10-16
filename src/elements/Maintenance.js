import AreaMaintenance1 from "../images/area-maintenance-1.jpg";
import AreaMaintenance2 from "../images/area-maintenance-2.png";
import AreaMaintenanceLogo from "../images/odrzavanje.svg";
import AreaLayout from "../layouts/AreaLayout";

function Maintenance() {
  return (
    <AreaLayout
      imageOne={AreaMaintenance1}
      imageTwo={AreaMaintenance2}
      logo={AreaMaintenanceLogo}
      title={"Održavanje"}
      subTitle={"Skratite vrijeme otklanjanja zastoja i troškove održavanja."}
      textBox={
        "Olakšajte održavanje uz sve informacije o procesu i troškovima održavanja na jednom mjestu."
      }
      questions={[
        "Znate li koliko Vas je koštalo održavanje neke mašine ili uređaja?",
        "Da li je bolje kupiti novu mašinu ili nastaviti održavati postojeću?",
        "Koliko brzo možete reagovati na zastoj ili kvar?",
      ]}
      textOne={""}
      texts={[
        "IVIS omogućava planiranje internog ili eksternog održavanja. Moguće je planirati remonte s precizno određenim operacijama i dijelova koje je potrebno pregledati i zamijeniti. Otvaranje radnog naloga održavanja i praćenje njegove realizacije je jednostavno i efikasno. Prijenos informacija o zastoju ili kvaru iz proizvodnje ka održavanju skratiće Vam vrijeme stajanja i povećati produktivnost. Sve informacije o mašini ili uređaju omogućavaju Vam pregled stanja svake mašine i pripadajućih troškova.",
      ]}
      list={[]}
      textTwo={""}
    />
  );
}

export default Maintenance;
