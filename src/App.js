import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import NumPad from "./NumPad";
import DebugInfo from "./DebugInfo";
// https://github.com/psplery/reactCalculatorWhooks.git
function App() {
  const [input, setInput] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [operation, setOperation] = useState("");

  const handleButton = (buttValue) => {
    if (input === 0) {
      setInput(() => parseInt(buttValue, 10));
    } else {
      setInput(() => parseInt(input + buttValue, 10));
    }
  };

  const handleOperation = (type) => {
    setOperation(type);
    setBuffer(() => input);
    setInput(0);
  };

  const resetOps = () => {
    setOperation("");
  };

  const evaluateCalulation = () => {
    if (input !== 0) {
      switch (operation) {
        case "+":
          setInput(() => input + buffer);
          resetOps();
          break;
        case "-":
          setInput(() => buffer - input);
          resetOps();
          break;
        case "/":
          setInput(() => buffer / input);
          resetOps();
          break;
        case "*":
          setInput(() => buffer * input);
          resetOps();
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className="App">
      <h1>My first app is a shitty calculator</h1>
      <Display curVal={input} />
      <NumPad
        numFunction={handleButton}
        opFunction={handleOperation}
        evalFunction={evaluateCalulation}
      />
      <DebugInfo input={input} buffer={buffer} operation={operation} />
    </div>
  );
}

export default App;
