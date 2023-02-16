import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleGuesses(guess) {
    const nextGuess = {
      id: `${guess}-${Math.random()}`,
      value: guess,
    };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
    if (guess === answer) setGameStatus("happy");
    else if (nextGuesses.length >= 6) setGameStatus("sad");
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} />
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          numberOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
