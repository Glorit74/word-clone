import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Y", "X", "C", "V", "B", "N", "M"],
  ];

  function letterColletor(guesses) {
    const index = guesses.indexOf(0);
    const tryedLetter = [...guesses].slice(0, index);
    console.log(tryedLetter);
  }

  letterColletor(guesses);
  //   const checkingCode = checkGuess(guesses, answer);

  return (
    <div className="keyboard-wrapper">
      {keyboard.map((line, index) => (
        <p className="keyboard-line">
          {line.map((letter, index) => (
            <span
              key={index}
              className={`keyboard-cell
		
			`}
            >
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
