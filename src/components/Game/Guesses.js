import React, { useState } from "react";

function Guesses({ handleGuesses, answer, step, setStep }) {
  const [guess, setGuess] = useState("");

  //   console.log(step, answer === guess);
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length < 5) return;
          handleGuesses(guess);
          if (step < 7) setStep(step + 1);
          if (guess !== answer) setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          maxLength={5}
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase().replace(/[^a-z]/gi, ""));
          }}
        />
        <p>Max 5 letters</p>
      </form>
    </>
  );
}

export default Guesses;
