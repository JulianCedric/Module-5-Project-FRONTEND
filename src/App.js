import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Sticky } from 'semantic-ui-react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Lab from './Lab';

class App extends React.Component {
  state = {  
    loggedIn: false
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
            <Route path='/lab' render={(props) => (<Lab {...props} />)}></Route>
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