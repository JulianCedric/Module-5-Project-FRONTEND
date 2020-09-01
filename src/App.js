import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
    .then(users => this.setState({ users }))
  }
  
  componentDidMount = () => {
    fetch(API_HABITS)
    .then(r => r.json())
    .then(habits => this.setState({ habits }))
  }

  componentDidMount = () => {
    fetch(API_REMINDERS)
    .then(r => r.json())
    .then(users => this.setState({ users }))
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
            <Navbar loggedIn={this.state.loggedIn} setLogin={this.setLogin}/>
            <Route exact path = '/' render={(props) => (<Home {...props} loggedIn={this.state.loggedIn} />)}></Route>
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


////////// 1ST DRAFT CODE FOR POST-MVP VERSION //////////
  
// changeUsernameGreeting = name => {
//   this.setState({username: name})
// }
  
/////////////////////////////////////////////////////////