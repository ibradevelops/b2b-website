import useObserver from "../../hooks/useObserver";

function Introduction() {
  const { element, visibility, animate } = useObserver();
  return (
    <section
      ref={element}
      className={`introduction__section ${visibility} ${animate(
        "opacityAnimation"
      )}`}
    >
      <p className="introduction__section-text">
        Mi smo eksperti za IT podršku u kompleksnim proizvodnim okruženjima.
        Uspješno rješavamo probleme u praćenju proizvodnje.
        <br /> Donosimo svjetske standarde po pristupačnim cijenama.
      </p>
    </section>
  );
}

export default Introduction;
