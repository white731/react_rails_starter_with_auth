import {Menu} from "semantic-ui-react"
import {Link, useHistory} from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"


export default () => {

  const history = useHistory()

  const value = useContext(AuthContext)

  return (
    <Menu>
      <Link to="/">
        <Menu.Item name='Home'/>
      </Link>
      <Link to="/things">
        <Menu.Item name='Things'/>
      </Link>
      <Link to="/login">
        <Menu.Item name='Login'/>
      </Link>
      <Link to="/register">
        <Menu.Item name='Register'/>
      </Link>
      <Link to="/users">
        <Menu.Item name='All Users'/>
      </Link>
      
      <MenuText content={value.authenticated ? value.email : "Please Login"}/>
      <MenuText content={value.authenticated ? "Logged In" : "Logged Out"}/>
      <Menu.Item onClick={() => value.handleLogout(history)} name="Logout" />
  </Menu>
  )

}

const MenuText = styled(Menu.Header)`
align-self: center;
padding: 5px;
`
