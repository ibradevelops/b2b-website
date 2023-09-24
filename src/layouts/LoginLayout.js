import { useEffect } from "react";
import Logo from "../images/logo.svg";
import Button from "../components/HomeComponents/Button";

function LoginLayout() {
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  return (
    <section className="login">
      <img className="login__logo" alt="Logo" src={Logo} />
      <form className="login__form">
        <p className="login__form-sub-title">Dobrodošli natrag</p>
        <h2 className="login__form-title">Prijava</h2>
        <div className="login__form-box">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <Button>Prijava</Button>
        </div>
      </form>
    </section>
  );
}

export default LoginLayout;
