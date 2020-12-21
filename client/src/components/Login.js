import { useState, useContext } from "react"
import AuthProvider, { AuthContext } from "../providers/AuthProvider"
import { Form, Header } from "semantic-ui-react"

const Register = (props) => {

  const [email, setEmail] = useState("testy@test.com")
  const [password, setPassword] = useState("123456")

  const {handleLogin} = useContext(AuthContext)


  const handleSubmit = () => {
   handleLogin({email, password},props.history)
  }
  return (
    <>
    <Header as="h1" textAlign="center">Register</Header>
    <Form onSubmit={handleSubmit}>
      <Form.Input
        required
        autoFocus
        name = "email"
        label = "Email"
        onChange = {(e)=> setEmail(e.target.value)}
        value = {email}
      >
      </Form.Input>
      <Form.Input
        required
        name = "password"
        label = "Password"
        onChange = {(e)=> setPassword(e.target.value)}
        value = {password}
      >
      </Form.Input>
      <Form.Button type="submit">Login</Form.Button>
    </Form>
    </>
  )
}

export default Register