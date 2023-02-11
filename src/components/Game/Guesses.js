import React, { useState } from "react";

function Guesses({ handleGuesses, answer, step, setStep }) {
  const [guess, setGuess] = useState("");
  const [disable, setDisable] = useState(false);

  //   console.log(step, answer === guess);
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length < 5) return;
          handleGuesses(guess);
          if (step <= 4) setStep(step + 1);
          else setDisable(true);
          if (guess !== answer) setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={disable}
          maxLength={5}
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase().replace(/[^a-z]/gi, ""));
          }}
        />
        <p>5 letters</p>
      </form>
      <br />
    </>
  );
}

export default Guesses;
