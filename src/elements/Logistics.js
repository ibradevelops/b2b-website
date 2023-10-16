import AreaLogistics1 from "../images/area-logistics-1.jpg";
import AreaLogistics2 from "../images/area-logistics-2.png";
import AreaLogisticsLogo from "../images/logistika.svg";
import AreaLayout from "../layouts/AreaLayout";
//
function Logistics() {
  return (
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
  );
}

export default Logistics;
