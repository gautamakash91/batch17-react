import { useState } from "react";
import Child from "./child";

export default function Parent() {
  const [num1, setNum1] = useState([
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }
  ]);
  return (
    <div>
      hi this is parent
      <Child n={num1} n2={setNum1} />
    </div>
  )
}