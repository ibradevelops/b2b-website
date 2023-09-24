import { useEffect } from "react";
import Intro from "../components/HomeComponents/Intro";
import AreaApplication from "../components/HomeComponents/AreaApplication.js";
import SpecialModules from "../components/HomeComponents/SpecialModules.js";
import Implementation from "../components/HomeComponents/Implementation.js";
import Introduction from "../components/HomeComponents/Introduction.js";
import Results from "../components/HomeComponents/Results.js";
import Who from "../components/HomeComponents/Who.js";
import Partners from "../components/HomeComponents/Partners.js";
import Support from "../components/HomeComponents/Support.js";

function HomeLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Intro />
      <AreaApplication />
      <SpecialModules />
      <Implementation />
      <Introduction />
      <Results />
      <Who />
      <Partners />
      <Support />
    </>
  );
}

export default HomeLayout;
