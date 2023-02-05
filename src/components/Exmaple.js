import React, { useRef, useState } from "react";

const Exmaple = () => {
  const [count, setCount] = useState(0);

  const handlerOnClick = () => {
    setCount((e) => {
      return e + 1;
    });
    setCount((e) => {
      return e + 1;
    });
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handlerOnClick}>Click me</button>
    </div>
  );
};

export default Exmaple;
