import {Menu} from "semantic-ui-react"
import {Link, useHistory} from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"


export default () => {

  const history = useHistory()

  const value = useContext(AuthContext)

  const links = () => {
    if (value.authenticated){
      return (
      <>
        <Menu.Item onClick={() => value.handleLogout(history)} name="Logout" />
        <Link to="/user">
          <MenuText content={value.email} />
        </Link>
      </>
      )
    }
    return(
      <>
      <Link to="/login">
        <Menu.Item name='Login'/>
      </Link>
      <Link to="/register">
        <Menu.Item name='Register'/>
      </Link>
      
      </>
    )
  }

  return (
    <Menu>
      <Link to="/">
        <Menu.Item name='Home'/>
      </Link>
      <Link to="/users">
        <Menu.Item name='All Users'/>
      </Link>
      <Link to="/things">
        <Menu.Item name='Things'/>
      </Link>
      <Menu.Menu position="right">{links()}</Menu.Menu>
    </Menu>
  )
}

const MenuText = styled(Menu.Item)`
align-self: center;
padding: 5px;
`
