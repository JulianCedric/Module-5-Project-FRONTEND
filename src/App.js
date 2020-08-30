import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {  
    currentView: 'home',
    username: '',
    loggedIn: false
  }

  setLogin = () => {
    console.log("Confirmation: User has logged in")
    this.setState({loggedIn: !this.state.loggedIn})
  }

  changeView = view => {
    this.setState({ currentView: view })
  }

  changeUsernameGreeting = name => {
    console.log(name)
    // this.setState({username: name})
  }

  render() { 
    return (
      <Router>
       <React.Fragment>
        <Switch>
          <div className="App">
            <Navbar loggedIn={this.state.loggedIn}/>
            <Route exact path = '/' render={(props) => (<Home {...props} loggedIn={this.state.loggedIn} />)}></Route>
            <Route path = '/login' render={(props) => (<Login {...props} setLogin={this.setLogin} changeCurrentView={this.changeCurrentView} changeUsernameGreeting={this.changeUsernameGreeting}/>)}></Route>
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