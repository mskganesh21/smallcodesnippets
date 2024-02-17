import React, { useState, useMemo } from "react";
import "./styles.css";

export default function App() {
  const [Counter1, setCounter1] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  const product = () => {
    console.log("product called");
    return Counter1 * Counter1;
  };

  const memoProduct = useMemo(product, [Counter1]);

  return (
    <div className="App">
      <h1>This is a sample example usage of react useMemo hook</h1>
      <h3>Counter1: {Counter1}</h3>
      <h3>Product: {memoProduct} </h3>
      <button onClick={() => setCounter1(Counter1 + 1)}>Click</button>
      <h3>Counter2: {Counter2}</h3>
      <button onClick={() => setCounter2(Counter2 + 1)}>Click</button>
    </div>
  );
}
