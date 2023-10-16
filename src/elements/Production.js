import AreaProduction1 from "../images/area-production-1.jpg";
import AreaProduction2 from "../images/area-production-2.png";
import AreaProductionLogo from "../images/proizvodnja.svg";
import AreaLayout from "../layouts/AreaLayout";
function Production() {
  return (
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
  );
}

export default Production;
