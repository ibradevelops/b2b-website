import { Link } from "react-router-dom";
import Button from "./Button";
import useObserver from "../../hooks/useObserver";

function Implementation() {
  const { element, visibility, animate } = useObserver();
  return (
    <section
      ref={element}
      className={`implementation__section ${visibility} ${animate(
        "opacityAnimation"
      )}`}
    >
      <p className="implementation__section-title">Implementacija</p>
      <p className="implementation__section-text">
        Svakom klijentu pristupamo individualno, pokušavajući razumjeti njegove
        želje i potrebe. Uvažavamo zahtjeve svakog od njih, te nalazimo nove
        mogućnosti kako bi se njihovo poslovanje pojednostavilo i unaprijedilo.
      </p>
      <Link to="/implementation">
        <Button>Saznaj više</Button>
      </Link>
    </section>
  );
}

export default Implementation;
