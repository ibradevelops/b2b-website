import AreaSales1 from "../images/area-sales-1.jpg";
import AreaSales2 from "../images/area-sales-2.png";
import AreaSalesLogo from "../images/prodaja.svg";
import AreaLayout from "../layouts/AreaLayout";
function Sales() {
  return (
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
        "Možete li tačno odrediti cijenu proizvoda?",
        "Inventure su Vam problem?",
        "Znate li u svakom trenutku stanje robe u Vašim trgovinama i koliko vremena trošite na prenos robe?",
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
  );
}

export default Sales;
