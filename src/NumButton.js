import React from "react";

function NumButton({ buttVal, action }) {
  return <button onClick={() => action(buttVal)}>{buttVal}</button>;
}

export default NumButton;
