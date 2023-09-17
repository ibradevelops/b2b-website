import Button from "./Button";
import useObserver from "../hooks/useObserver";

function Implementation() {
  const { element, visibility, animate } = useObserver();
  return (
    <section ref={element} className="implementation__section">
      <p
        className={`implementation__section-title ${visibility} ${animate(
          "fromBottomAnimation"
        )}`}
      >
        Implementacija
      </p>
      <span className={`${animate("fromLeftAnimation")} ${visibility}`}>
        <p className="implementation__section-text">
          Svakom klijentu pristupamo individualno, pokušavajući razumjeti
          njegove želje i potrebe. Uvažavamo zahtjeve svakog od njih, te
          nalazimo nove mogućnosti kako bi se njihovo poslovanje pojednostavilo
          i unaprijedilo.
        </p>
        <Button>Saznaj više</Button>
      </span>
    </section>
  );
}

export default Implementation;
