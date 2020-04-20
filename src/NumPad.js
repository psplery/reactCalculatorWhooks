import React from "react";
import NumButton from "./NumButton";
import OperationButton from "./OperationButton";
import EnterButton from "./EnterButton";

function NumPad({ numFunction, opFunction, evalFunction }) {
  return (
    <>
      <div>
        <NumButton buttVal="1" action={numFunction} />
        <NumButton buttVal="2" action={numFunction} />
        <NumButton buttVal="3" action={numFunction} />
      </div>
      <div>
        <NumButton buttVal="4" action={numFunction} />
        <NumButton buttVal="5" action={numFunction} />
        <NumButton buttVal="6" action={numFunction} />
      </div>
      <div>
        <NumButton buttVal="7" action={numFunction} />
        <NumButton buttVal="8" action={numFunction} />
        <NumButton buttVal="9" action={numFunction} />
      </div>
      <div>
        <NumButton buttVal="0" action={numFunction} />
      </div>
      <div>
        <OperationButton buttonText="+" action={opFunction} />
        <OperationButton buttonText="-" action={opFunction} />
        <OperationButton buttonText="*" action={opFunction} />
        <OperationButton buttonText="/" action={opFunction} />
        <EnterButton action={evalFunction} />
      </div>
    </>
  );
}

export default NumPad;
