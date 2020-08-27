import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  state = {  
    habits: []
  }

  render() { 
    return (  
      <Router>
       <React.Fragment>
        <Switch>
          <div className="App">
            <Navbar />
            <Route exact path = '/' render={(props) => (<Home {...props} logged_in={this.state.logged_in} />)}></Route>
          </div>
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}
 
export default App;