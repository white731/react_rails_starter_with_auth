import React from "react"
import { useState } from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom"


export const AuthContext = React.createContext()

const AuthProvider = (props) => {

  const handleRegister = async (user, history) => {
    try {
      let res = await Axios.post("/api/auth", user)
      console.log("user: ", res.data.data)
      setUser(res.data.data)
      history.push("/user")
    } catch (err) {
      alert("Error occurred while attempting to register user. Please Debug for more information")
    }
  }

  const handleLogin = async (user, history) => {
    try {
      let res = await Axios.post("/api/auth/sign_in", user)
      setUser(res.data.data)
      history.push("/user")
      console.log(res.data.data.email)
    } catch (err) {
      alert("Error occurred while attempting to Login user. Please Debug for more information")
    }
  }

  const handleLogout = async (history) => {
    // debugger
    try {
      await Axios.delete("/api/auth/sign_out")
      setUser(null)
      history.push("/login")

    } catch (err) {
      alert("Error occurred while attempting to Logout user. Please Debug for more information")
    }
    
  }


  const [user, setUser] = useState(null)

  const auth = {
    ...user,
    handleRegister,
    handleLogin,
    handleLogout,
    authenticated: user !== null,
    setUser,
  }

  return(
    <AuthContext.Provider value = {auth}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider