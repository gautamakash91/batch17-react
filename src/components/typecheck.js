import { useState } from "react"

export default function NumCheck() {
  const [num1, setNum1] = useState(0);
  const handleNum1 = () => {
    setNum1(10);
  }

  return (
    <div>
      <button onClick={handleNum1}>change num1</button>
      <br />
      {num1}
      <br />

      {num1 === 10 ? "condition satisfied" : "condition is not satisfied"}
    </div>
  )
}