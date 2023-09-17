import { useEffect, useRef, useState } from "react";

function useObserver() {
  const [interacting, setInteracting] = useState(false);
  const element = useRef(null);
  //
  const visibility = !interacting ? "hide" : "";
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
        observer.unobserve(entry.target);
      },
      { root: null, threshold: 0.2 }
    );

    const observedElement = element.current;

    return () => observer.observe(observedElement);
  }, []);
  return { element, visibility, animate };
}

export default useObserver;
