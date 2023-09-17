import SpecialModule from "./SpecialModule";
import AutobuskaStanica from "../images/autobuska-stanica.svg";
import LjekarskaOrdinacija from "../images/ljekarska-ordinacija.svg";
import TrezorskoPoslovanje from "../images/trezorsko-poslovanje.svg";
import Restoran from "../images/restoran.svg";
import useObserver from "../hooks/useObserver";
//
function SpecialModules() {
  const { element, visibility, animate } = useObserver();
  return (
    <section ref={element} className="specialModules__section">
      <p
        className={`specialModules__section-title ${visibility} ${animate(
          "fromBottomAnimation"
        )}`}
      >
        Specijalistički moduli
      </p>
      <div
        className={`specialModules__section-items ${visibility} ${animate(
          "opacityAnimation"
        )}`}
      >
        <SpecialModule photo={AutobuskaStanica} title={"Autobuska stanica"} />
        <SpecialModule
          photo={LjekarskaOrdinacija}
          title={"Ljekarska ordinacija"}
        />
        <SpecialModule
          photo={TrezorskoPoslovanje}
          title={"Trezorsko poslovanje"}
        />
        <SpecialModule photo={Restoran} title={"Restoran"} />
      </div>
    </section>
  );
}

export default SpecialModules;
