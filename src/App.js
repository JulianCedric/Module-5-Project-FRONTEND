import React from 'react';
// import logo from './logo.svg';
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
    fetch(API_HABITS)
    .then(res => res.json())
    .then(habits => this.setState({ habits }))
  }

  componentDidMount = () => {
    fetch(API_USERS)
    .then(res => res.json())
    .then(users => this.setState({ users }))
  }

  // setLogin = (value) => {
  //   console.log("Confirmation: User has logged in")
  //   this.state.loggedIn ? this.setState({ loggedIn }) : this.setState({ loggedIn: !loggedIn})
  // }

  changeView = view => {
    this.setState({ currentView: view })
  }

  changeUsernameGreeting = name => {
    console.log(name)
    // this.setState({username: name})
  }

  render() { 
    // console.log(this.state.loggedIn)
    console.log(this.state.users)

    console.log(this.state.habits)
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
    )
  }
}
 
export default App;