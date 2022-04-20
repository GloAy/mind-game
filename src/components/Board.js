import React from "react";
import Buttons from "./Button";
import colors from "./Colors";

//you have the color picker
//different components

const Board = ({
  data,
  handleColorClick,
  handleSubmitClick,
  playerInput,
  history,
  handleClearClick,
}) => {
  //the first one was i was not passing the function properly
  //i was using the class component state
  console.log("this is", playerInput);
  //console.log("this is colors", colors);
  //console.log("this is history", history);

  return (
    <div className="board">
      {/* <div className="row">{data}</div> */}
      <div className="guessed-circles">
        {/*  */}
        {history.map((obj, i) => {
          return (
            <p key={i}>
              {obj.playerInput.map((num, idx) => {
                return <span key={idx}>{colors[num]}</span>;
              })}
              <span className="scores" style={{ color: "black" }}>
                {obj.valueMatch}
              </span>
              <span className="scores" style={{ color: "white" }}>
                {obj.indexMatch}
              </span>
            </p>
          );
        })}
      </div>
      <div className="color-circles">
        {playerInput.map((num, i) => {
          console.log("this is colors[num]", colors[num]);
          return <span key={i}>{colors[num]}</span>;
        })}
      </div>
      <div className="menu">
        <Buttons handleColorClick={handleColorClick} />
      </div>
    </div>
  );
};

export default Board;
