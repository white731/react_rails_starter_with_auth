import {Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item name='Home'/>
      </Link>
      <Link to="/things">
        <Menu.Item name='Things'/>
      </Link>
  </Menu>
  )

}