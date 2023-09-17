import useObserver from "../hooks/useObserver";

function Who() {
  const { element, animate, visibility } = useObserver();
  return (
    <section ref={element} className="whoAreWe__section">
      <p
        className={`whoAreWe__section-title ${visibility} ${animate(
          "fromBottomAnimation"
        )}`}
      >
        Ko smo mi?
      </p>
      <div className="whoAreWe__section-box">
        <h2
          className={`whoAreWe__section-box-work ${visibility} ${animate(
            "fromLeftAnimation"
          )}`}
        >
          Mi vam olakšavamo posao
        </h2>
        <div
          className={`whoAreWe__section-box-text ${visibility} ${animate(
            "fromRightAnimation"
          )}`}
        >
          <p>
            IVIS raste više od 30 godina, mijenjajući se u korak s tehnologijom,
            ali uvijek s jasnim težištem na svjetskim standardima najboljih
            poslovnih praksi.
          </p>
          <p>
            Pažljivo odabrani tim stručnjaka izbalansiran između iskustva,
            entuzijazma i kreativnosti svaki dan radi na tome da napravi
            najbolji ERP software i korisnicima pruži najbolju moguću podršku.
          </p>
          <p>
            IVIS je nastao i razvija se u BiH i prilagođen je potrebama i
            praksama u BiH. Okrenuti smo proizvodnim, trgovačkim i uslužnim
            firmama čiji rast zahtijeva bolju organizaciju, jaku i pouzdanu
            podršku.
          </p>
          <p>
            Svojim korisnicima dajemo vrhunski ERP uz vrhunsku podršku i brzu
            mogućnost prilagođavanja.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Who;
