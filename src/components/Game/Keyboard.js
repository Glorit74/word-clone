import React from "react";
import { checkUsedLettersOnKeyboard } from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Y", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard-wrapper">
      {keyboard.map((line, index) => (
        <p key={index} className="keyboard-line">
          {line.map((letter, index) => (
            <span
              key={index}
              className={`keyboard-cell
			${checkUsedLettersOnKeyboard(guesses, answer, letter)}
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
