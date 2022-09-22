import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { useEffect, useState } from "react"
// useEffect(function, dependencies);

export default function Users(){
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  //when component is mounted
  useEffect(()=>{
    getUsers();
  }, []);

  //when page is changing
  useEffect(()=>{
    getUsers();
  },[page]);

  //when component will unmount
  useEffect(()=>{
    return ()=>{
      setUsers([]);
    }
  },[])

  const getUsers = () => {
    fetch("https://reqres.in/api/users?page="+page)
    .then((res)=> res.json())
    .then ((resJson)=>{
      setUsers(resJson.data);
    })
  }

  const login = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      })
    })
    .then((res)=> res.json())
    .then ((resJson)=>{
      console.log(resJson.token)
    })
  }

  const userLayout = (user, index) => {
    return(
      <ListItem>
        <ListItemAvatar>
          <Avatar src={user.avatar} />
        </ListItemAvatar>
        <ListItemText 
          primary={user.first_name}
          secondary={user.email}
        />
      </ListItem>
    )
  }

  return(
    <div>
      {page}
      <button onClick={()=>{ setPage(page - 1) }}>previous</button>
      <button onClick={()=>{ setPage(page + 1) }}>next</button>
      <br />
      <button onClick={login}>Login</button>
      <List>
        {users.map(userLayout)}
      </List>
    </div>
  )
}