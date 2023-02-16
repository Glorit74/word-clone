import React from "react";

function GuessInput({ handleGuesses }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleGuesses(guess);
    setGuess("");
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 characters"
        maxLength={5}
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
