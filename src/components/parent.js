import { useState } from "react";
import Child from "./child";
var reqres = [{
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
}];

export default function Parent() {
  const [users, setUsers] = useState("Nextstacks");
  const [admins, setAdmins] = useState(reqres);

  return (
    <div>
      this is the parent
      <Child u={users} a={admins} />
    </div>
  )
}