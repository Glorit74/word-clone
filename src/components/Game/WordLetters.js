import React from "react";
import { checkGuess } from "../../game-helpers";

function WordLetters({ word, answer }) {
  const checkingCode = checkGuess(word, answer);
  return (
    <>
      {word.split("").map((letter, index) => (
        <span key={index} className={`cell ${checkingCode[index].status}`}>
          {letter}
        </span>
      ))}
    </>
  );
}

export default WordLetters;
