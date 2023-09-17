import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";
import AreaApplication from "./components/AreaApplication.js";
import SpecialModules from "./components/SpecialModules.js";
import Implementation from "./components/Implementation.js";
import Introduction from "./components/Introduction.js";
import Results from "./components/Results.js";
import Who from "./components/Who.js";
import Partners from "./components/Partners.js";
import Support from "./components/Support.js";
import Footer from "./components/Footer.js";
import MenuOverlay from "./components/MenuOverlay.js";
//
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      {toggleMenu ? (
        <MenuOverlay onSetToggleMenu={setToggleMenu} />
      ) : (
        <>
          <Navbar onSetToggleMenu={setToggleMenu} />
          <Intro />
          <AreaApplication />
          <SpecialModules />
          <Implementation />
          <Introduction />
          <Results />
          <Who />
          <Partners />
          <Support />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
