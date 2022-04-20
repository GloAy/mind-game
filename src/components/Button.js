import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Buttons = ({ handleColorClick }) => {
  return (
    <div className="colorButtons">
      <ButtonGroup size="lg" className="mb-2">
        <Button
          className="buttons"
          style={{ background: "blue", width: "50px" }}
          onClick={() => handleColorClick("0")}
        >
          0
        </Button>
        <Button
          className="buttons"
          style={{ background: "#DD7371", width: "50px" }}
          onClick={() => handleColorClick("1")}
        >
          1
        </Button>
        <Button
          className="buttons"
          style={{ background: "#C17D7D", width: "50px" }}
          onClick={() => handleColorClick("2")}
        >
          2
        </Button>
        <Button
          className="buttons"
          style={{ background: "#BAA0A1", width: "50px" }}
          onClick={() => handleColorClick("3")}
        >
          3
        </Button>
        <Button
          className="buttons"
          style={{ background: "#DD7371", width: "50px" }}
          onClick={() => handleColorClick("4")}
        >
          4
        </Button>
        <Button
          className="buttons"
          style={{ background: "#F5238E", width: "50px" }}
          onClick={() => handleColorClick("5")}
        >
          5
        </Button>
        <Button
          className="buttons"
          style={{ background: "#F0BEBC", width: "50px" }}
          onClick={() => handleColorClick("6")}
        >
          6
        </Button>
        <Button
          className="buttons"
          style={{ background: "#273558", width: "50px" }}
          onClick={() => handleColorClick("7")}
        >
          7
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
