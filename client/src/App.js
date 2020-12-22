import logo from './logo.svg';
import './App.css';
import Home from './demo/Home';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import User from './components/User';

function App() {
  return (
  <>  
  <NavBar/>
  <FetchUser>
    <Container>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <ProtectedRoute exact path='/users' component={Users}/>
      <ProtectedRoute exact path='/things' component={Things}/>
      <ProtectedRoute exact path='/user' component={User}/>
      <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
  </>
  );
}

export default App;
