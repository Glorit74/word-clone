export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = "correct";
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced";
    } else {
      status = "incorrect";
    }
    return {
      letter: guessChar,
      status,
    };
  });
}

export function checkUsedLettersOnKeyboard(guesses, answer, keyboard) {
  if (!guesses) {
    return null;
  }
  const indexOfZero = guesses.indexOf(0);
  const enteredGuesses = [...guesses].splice(0, indexOfZero);
  const guessesChars = enteredGuesses.map((guess) => guess.split(""));

  let status = "";

  guessesChars.map((chars) => {
    if (chars.includes(keyboard)) {
      if (chars.indexOf(keyboard) === answer.indexOf(keyboard))
        status = "correct";
      else if (answer.includes(keyboard)) status = "misplaced";
      else status = "incorrect";
    }
  });

  return status;
}
