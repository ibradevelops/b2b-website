import { useEffect } from "react";
import Form from "../components/ContactComponents.js/Form";
import Info from "../components/ContactComponents.js/Info";

function ContactLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="contact">
      <header className="contact__header">
        <h2 className="contact__header-title">Kontaktirajte nas</h2>
        <p className="contact__header-sub-title">Osjetite razliku</p>
      </header>
      <main className="contact__main">
        <Form />
        <Info />
      </main>
    </section>
  );
}

export default ContactLayout;
