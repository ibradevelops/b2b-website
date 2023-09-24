import React from "react";
import AreaQuestion from "./AreaQuestion";

function AreaQuestions({ questions }) {
  return (
    <div className="area__questions">
      {questions.map((question, i) => {
        return (
          <React.Fragment key={crypto.randomUUID()}>
            <AreaQuestion question={question} i={i} />
            {questions.length - 1 !== i && (
              <div className="area__questions-line"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default AreaQuestions;
