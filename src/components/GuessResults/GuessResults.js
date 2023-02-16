import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessListItem from "../GuessListItem";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // <p className="guess" key={id}>
        //   <span className="cell">{value}</span>
        // </p>
        <GuessListItem key={num} value={guesses[num]?.value} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
