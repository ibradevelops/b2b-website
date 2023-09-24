import { useState } from "react";
import Button from "../HomeComponents/Button";
//
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact__form-box">
        <input
          type="text"
          placeholder="Vaše Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Vaš Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className="contact__form-text-area"
        placeholder="Poruka"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <Button>Pošalji</Button>
    </form>
  );
}

export default Form;
