// hooks
import { useEffect, useState, useRef, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout.js";
import HomeLayout from "./layouts/HomeLayout.js";
import AreaLayout from "./layouts/AreaLayout.js";
// photos
import AreaOrder1 from "./images/area-order-1.jpg";
import AreaOrder2 from "./images/area-order-2.jpg";
import AreaOrderLogo from "./images/nabava.svg";
//
import AreaSales1 from "./images/area-sales-1.jpg";
import AreaSales2 from "./images/area-sales-2.png";
import AreaSalesLogo from "./images/prodaja.svg";
//
import AreaAccounting1 from "./images/area-accounting-1.jpg";
import AreaAccounting2 from "./images/area-accounting-2.png";
import AreaAccountingLogo from "./images/racunovodstvo.svg";
//
import AreaLogistics1 from "./images/area-logistics-1.jpg";
import AreaLogistics2 from "./images/area-logistics-2.png";
import AreaLogisticsLogo from "./images/logistika.svg";
//
import AreaHumanResources1 from "./images/area-human-resources-1.jpg";
import AreaHumanResources2 from "./images/area-human-resources-2.png";
import AreaHumanResourcesLogo from "./images/ljudskiresursi.svg";
//
import AreaProduction1 from "./images/area-production-1.jpg";
import AreaProduction2 from "./images/area-production-2.png";
import AreaProductionLogo from "./images/proizvodnja.svg";
//
import AreaMaintenance1 from "./images/area-maintenance-1.jpg";
import AreaMaintenance2 from "./images/area-maintenance-2.png";
import AreaMaintenanceLogo from "./images/odrzavanje.svg";
//
import AreaServices1 from "./images/area-services-1.jpg";
import AreaServices2 from "./images/area-services-2.png";
import AreaServicesLogo from "./images/odrzavanje.svg";
import ImplementationLayout from "./layouts/ImplementationLayout.js";
import ContactLayout from "./layouts/ContactLayout.js";
import LoginLayout from "./layouts/LoginLayout.js";
import MenuLayout from "./layouts/MenuLayout.js";

//
function App() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const referenca = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (e.currentTarget === referenca.current) {
        e.stopPropagation();
        setToggleDropdown((toggle) => !toggle);
      } else {
        setToggleDropdown(false);
      }
    },
    [referenca]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuLayout />} />
        <Route
          element={
            <AppLayout
              referenca={referenca}
              toggleDropdown={toggleDropdown}
              onHandleClick={handleClick}
            />
          }
        >
          <Route index path="/" element={<HomeLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          {/*  */}
          <Route
            path="/order"
            element={
              <AreaLayout
                imageOne={AreaOrder1}
                imageTwo={AreaOrder2}
                logo={AreaOrderLogo}
                title={"Nabava"}
                subTitle={
                  'Smanjite troškove i obim posla uz "just-in-time" sistem nabave.                '
                }
                textBox={
                  "Korištenjem naprednog sistema nabave omogućite sebi optimalno vrijeme za nabavu i niže troškove držanja zaliha."
                }
                questions={[
                  "Koliki su Vam troškovi držanja zaliha?",
                  "Imate li zastoj u proizvodnji zbog nedostatka materijala?",
                  "Znate li kada će Vam materijal biti isporučen?",
                  "Znate li kada i šta trebate naručiti?",
                ]}
                textOne={""}
                texts={[
                  "Proces nabave je integriran sa skladištima, proizvodnjom i prodajom. Možete odrediti koje artikle želite naručivati preko naprednog sistema upravljanja zalihama, zasnovanog na statističkim modelima, onemogućavajući i nedovoljne i prevelike zalihe.",
                  "Druge artikle možete naručivati namjenski i rezervisati ih pri prijemu.",
                  "Proces nabave počinje zahtjevom za nabavu i preko upita, ponuda i narudžbi završava sa prijemom robe u skladištu ili fakture za usluge. Prenos podataka i ažuriranje statusa su automatizirani.",
                ]}
                list={[]}
                textTwo={""}
              />
            }
          />
          <Route
            path="/sales"
            element={
              <AreaLayout
                imageOne={AreaSales1}
                imageTwo={AreaSales2}
                logo={AreaSalesLogo}
                title={"Prodaja"}
                subTitle={"Povećajte promet fokusiranjem na kupca."}
                textBox={
                  "Korištenjem IVIS-a možete se fokusirati na bitno u prodaji, dok će vam sistem pomoći da imate pregled svim potrebnim informacijama."
                }
                questions={[
                  "Znate li kad i šta treba isporučiti kupcu?",
                  "Znate li u svakom trenutku stanje robe u Vašim trgovinama i koliko vremena trošite na prenos robe?",
                  "Inventure su Vam problem?",
                  "Možete li tačno odrediti cijenu proizvoda?",
                ]}
                textOne={""}
                texts={[
                  "Proces prodaje je podijeljen u više faza, počevši s upitom kupca, preko ponude, narudžbe do isporuke i eventualne reklamacije. Svakom narednom fazom potrebni podaci će se automatski prenijeti, a prethodna faza će se ažurirati.",
                  "Bilo da se radi o prodaji vlastitih proizvoda, veleprodajnoj ili maloprodajnoj trgovini, kroz integralni sistem u svakom trenutku možete dobiti informacije o cijelom procesu, od upita do isporuke kupcu na jednom mjestu.",
                  "Određivanjem cjenovnika na različitim nivoima, akcija, rabata, limita druga svoju cjenovnu politiku možete ugraditi u sistem i ubrzati kreiranje ponuda i primanja narudžbi. Sistem se može konfigurirati u razne veleprodajne ili maloprodajne modele na jednoj ili više udaljenih lokacija, obezbjeđujući automatsku razmjenu podataka među lokacijama bez obzira na brzinu i pouzdanost Internet konekcije.",
                  "Kod većih trgovačkih preduzeća, može se uspostaviti automatsko punjenje zaliha po poslovnicama te praćenje stanja svake od poslovnica u bilo kojem trenutku. U proizvodnim konfiguracijama, sistem prati i automatski obavještava o spremnosti proizvoda za isporuku.",
                  "Uz pomoć IVIS-a, inventure Vam više neće biti problem obzirom da podržava više načina za inventuru: ručni unos, importom tabela raznih formata, skeniranjem putem barkod čitača. To će Vam značajno skratiti potrebno vrijeme za inventure i umanjiti mogućnost greške prilikom inventurisanja.",
                ]}
                list={[]}
                textTwo={""}
              />
            }
          />
          <Route
            path="/accounting"
            element={
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
            }
          />
          <Route
            path="/logistics"
            element={
              <AreaLayout
                imageOne={AreaLogistics1}
                imageTwo={AreaLogistics2}
                logo={AreaLogisticsLogo}
                title={"Logistika"}
                subTitle={"Planirajte i pojednostavite isporuke roba."}
                textBox={
                  "Kada obezbijedite proizvod ili robu na vrijeme, ostaje još jedan korak: isporuka. Ako taj proces nije izveden bez poteškoća, prethodni trud će biti uzaludan. IVIS će vam pomoći da organizujete isporuke na vrijeme."
                }
                questions={[
                  "Znate li kada možete organizirati isporuku?",
                  "Koliko Vas koštaju greške prilikom utovara pogrešne robe?",
                  "Kako obavještavate računovodstvo o ugovorenim uslugama i cijenama?",
                ]}
                textOne={""}
                texts={[
                  "IVIS će vam omogućiti precizno planiranje isporuka zasnovanih na prodajnim informacijama i raspoloživosti. Možete planirati i pratiti kompleksne zbirne isporuke za više kupaca i istovarnih mjesta s velikim brojem pozicija. Integracija sa mobilnim barkod uređajima omogućiće vam brzu i preciznu organizaciju otpreme, bez mjesta za greške pri utovaru.",
                ]}
                list={[]}
                textTwo={""}
              />
            }
          />
          <Route
            path="/human_resources"
            element={
              <AreaLayout
                imageOne={AreaHumanResources1}
                imageTwo={AreaHumanResources2}
                logo={AreaHumanResourcesLogo}
                title={"Ljudski resursi"}
                subTitle={"Povećajte produktivnost i razvijte kompetencije."}
                textBox={
                  "Od evidencije potencijalnih kandidata, do mjerenja radnog učinka, IVIS će vam pomoći da zadržite i unaprijedite potencijal najvrijednijeg i najosjetljivijeg resursa: ljudi."
                }
                questions={[
                  "Koliko vremena trošite na izradu ugovora i drugih dokumenata?",
                  "Pratite li sistematski edukaciju i napredovanje?",
                  "Znate li do kada vrijede certifikati i uvjerenja vaših uposlenih?",
                  "Možete li pratiti učinak svakog pojedinca, po više indikatora?",
                  "Kako vodite evidenciju godišnjih odmora?",
                ]}
                textOne={""}
                texts={[
                  "Informacije o organizacionoj strukturi i uposlenim strukturirane su tako da olakšavaju poslove vezane za ljudske resurse i ubrzavaju rad. Evidencija ljudskih resursa osnova je za obračun plata, obračun godišnjih odmora i radnog staža, čime se pojednostavljuje obračun plata i sprečavaju greške. IVIS vam omogućava postavljanje najsloženijih modela mjerenja radnog učinka i modela kompetencija. Sistem mjerenja radnog učinka je integralni dio IVIS-a, pa se raspoloživi podaci mogu automatski prenositi u modul mjerenja radnog učinka.",
                ]}
                list={[]}
                textTwo={""}
              />
            }
          />
          <Route
            path="/production"
            element={
              <AreaLayout
                imageOne={AreaProduction1}
                imageTwo={AreaProduction2}
                logo={AreaProductionLogo}
                title={"Proizvodnja"}
                subTitle={
                  "Povećajte efikasnost upravljanjem proizvodnjom uz visoke industrijske standarde."
                }
                textBox={
                  "Preuzmite kontrolu nad najsloženijim segmentom poslovanja i učinite svoju proizvodnju agilnom."
                }
                questions={[
                  "Imate li potrebni materijal za proizvodnju na vrijeme?",
                  "Možete li optimalno iskoristiti restlove različitih dimenzija?",
                  "Imate li dovoljno raspoloživih kapaciteta i gdje su uska grla?",
                  "Kada proizvod može biti završen i da li kasnite s isporukom?",
                  "Možete li odrediti uzrok i mjesto nastanka reklamacije?",
                  "Možete li odrediti sljedivost materijala od kojeg je napravljen i isporučen proizvod?",
                  "Koliko je stvarno koštao Vaš proizvod?",
                ]}
                textOne={
                  "IVIS se može koristiti u pojedinačnoj, serijskoj i masovnoj proizvodnji u više različitih proizvodnih procesa/ pogona koji mogu, ali ne moraju biti međusobno sinhronizirani. Uz korištenje najsavremenijih metoda i najboljih poslovnih praksi, razvijen je proces koji prati cijeli tok proizvodnje:"
                }
                texts={[]}
                list={[
                  "Tehnička i operativna priprema: izrada normativa",
                  "Prijem narudžbe",
                  "Kreiranje i razrada radnog naloga",
                  "Analiza potrebnih materijala, ljudi i mašina",
                  "Fleksibilno planiranje/terminiranje proizvodnje i analiza potrebnih resursa u realnom vremenu",
                  "Praćenje realizacije utroška materijala i obavljenih tehnoloških operacija u realnom vremenu putem barkoda ili RFID uređaja",
                  "Monitoring proizvodnje - 'live' pregled dešavanja na svakoj mašini",
                  "Obračun radnog naloga preko direktnih i indirektnih troškova koji ulaze u cijenu koštanja gotovog proizvoda",
                  "Potpuna integracija sa nabavom, prodajom, finansijama i računovodstvom",
                  "Mogućnost otpreme i dopreme putem barkod čitača",
                ]}
                textTwo={
                  "Najvažnije prednosti koje ćete ostvariti korištenjem IVIS softvera se ogledaju u pravovremenom prepoznavanju problema u proizvodnji, optimalnom iskorištenju vlastitih kapaciteta, smanjenju troškova kroz konkurentnosti kroz tačno određivanje cijena vlastitih proizvoda i smanjenje rokova isporuke, te velike uštede na smanjenju škarta."
                }
              />
            }
          />
          <Route
            path="/maintenance"
            element={
              <AreaLayout
                imageOne={AreaMaintenance1}
                imageTwo={AreaMaintenance2}
                logo={AreaMaintenanceLogo}
                title={"Održavanje"}
                subTitle={
                  "Skratite vrijeme otklanjanja zastoja i troškove održavanja."
                }
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
            }
          />
          <Route
            path="/services"
            element={
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
            }
          />
          {/*  */}
          <Route path="/implementation" element={<ImplementationLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/login" element={<LoginLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
