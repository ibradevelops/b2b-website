import { useEffect, useRef, useState } from "react";

function useObserver() {
  const [interacting, setInteracting] = useState(false);
  const element = useRef(null);
  //
  const visibility = !interacting ? "hide-section" : "";
  function animate(parametar) {
    if (interacting) return parametar;
    else return "";
  }
  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInteracting(true);
        } else {
          return;
        }
      },
      { root: null, threshold: 0.2 }
    );

    const observedElement = element.current;
    observedElement && observer.observe(observedElement);
    //
    return () => observedElement && observer.disconnect();
  }, []);

  return { element, visibility, animate };
}

export default useObserver;
