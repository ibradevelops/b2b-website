import SingleText from "./SingleText";

function TextBox({ children, textOne, textTwo, textThree }) {
  return (
    <div className="implementation__text-box">
      <h2 className="implementation__text-box-title">{children}</h2>
      <div className="implementation__text-box-container">
        {textOne && <SingleText>{textOne}</SingleText>}
        {textTwo && <SingleText>{textTwo}</SingleText>}
        {textThree && <SingleText>{textThree}</SingleText>}
      </div>
    </div>
  );
}

export default TextBox;
