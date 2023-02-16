import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessListItem from "../GuessListItem";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        // <p className="guess" key={id}>
        //   <span className="cell">{value}</span>
        // </p>
        <GuessListItem key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
