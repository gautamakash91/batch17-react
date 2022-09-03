import { useState } from "react"

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  }

  const checkCondition = () => {
    if (loggedIn === true) {
      return "hi"
    } else {
      return "hello"
    }
  }

  return (
    <div>
      {checkCondition()}
      <button onClick={handleClick}>
        {/* IF ELSE */}
        {/* {loggedIn === true ? "logout" : "login"} */}

        {/* IF */}
        {loggedIn === true && "logout"}
      </button>
    </div>
  )
}