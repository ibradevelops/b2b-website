import AreaHumanResources1 from "../images/area-human-resources-1.jpg";
import AreaHumanResources2 from "../images/area-human-resources-2.png";
import AreaHumanResourcesLogo from "../images/ljudskiresursi.svg";
import AreaLayout from "../layouts/AreaLayout";
function HumanResources() {
  return (
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
  );
}

export default HumanResources;
