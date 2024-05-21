import React from "react";
import { useState } from "react";
import "./src.css";

function Calculator() {
  const [display, setDisplay] = useState("10");
  const [currentInput, setCurrentInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState("");

  function handleDigitClick(e) {
    let value = +e.target.value;
    setCurrentInput(currentInput + value);
  }
  function handleOperatorClick(e) {
    let operator = e.target.value;
    setOperator(operator);
    setCurrentInput("");
    setPrevInput(currentInput);
  }
  function handleAnswerClick() {
    switch (operator) {
      case "+":
        setDisplay(`${+currentInput + +prevInput}`);
        break;
      case "-":
        setDisplay(`${+prevInput - +currentInput}`);
        break;
      case "/":
        setDisplay(`${+prevInput / +currentInput}`);
        break;
      case "*":
        setDisplay(`${+currentInput * +prevInput}`);
        break;
      default:
        break;
    }
  }
  function handleClearClick(e) {
    setDisplay("0");
    setCurrentInput("");
    setPrevInput("");
    setOperator("");
  }

  return (
    <div className="calc">
      <ul>
        <li>
          {prevInput}
          {operator}
          {currentInput}
        </li>
        <li>Ответ {display}</li>
        <li>
          <input type="button" value={1} onClick={handleDigitClick} />
          <input type="button" value={2} onClick={handleDigitClick} />
          <input type="button" value={3} onClick={handleDigitClick} />
          <input type="button" value={"/"} onClick={handleOperatorClick} />
        </li>
        <li>
          <input type="button" value={4} onClick={handleDigitClick} />
          <input type="button" value={5} onClick={handleDigitClick} />
          <input type="button" value={6} onClick={handleDigitClick} />
          <input type="button" value={"*"} onClick={handleOperatorClick} />
        </li>
        <li>
          <input type="button" value={7} onClick={handleDigitClick} />
          <input type="button" value={8} onClick={handleDigitClick} />
          <input type="button" value={9} onClick={handleDigitClick} />
          <input type="button" value={"-"} onClick={handleOperatorClick} />
        </li>
        <li>
          <input type="button" value={0} onClick={handleDigitClick} />
          <input type="button" value={"C"} onClick={handleClearClick} />
          <input type="button" value={"="} onClick={handleAnswerClick} />
          <input type="button" value={"+"} onClick={handleOperatorClick} />
        </li>
      </ul>
    </div>
  );
}

export default Calculator;
