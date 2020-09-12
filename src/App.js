import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react';

const API_USERS = 'http://localhost:3001/api/v1/users'
const API_HABITS = 'http://localhost:3001/api/v1/habits'
const API_REMINDERS = 'http://localhost:3001/api/v1/reminders'

class App extends React.Component {
  state = {  
    habits: [],
    users: [],
    reminders: [],
    currentView: 'home',
    username: '',
    loggedIn: false
  } 

  componentDidMount = () => {
    fetch(API_USERS)
    .then(r => r.json())
    .then(usersData => this.setState({ users: usersData }))
  }
  
  componentDidMount = () => {
    fetch(API_HABITS)
    .then(r => r.json())
    .then(habitsData => this.setState({ habits: habitsData }))
  }

  componentDidMount = () => {
    fetch(API_REMINDERS)
    .then(r => r.json())
    .then(users => this.setState({ users }))
  }

  setLogin = value => {
    this.setState({ loggedIn: !this.state.loggedIn })
  } 

  changeView = view => {
    this.setState({ currentView: view })
  }

  render() { 
    return (
      <Router>
       <React.Fragment>
        <Switch>
          <div className="App">
            <Sticky context={this.contextRef}>
              <Navbar loggedIn={this.state.loggedIn} setLogin={this.setLogin}/>
            </Sticky>
            <Route exact path = '/' render={(props) => (<Home {...props} users={this.state.users} loggedIn={this.state.loggedIn} />)}></Route>
            <Route path = '/login' render={(props) => (<Login {...props} setLogin={this.setLogin} setLogout={this.setLogout} changeCurrentView={this.changeCurrentView} changeUsernameGreeting={this.changeUsernameGreeting}/>)}></Route>
            <Route path='/dashboard' render={(props) => (<Dashboard {...props} />)}></Route>
              {!this.state.loggedIn 
                ? <Redirect to="/" component={ Home } /> 
                : <Redirect to="/dashboard" component={ Dashboard } /> 
              }
          </div>
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
    );
  };
};
 
export default App;