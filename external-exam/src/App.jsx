import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    const number = parseInt(num);

    if (isNaN(number)) {
      setResult("Please enter a valid number");
      return;
    }

    const digits = number.toString().split("");
    const power = digits.length;

    let sum = 0;

    for (let digit of digits) {
      sum += Math.pow(parseInt(digit), power);
    }

    if (sum === number) {
      setResult(`${number} is an Armstrong Number`);
    } else {
      setResult(`${number} is NOT an Armstrong Number`);
    }
  };

  return (
    <div className="container">
      <h1>Armstrong Number Checker</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={checkArmstrong}>Check</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
