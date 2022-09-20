import { useEffect, useState } from "react"

// useEffect(function, dependencies);

export default function Child({ num1, num2 }) {

  //when component is mounted
  useEffect(() => {
    console.log("Child component is mounted")
  }, [])

  //update
  useEffect(() => {
    console.log("Child component is updated")
  }, [num1])

  useEffect(() => {
    console.log("Child component is updated from num2")
  }, [num2])

  //unmount from screen
  useEffect(()=>{
    return ()=>{
      console.log("component is unmounting");
    }
  },[])

  return (
    <div>
      {num1}
      Hi this is child.
    </div>
  )
}