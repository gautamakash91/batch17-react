import { useState } from "react";
import Child from "./child";

export default function Parent() {
  const [showChild, setShowChild] = useState(false);
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleClick = () => {
    setShowChild(!showChild);
  }

  const increaseNum1 = () => {
    setNum1(num1 + 1);
  }

  const increaseNum2 = () => {
    setNum2(num2 + 1);
  }

  return (
    <div>
      Hi this is parent {num1} - {num2}.
      <br />
      <button onClick={handleClick}> toggle </button>
      <button onClick={increaseNum1}>increase num1</button>
      <button onClick={increaseNum2}>increase num2</button>
      <br />
      {showChild === true ? <Child num1={num1} num2={num2} /> : "when condition is false"}
    </div>
  )
}