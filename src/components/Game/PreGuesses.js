import React, { useState } from "react";
import Guesses from "./Guesses";
import WordLetters from "./WordLetters";

function PreGuesses({ answer }) {
  const arr = [...Array(6).fill(0)];
  const [guesses, setGuesses] = useState(arr);
  const [step, setStep] = useState(0);

  let nextGuess = [];

  const handleGuesses = (guess, nextGuess) => {
    nextGuess = [...guesses];
    const indexOfZero = nextGuess.indexOf(0);
    nextGuess[indexOfZero] = guess;
    setGuesses(nextGuess);
    console.log("handle", nextGuess[step], step);
  };

  return (
    <div className="guess-result">
      <Guesses
        handleGuesses={handleGuesses}
        answer={answer}
        step={step}
        setStep={setStep}
      />
      <br />
      {/* {guesses.map((g, index) => (
        <p key={index} className="guess">
          {g}
        </p>
      ))} */}

      {guesses[0] ? (
        <div className="guess-results">
          {guesses.map((word, index) => (
            <p className="guess" key={index}>
              {word.length ? (
                <WordLetters word={word} answer={answer} />
              ) : (
                [...Array(5)].map((letter, index) => (
                  <span key={index} className="cell">
                    {" "}
                  </span>
                ))
              )}
            </p>
          ))}
        </div>
      ) : (
        <div className="guess-result">
          {[...Array(6)].map((a, index) => (
            <p className="guess" key={index}>
              {[...Array(5)].map((a, index) => (
                <span key={index} className="cell">
                  {" "}
                </span>
              ))}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default PreGuesses;
