import React from "react";

function FunctionClick() {
  const clickHandler = () => {
    console.log("Button console");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
