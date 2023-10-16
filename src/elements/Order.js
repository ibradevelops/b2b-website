import AreaLayout from "../layouts/AreaLayout";
import AreaOrder1 from "../images/area-order-1.jpg";
import AreaOrder2 from "../images/area-order-2.jpg";
import AreaOrderLogo from "../images/nabava.svg";

function Order() {
  return (
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
  );
}

export default Order;
