import { useEffect, useState } from "react"
import axios from "axios"
import User from "./User"

export default function RenderUsers() {
  const [users, setUsers] = useState([])
  const path = "http://localhost:3000/users"

  function getData(path) {
    axios
      .get(path)
      .then((response) => {
        console.log(response.data)
        setUsers([
          ...response.data.atomic,
          ...response.data.blitz,
          ...response.data.bullet,
          ...response.data.classical,
          ...response.data.horde,
          ...response.data.rapid,
        ])
      })
      .catch((error) => {
        console.error(error)
        setUsers([])
      })
  }

  useEffect(() => {
    getData(path)
  }, [])
  return (
    <>
      <h1 style={{ margin: "10px", padding: "5px" }}>Users</h1>
      {users.map((user) => {
        return (
          <User key={user.id} username={user.username} title={user.title} />
        )
      })}
    </>
  )
}
