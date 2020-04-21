import React from "react";

function DebugInfo({ input, buffer, operation }) {
  return (
    <>
      <h2>Debugging Information</h2>
      <p>input: {input}</p>
      <p>buffer: {buffer}</p>
      <p>operation: {operation}</p>
    </>
  );
}

export default DebugInfo;
