import React from "react";

function DebugInfo({ input, buffer, operation }) {
  return (
    <>
      <p>input: {input}</p>
      <p>buffer: {buffer}</p>
      <p>operation: {operation}</p>
    </>
  );
}

export default DebugInfo;
