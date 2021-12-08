import React from "react";

const FeedbackOptions = ({ handleClick }) => {
  return (
    <div>
      <button id="good" type="button" onClick={handleClick}>
        Good
      </button>
      <button id="neutral" type="button" onClick={handleClick}>
        Neutral
      </button>
      <button id="bad" type="button" onClick={handleClick}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
