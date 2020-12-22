import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../providers/AuthProvider"
import Axios from "axios"

const FetchUser = (props) => {

  const [token, setToken] = useState(false)

  const {authenticated, setUser} = useContext(AuthContext)

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async () => {
    if (authenticated || !localStorage.getItem('access-token')) {
      setToken(true)
      return; 
    }
    
    try {
      const res = await Axios.get("/api/auth/validate_token")
      console.log(res.data.data)
      setUser(res.data.data)
    } catch (err) {
      console.log(err)
    } finally {
      setToken(true)
    }
  }

  return token ? props.children : null
}

export default FetchUser