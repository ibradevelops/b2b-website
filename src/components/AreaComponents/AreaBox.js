function AreaBox({ logo, textBox }) {
  return (
    <div className="area__box">
      <img className="area__box-img" alt="Area Logo" src={logo} />
      <div className="area__box-line"></div>
      <p className="area__box-text">{textBox}</p>
    </div>
  );
}

export default AreaBox;
