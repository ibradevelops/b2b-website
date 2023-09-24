import useObserver from "../../hooks/useObserver";
import SingleResult from "./SingleResult";

function Results() {
  const { element, visibility, animate } = useObserver();
  return (
    <section
      ref={element}
      className={`results__section ${visibility} ${animate(
        "opacityAnimation"
      )}`}
    >
      <SingleResult
        num={"2.835"}
        txt={"Tiketa podrške godišnje"}
      />
      <div className="results__section-line"></div>
      <SingleResult
        num={"63 min"}
        txt={"Prosječno vrijeme rješavanja tiketa"}
      />
      <div className="results__section-line"></div>
      <SingleResult
        num={"1.880.331"}
        txt={"Linija koda"}
      />
    </section>
  );
}

export default Results;
