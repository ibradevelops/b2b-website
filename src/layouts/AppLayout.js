import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/GlobalComponents/Navbar";
import Footer from "../components/GlobalComponents/Footer";
import { useEffect } from "react";

function AppLayout({
  toggleDropdown,
  setToggleDropdown,
  toggleHamburger,
  setToggleHamburger,
}) {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (url === "/") {
      navigate("/home");
    }
  }, [url, navigate]);
  //
  return (
    <>
      <Navbar
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
        toggleHamburger={toggleHamburger}
        setToggleHamburger={setToggleHamburger}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
