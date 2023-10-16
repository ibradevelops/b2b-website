// hooks
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import AppLayout from "./layouts/AppLayout.js";
import HomeLayout from "./layouts/HomeLayout.js";
//
import ImplementationLayout from "./layouts/ImplementationLayout.js";
import ContactLayout from "./layouts/ContactLayout.js";
import LoginLayout from "./layouts/LoginLayout.js";
// Elements
import Order from "./elements/Order.js";
import Sales from "./elements/Sales.js";
import Accounting from "./elements/Accounting.js";
import Logistics from "./elements/Logistics.js";
import HumanResources from "./elements/HumanResources.js";
import Production from "./elements/Production.js";
import Maintenance from "./elements/Maintenance.js";
import Services from "./elements/Services.js";

//
function App() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  useEffect(
    function () {
      function closeDropdown() {
        if (!toggleDropdown) return;
        setToggleDropdown(false);
      }

      document.addEventListener("click", closeDropdown);
      return () => document.removeEventListener("click", closeDropdown);
    },
    [toggleDropdown]
  );

  useEffect(
    function () {
      function closeHamburger(e) {
        const text = e.target.textContent.split(" ").at(0) === "Područja";
        const img = e.target.tagName === "IMG";

        if (!toggleHamburger || text || img) return;
        setToggleHamburger(false);
      }

      document.addEventListener("click", closeHamburger);

      return () => document.removeEventListener("click", closeHamburger);
    },
    [toggleHamburger]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout
              toggleDropdown={toggleDropdown}
              setToggleDropdown={setToggleDropdown}
              toggleHamburger={toggleHamburger}
              setToggleHamburger={setToggleHamburger}
            />
          }
        >
          <Route
            index
            path="/"
            element={<HomeLayout setToggleHamburger={setToggleHamburger} />}
          />
          <Route
            path="/home"
            element={<HomeLayout setToggleHamburger={setToggleHamburger} />}
          />
          {/*  */}
          <Route path="/order" element={<Order />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/human_resources" element={<HumanResources />} />
          <Route path="/production" element={<Production />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/services" element={<Services />} />
          {/*  */}
          <Route path="/implementation" element={<ImplementationLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/login" element={<LoginLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
