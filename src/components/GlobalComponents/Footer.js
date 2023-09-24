import Image from "../../images/image.svg";
import FooterList from "./FooterList";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left-box">
        <img className="footer__left-box-image" src={Image} alt="Logo" />
        <h2 className="footer__left-box-title">Preuzmite kontrolu</h2>
      </div>
      <div className="footer__right-box">
        <div className="footer__right-box-first">
          <h2 className="footer__right-box-first-title">Kontaktirajte nas</h2>
          <FooterList
            order={"first"}
            textOne={"B2B doo Sarajevo"}
            textTwo={"b2b@b2b.ba"}
            textThree={"+387 33 838 929"}
            textFour={"+387 62 990 910"}
          />
          <address className="footer__right-box-first-address">
            Branilaca Sarajeva 27, 71000 Sarajevo, BiH
          </address>
        </div>
        <div className="footer__right-box-second">
          <h2 className="footer__right-box-second-title">Istraži</h2>
          <FooterList
            order={"second"}
            textOne={"Početna"}
            textTwo={"Područja primjene"}
            textThree={"Kontakt"}
            textFour={"LOG IN"}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
