import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello JS</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummy" },
    React.createElement("h1", null, "Hello JS")
  );
};

export default Hello;
