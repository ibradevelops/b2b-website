function AreaQuestion({ question, i }) {
  return (
    <div className="area__questions-single">
      <p className="area__questions-single-number">0{i + 1}</p>
      <p className="area__questions-single-text">{question}</p>
    </div>
  );
}

export default AreaQuestion;
