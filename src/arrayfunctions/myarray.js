//Array functions:
// 1. map
// 2. splice 
// 3. push
// 4. pop 
// 5. filter 
// 6. sort

// Syntax:
// array.function 
import { useState } from "react"
import {
  Button,
  TextField,
  Icon
} from "@mui/material";


export default function ArrayComp() {
  const [arr, setArr] = useState([]);

  const showArray = (el, i) => {
    return (<li>{el}</li>)
  }

  const handlePush = () => {
    var temp = [...arr];
    temp.push(100);
    setArr(temp);
  }

  const handlePop = () => {
    var temp = [...arr];
    temp.pop();
    setArr(temp);
  }

  const handleSplice = () => {
    var temp = [...arr];
    temp.splice(1);
    setArr(temp);
  }

  return (
    <div>
      Filter
      <ol>
        {arr.sort(function (a, b) { return a - b }).filter((el) => el < 110).map(showArray)}
      </ol>

      {/* 
      Sort
      <ol>
        {arr.sort(function(a, b){return a - b}).map(showArray)}
      </ol> 
      */}

      Full array
      <ol>
        {arr.map(showArray)}
      </ol>
      <br />
      <Button onClick={handlePush}>push</Button>
      <Button variant="outlined" color="success" onClick={handlePop}>pop</Button>
      <Button variant="contained" startIcon={<Icon>shopping_cart_checkout</Icon>} onClick={handleSplice}>splice</Button>

    </div>
  )
}