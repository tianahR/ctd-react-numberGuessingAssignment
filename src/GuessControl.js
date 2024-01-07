import React from "react";
import Button from "./Button.js";


const GuessControl = (props) => {

        const [currentGuess, setCurrentGuess] = React.useState("");

        const handleInputChange = (event) => {
          setCurrentGuess(event.target.value);
        };

        const onSubmitGuess = () => {
          props.onGuess(Number(currentGuess));
          setCurrentGuess("");
        };


        return (
          <div>
            <input
              type="number"
              value={currentGuess}
              onChange={handleInputChange}
            />
            <Button onClick={onSubmitGuess}>Submit Guess</Button>
          </div>
        );

}

export default GuessControl;
