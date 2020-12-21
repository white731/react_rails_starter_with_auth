import Axios from "axios"
import { useState, useEffect } from "react"

const Users = () => {

  const [users,setUsers] = useState([])

  useEffect(()=>{
    allUsers()
  },[])

const allUsers = async () => {
  try {
    let res = await Axios.get("/api/users")
    setUsers(res.data)

  } catch(err) {
    console.log(err)

  }
}

  return (
    <>
    {users.map((u, index) => <p key={index}>{u.email}</p>)}
    </>
  )


}

export default Users