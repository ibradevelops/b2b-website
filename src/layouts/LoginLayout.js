import { useEffect, useState } from "react";
import Kruznice from "../images/kruznice.svg";
import Logo from "../images/logo.svg";
import Button from "../components/HomeComponents/Button";

function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //
  return (
    <section
      className="login"
      style={{
        backgroundImage: `url(${Kruznice})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="login__logo" alt="Logo" src={Logo} />
      <form className="login__form">
        <p className="login__form-sub-title">Dobrodošli natrag</p>
        <h2 className="login__form-title">Prijava</h2>
        <div className="login__form-box">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Prijava</Button>
        </div>
      </form>
    </section>
  );
}

export default LoginLayout;
