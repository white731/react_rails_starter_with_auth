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

function App() {
  return (
  <>  
  <NavBar/>
  <Container>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/register' component={Register}/>
     <Route exact path='/users' component={Users}/>
     <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
  );
}

export default App;
