import useObserver from "../../hooks/useObserver";
import AreaApplicationItems from "../GlobalComponents/AreaApplicationItems";

function AreaApplication() {
  const { element, visibility, animate } = useObserver();
  //
  return (
    <section
      ref={element}
      className={`areaApplication__section ${animate(
        "opacityAnimation"
      )} ${visibility}`}
    >
      <p className="areaApplication__section-sub-title">Područja primjene</p>
      <h2 className="areaApplication__section-title">
        Za svaki aspekt vašeg poslovanja
      </h2>
      <AreaApplicationItems />
    </section>
  );
}

export default AreaApplication;
