import React from "react";

function Banner({ gameStatus, numberOfGuesses, answer }) {
  return (
    <div class={`${gameStatus} banner`}>
      {gameStatus === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numberOfGuesses === 1 ? "1 guess" : `${numberOfGuesses} guesses`}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
