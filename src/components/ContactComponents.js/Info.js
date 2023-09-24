import Logo from "../../images/image.svg";
import Location from "../../images/location-icon.png";
import Email from "../../images/email-icon.png";
import Phone from "../../images/phone-icon.png";

function Info() {
  return (
    <div className="contact__info">
      <div className="contact__info-box">
        <img className="contact__info-box-logo" alt="Logo" src={Logo} />
        <h2 className="contact__info-box-title">B2B d.o.o</h2>
      </div>
      <div className="contact__info-box">
        <img src={Location} alt="Location" className="contact__info-box-icon" />
        <p>
          Branilaca Sarajeva 27 <br /> 71000 Sarajevo, BiH
        </p>
      </div>
      <div className="contact__info-box">
        <img src={Email} alt="Email" className="contact__info-box-icon" />
        <p>b2b@b2b.ba</p>
      </div>
      <div className="contact__info-box">
        <img src={Phone} alt="Phone" className="contact__info-box-icon" />
        <p>
          +387 33 838 929 <br />
          ili +387 62 990 910 za Viber, WhatsApp, Mobile.
        </p>
      </div>
    </div>
  );
}

export default Info;
