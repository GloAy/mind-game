import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Board from "./components/Board";
// import Buttons from "./components/Button";
import { Button } from "react-bootstrap";
import Rules from "./components/Rules";

export const MAX_ALLOWED_GUESSES = 10;
export const GUESS_SIZE = 4;

function App() {
  const [data, setData] = useState([]);
  const [guessInput, setGuessInput] = useState({
    playerInput: [],
    indexMatch: 0,
    valueMatch: 0,
  });

  const [attempt, setAttempt] = useState(0);
  const [history, setHistory] = useState([]);
  //const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  //const [wins, setWins] = useState(0);
  //const [losses, setLosses] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      );
      //console.log("this is the result variable", res);
      //the data we get is ['1', '\n', '2', '\n', '5', '\n', '7', '\n']
      const result = res.data.split("").filter((input) => input !== "\n");
      //console.log(result);
      //set data holds the secret code
      setData(result);
    };
    fetchData();
  }, []);

  const handleColorClick = (num) => {
    let newGuessInputs = Object.assign({}, guessInput);
    let newuserInputs = newGuessInputs.playerInput;
    let copyData = [...data];

    if (guessInput.playerInput.length < 4) {
      newuserInputs.push(num);
      setGuessInput(newGuessInputs);
    } else {
      return;
    }

    if (newuserInputs.length === 4) {
      newuserInputs.forEach((num, i) => {
        if (copyData.includes(num)) {
          newGuessInputs.valueMatch++;

          copyData[copyData.indexOf(num)] = null; //set the element in that
        }
      });
      setGuessInput({ guessInputs: newGuessInputs });

      for (let i = 0; i < newuserInputs.length; i++) {
        if (newuserInputs[i] === data[i]) {
          newGuessInputs.indexMatch++;
        }
        setGuessInput(newGuessInputs);
      }
    }
  };

  const handleSubmitClick = () => {
    let numberOfAttempts = attempt;
    numberOfAttempts++;

    //if the player attemps 10 times and the value is not equal to 4
    console.log("this is number of attempts", numberOfAttempts);
    console.log(
      "this is in the click function - begin ",
      guessInput.playerInput
    );

    if (
      numberOfAttempts === MAX_ALLOWED_GUESSES &&
      guessInput.valueMatch !== GUESS_SIZE
    ) {
      alert("Ooppsss, You did it again!");
    } else if (
      guessInput.valueMatch === GUESS_SIZE &&
      guessInput.indexMatch === GUESS_SIZE
    ) {
      alert("Yeay you did it! You are rocking it!");
    }

    let newHistory = [...history, guessInput];
    console.log("new history", newHistory);

    console.log("this is in the click function", guessInput.playerInput);
    if (guessInput.playerInput.length === GUESS_SIZE) {
      setHistory(newHistory);
      setAttempt(numberOfAttempts);
      handleClearClick();
    }
    //console.log("new history", newHistory);
  };

  const handleStartNewGame = () => {
    let newGameState = {
      guessInputs: {
        playerInput: [],
        indexMatch: 0,
        valueMatch: 0,
      },
      history: [],
      attempts: 0,
    };

    setGuessInput(newGameState.guessInputs);
    setHistory(newGameState.history);
    setAttempt(newGameState.attempts);
  };

  const handleClearClick = () => {
    let resetObj = {
      playerInput: [],
      indexMatch: 0,
      valueMatch: 0,
    };

    // console.log("reset object", resetObj);
    setGuessInput(resetObj);
  };

  return (
    <Fragment>
      <Header />
      <div className="attempt-text">
        <p>
          {" "}
          You made {MAX_ALLOWED_GUESSES - attempt} attempts. Choose Carefully!
        </p>
      </div>
      <div className="nav-buttons">
        <Button
          className="new-game"
          style={{ background: "#25CAF1" }}
          onClick={() => handleStartNewGame()}
        >
          Start New Game
        </Button>{" "}
        <Button
          variant="clear-the-board"
          style={{ background: "#1A8754" }}
          onClick={() => handleClearClick()}
        >
          Clear The Board
        </Button>{" "}
        <Button
          variant="submit"
          onClick={() => handleSubmitClick()}
          style={{
            background: "#FCC108",
            width: "90px",
            heigth: "90px",
            borderradius: "50%",
          }}
        >
          {" "}
          Submit
        </Button>{" "}
      </div>
      <div>
        <Button
          className="openModalBtn"
          variant="rules"
          onClick={() => setOpenModal(true)}
          style={{ background: "#DD3545" }}
        >
          Rules
        </Button>{" "}
        {openModal && <Rules closeModal={setOpenModal} />}
      </div>
      <Board
        data={data}
        playerInput={guessInput.playerInput}
        history={history}
        handleColorClick={handleColorClick}
      />
    </Fragment>
  );
}

export default App;
