import React from "react";
import { checkGuess } from "../../game-helpers";

function WordLetters({ g, answer }) {
  const checkingCode = checkGuess(g, answer);
  return (
    <>
      {g.split("").map((letter, index) => (
        <span key={index} className={`cell ${checkingCode[index].status}`}>
          {letter}
        </span>
      ))}
    </>
  );
}

export default WordLetters;
