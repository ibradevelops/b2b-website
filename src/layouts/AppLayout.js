import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/GlobalComponents/Navbar";
import Footer from "../components/GlobalComponents/Footer";
import { useEffect } from "react";

function AppLayout({ toggleDropdown, referenca, onHandleClick }) {
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
        referenca={referenca}
        toggleDropdown={toggleDropdown}
        onHandleClick={onHandleClick}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
