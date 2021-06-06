import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(0);

  const incr = () => {
    setnum(num + 1);
  };

  const decr = () => {
    setnum(num - 1);
  };

  const reset = () => {
    setnum(0);
  };
  return (
    <div>
      <h1>I am a Counter</h1>
      <p class="num"> {num}</p>
      <button onClick={incr}>+Number</button>
      <button onClick={decr}>-Number</button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}

export default App;
