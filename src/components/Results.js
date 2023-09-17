import useObserver from "../hooks/useObserver";
import SingleResult from "./SingleResult";

function Results() {
  const { element, visibility, animate } = useObserver();
  return (
    <section ref={element} className="results__section">
      <SingleResult
        num={"2.835"}
        txt={"Tiketa podrške godišnje"}
        visibility={visibility}
        animate={animate("fromLeftAnimation")}
      />
      <div className="results__section-line"></div>
      <SingleResult
        num={"63 min"}
        txt={"Prosječno vrijeme rješavanja tiketa"}
        visibility={visibility}
        animate={animate("fromUpAnimation")}
      />
      <div className="results__section-line"></div>
      <SingleResult
        num={"1.880.331"}
        txt={"Linija koda"}
        visibility={visibility}
        animate={animate("fromRightAnimation")}
      />
    </section>
  );
}

export default Results;
