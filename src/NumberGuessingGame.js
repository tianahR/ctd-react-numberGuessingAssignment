import React from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;



const NumberGuessingGame = () => {

  

    const [numberToGuess, setNumberToGuess] = React.useState(getRandomNumber());
    const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);
    const [latestGuess, setLatestGuess] = React.useState(null);

    const isCorrectGuess = latestGuess === numberToGuess;

    const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;



    // Create a handleGuess function that will be passed in to the GuessControl component as the onGuess prop. 
    // This function should take the guess as an argument and set the latestGuess state with the guess 
    // (converted to a number using the Number function) and increment the numberOfGuesses state.

    const handleGuess = (guess) => {
      setLatestGuess(guess);
      setNumberOfGuesses(numberOfGuesses + 1);
    };

    // Create a handleReset function within the component that resets all 3 of the state properties the same way the handleReset function 
    // from the class component reset them. Pass this function to the GameOver component as the onReset prop.

    const handleReset = () => {
      setNumberToGuess(getRandomNumber());
      setNumberOfGuesses(0);
      setLatestGuess(null);
    };

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}
export default NumberGuessingGame;
