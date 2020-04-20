import React from "react";

function OperationButton({ buttonText, action }) {
  return <button onClick={() => action(buttonText)}>{buttonText}</button>;
}

export default OperationButton;
