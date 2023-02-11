import React from "react";

function Banner({ guess, answer, step }) {
  console.log("banner", guess);
  return (
    <>
      {guess !== answer ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {step} {step !== 1 ? "guesses" : "guess"}
            </strong>
            .
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
