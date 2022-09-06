//object destructuring
export default function Child(props) {
  console.log(props);

  const handleClick = () => {
    props.n2(20);
  }

  const showLayout = (obj, index) => {
    return (
      <div>{index} {obj.first_name} {obj.last_name}</div>
    )
  }

  return (
    <div>
      hi this is child
      {props.n.map(showLayout)}
    </div>
  )
}