function AreaQuestion({ question, i }) {
  const lastUnique =
    "Znate li u svakom trenutku stanje robe u Vašim trgovinama i koliko vremena trošite na prenos robe?";
  //
  return (
    <div
      className={`area__questions-single ${
        question === lastUnique ? "m-top" : ""
      }`}
    >
      <p className="area__questions-single-number">0{i + 1}</p>
      <p className="area__questions-single-text">{question}</p>
    </div>
  );
}

export default AreaQuestion;
