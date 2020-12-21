import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"


export default () => {

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
      <MenuText content={value.user ? value.user.email : "Please Login"}/>
  </Menu>
  )

}

const MenuText = styled(Menu.Header)`
align-self: center;
padding: 5px;
`
