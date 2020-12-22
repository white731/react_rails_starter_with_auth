import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Redirect, Route } from "react-router-dom"


const ProtectedRoute = ({ component: Component, ...rest }) => {

 const {authenticated} = useContext(AuthContext)

 const getComponent = (props) => {

  if (authenticated){
    return (
      <Component {...props} />
    )
  } else {
    return (
      <Redirect
        to={{pathname: "/login", state: { from: props.location }}}
        />
      )
    }
  }
  return <Route {...rest} render={(props) => getComponent(props)}/>
}

export default ProtectedRoute