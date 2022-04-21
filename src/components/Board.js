import React from "react";
import Buttons from "./Button";
import colors from "./Colors";

//you have the color picker
//different components

const Board = ({ data, handleColorClick, playerInput, history }) => {
  //the first one was i was not passing the function properly
  //i was using the class component state

  return (
    <div className="board">
      {/* <div className="row">{data}</div> */}
      <div className="guessed-stars">
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
      <div className="color-stars">
        <p>
          {playerInput.map((num, i) => {
            return <span key={i}>{colors[num]}</span>;
          })}
        </p>
      </div>
      <div className="menu">
        <Buttons handleColorClick={handleColorClick} />
      </div>
    </div>
  );
};

export default Board;
