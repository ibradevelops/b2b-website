import { useEffect } from "react";
import Implementation1 from "../images/implementation-1.jpg";
import Implementation2 from "../images/implementation-2.png";
import Header from "../components/ImplementationComponents/Header";
import TextBox from "../components/ImplementationComponents/TextBox";

import AreaApplicationItems from "../components/GlobalComponents/AreaApplicationItems";
import AreaCarousel from "../components/AreaComponents/AreaCarousel";

function ImplementationLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="implementation">
      <Header>
        <img
          src={Implementation1}
          className="implementation__header-img"
          alt="Background"
        />
      </Header>
      <div className="implementation__text">
        <TextBox
          textOne={
            "Implementacija ERP sistema je složen proces od kojeg zavisi uspjeh projekta. Za vrijeme procesa implementacije dolazi do spajanja ERP sistema sa strukturom, načinom rada i internim procedurama organizacije u kojoj se implementira. Na kraju se dobije jedinstveni informacioni sistem optimiziran za svakog korisnika, uvažavajući njegove specifičnosti i potrebe."
          }
          textTwo={
            "Počevši od strateškog planiranja, određivanja ciljeva preko kreiranja rješenja do njegovog testiranja i primjene u praksi, proces implementacije se sastoji od više faza koje zadiru u veliki broj područja. Stoga IVIS implementira multidisciplinarni tim stručnjaka iz raznih oblasti: organizacije proizvodnje, računovodstva, ljudskih resursa...Na taj način pomažemo svojim korisnicima da njihova organizacija evoluira u svakom poslovnom aspektu."
          }
          textThree={
            "Svakom klijentu pristupamo individualno, pokušavajući razumjeti njegove želje i potrebe. Uvažavamo zahtjeve svakog od njih, te nalazimo nove mogućnosti kako bi se njihovo poslovanje pojednostavilo i unaprijedilo."
          }
        >
          Individualni pristup
        </TextBox>
        <TextBox
          textOne={
            "Koristimo moderne agilne metode u procesu implementacije u kojima se fokusiramo na brzo postizanje rezultata. Proces počinje analizom poslovnih procesa korisnika, njegovih potreba, zahtjeva i specifičnosti. Nakon određivanja liste zahtjeva, odnosno funkcionalnosti koje je potrebno implementirati kreće se u proces konfiguracije rješenja. Taj proces se odvija u više ponavljajućih faza. U okviru svake faze se kreira rješenje, prezentira korisniku, dorađuje, sve dok se ne postigne zadovoljavajući rezultat. Nakon obuke korisnika, rješenje se pušta u rad, nadzire se, te se prate i obrađuju eventualni zahtjevi za korekcijama. Potom se dobiva konačno rješenje, koje se opet u toku eksploatacije može mijenjati i dorađivati."
          }
          textTwo={""}
          textThree={""}
        >
          Metodologija
        </TextBox>
        <img
          className="implementation__text-img"
          alt="Implementation"
          src={Implementation2}
        />
        <TextBox
          textOne={
            "Jedna od najvažnijih prednosti IVIS-a jeste univerzalna osnova koja se može prilagoditi širokom rasponu potreba, odnosno individualnim načinima poslovanja, bilo da se radi o industriji, trgovini, državnoj službi... Zbog toga dajemo sve od sebe da se vi u što manjoj mjeri morate prilagoditi softveru, već će se on prilagoditi vašim potrebama, istovremeno donoseći svoja iskustva najbolje prakse. Na taj način vaše poslovanje će ostati strukturirano na način na koji vi to želite, bez potrebe za bilo kakvim neugodnim promjenama."
          }
        >
          Softver prema vašim potrebama
        </TextBox>
        <TextBox
          textOne={
            "Sistem se kontinuirano unapređuje i nadograđuje novim cjelinama, koje će vam u još većoj mjeri olakšati vođenje poslovanja."
          }
          textTwo={
            "Zbog toga možete biti sigurni da će nove mogućnosti IVIS-a vašem poslovanju neprestano donositi novu vrijednost, koje će u konačnici ne samo vratiti uloženo, već će biti isplative na više nivoa."
          }
          textThree={""}
        >
          Razvoj
        </TextBox>
      </div>
      {/* <AreaApplicationItems /> */}
      <AreaCarousel />
    </div>
  );
}

export default ImplementationLayout;
