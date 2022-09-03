import Login from "./login"

export default function Child({ u, a }) {
  const MyMapFunction = (obj, index) => {
    return (
      <div>{index} {obj.email} <button>X</button></div>
    )
  }

  return (
    <div>
      this is the child
      {/* METHOD 1 */}
      {/* {a.map((obj, index) => {
        return (
          <div>{index} {obj.email}</div>
        )
      })} */}

      {/* METHOD 2 */}
      {a.map(MyMapFunction)}

      <Login />
    </div>
  )
}