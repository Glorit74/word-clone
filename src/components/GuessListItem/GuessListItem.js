import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = letter ? `${status} cell` : "cell";
  return <span className={className}>{letter ? letter : undefined}</span>;
}

function GuessListItem({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell key={num} letter={value?.[num]} status={result?.[num].status} />
      ))}
    </p>
  );
}

export default GuessListItem;
