import React from "react";

function Banner({ guess, answer, step }) {
  return (
    <>
      {guess === answer ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {step} {step !== 1 ? "guesses" : "guess"}
            </strong>
            .
          </p>
          {/* <button className="btn">New play</button> */}
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
