import React from "react";
import { useState } from "react";
import "./src.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [currentInput, setCurrentInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState("");

  const Calc = {
    display: display,
    currentInput: currentInput,
    operator: operator,
    prevInput: prevInput,
  };

  function handleDigitClick(e) {
    let value = +e.target.value;
    Calc.currentInput += `${value}`;
    setCurrentInput(Calc.currentInput);
    if (!!Calc.operator && !!Calc.currentInput) {
      Calc.prevInput += `${value}`;
    }
    setPrevInput(Calc.prevInput);
    console.log(Calc);
  }
  function handleOperatorClick(e) {
    let operator = e.target.value;
    Calc.operator = `${operator}`;
    setOperator(Calc.operator);
    console.log(Calc);
  }
  function handleAnswerClick() {
    switch (Calc.operator) {
      case "+":
        Calc.display = setDisplay(`${+Calc.currentInput + +Calc.prevInput}`);
        break;
      case "-":
        Calc.display = setDisplay(`${+Calc.currentInput - +Calc.prevInput}`);
        break;
      case "/":
        Calc.display = setDisplay(`${+Calc.currentInput / +Calc.prevInput}`);
        break;
      case "*":
        Calc.display = setDisplay(`${+Calc.currentInput * +Calc.prevInput}`);
        break;
      default:
        break;
    }
    console.log(Calc);
  }
  function handleClearClick(e) {
    console.log(Calc);
  }

  return (
    <div className="calc">
      <ul>
        <li>
          {Calc.currentInput}
          {Calc.operator}
          {Calc.prevInput}
        </li>
        <li className="answ">Ответ {Calc.display}</li>
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
