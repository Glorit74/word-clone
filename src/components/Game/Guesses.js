import React, { useState } from "react";
import Banner from "./Banner";

function Guesses({ handleGuesses, answer, step, setStep }) {
  const [guess, setGuess] = useState("");
  const [disable, setDisable] = useState(false);
  const [bannerVisibility, setBannerVisibility] = useState(false);

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length < 5) return;
          handleGuesses(guess);
          if (step <= 5) setStep(step + 1);
          else setDisable(true);
          if (guess !== answer) setGuess("");
          if (step === 5 || guess === answer) {
            setBannerVisibility(!bannerVisibility);
            setDisable(true);
          }
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
      {bannerVisibility && <Banner step={step} answer={answer} guess={guess} />}
    </>
  );
}

export default Guesses;
