import React from 'react';  
import './App.css';
import { Button, Form, Grid, Divider, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component {
    state = {  
        username: "",
        password: "",
        nameNewFirst: "",
        nameNewLast: "",
        usernameNew: "",
        passwordNew: "",
        confirmpasswordNew: ""
    }

    handleLoginChange = e => {
        this.setState(
            {[e.target.name] : e.target.value}
        )
    }

    // handleLoginSubmit = e => {
    //     e.preventDefault()
    //     fetch(API_USERS_inProgress, { 
    //     method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         }
    //         body: JSON.stringify({
    //             user: {username: this.state.username, password: this.state.password}})

    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             if (!data.message) {
    //                 this.props.setLogin(data)
    //             }
    //     })
    // }

    handleLoginSubmit = e => {
        console.log(this.state.username)
        this.props.setLogin('true')
        // e.preventDefault()
        // this.props.changeCurrentView('home')
        // this.props.changeUsernameGreeting(this.state.username)
    }

    // handleSignUpSubmit = e => {
    //     e.preventDefault()
    //     fetch('http://localhost:8080/users', {
    //         method: 'POST',
    //         headers: {accepts: 'application/json', 'Content-Type' : 'application/json'},
    //         body: JSON.stringify({user: {username: this.state.usernameNew,
    //         password: this.state.passwordNew}})
    //     }).then(resp => resp.json())
    //         .then(data => {
    //             if (!data.error) {
    //                 this.props.setLogin(data)
    //             }
    //         })
    // }

    render() { 
        return (  
            <div className="login-g" class="ui centered grid">
            <div className="twelve wide column">
            {/* <div className="login"> */}
                 {/* <Segment inverted secondary placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment> */}
                <Segment textAlign='center' className="login-s" inverted>
                <Grid columns={2} relaxed='very' stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>


                            <Form inverted onSubmit={this.handleLoginSubmit}>
                                <form action="#">
                                    <h2 style={{ color: 'Violet' }}>Login</h2>
                                    <div icon='user' iconPosition='left' class="text-input">
                                        <Form.Input icon='user' iconPosition='left' type="text" name="username" value={this.state.username} onChange={this.handleLoginChange} id="username" placeholder="Username" style={{width: "250px"}}/>
                                        {/* <span class="separator"> </span><br></br><br></br> */}
                                    </div>   
                                    <div class="text-input">
                                        <Form.Input icon='lock' iconPosition='left' type="password" name="password" value={this.state.password} onChange={this.handleLoginChange} id="password" placeholder="Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br>
                                    </div>  
                                    <div class="form-bottom">
                                        <input type="submit" id="submit" value="Login" class="ui inverted purple button" style={{width: "250px"}}/><p></p>
                                    </div>
                                </form>  
                            </Form>
                            </Grid.Column>
                            <Grid.Column>
                            <div class="ui form" onSubmit={this.handleSignUpSubmit}>
                                <form action="#">
                                    <h2 style={{ color: 'Violet' }}>Sign Up</h2>
                                    <div class="text-input">
                                        <input type="text" name="nameNewFirst" value={this.state.nameNewFirst} onChange={this.handleChange} id="nameNewFirst" placeholder="First Name" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    <div class="text-input">
                                        <input type="text" name="nameNewLast" value={this.state.nameNewLast} onChange={this.handleChange} id="nameNewLast" placeholder="Last Name" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    <div class="text-input">
                                        <input type="text" name="usernameNew" value={this.state.usernameNew} onChange={this.handleChange} id="username" placeholder="Username" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div>   
                                    <div class="text-input">
                                        <input type="password" name="passwordNew" value={this.state.passwordNew} onChange={this.handleChange} id="password" placeholder="Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div>
                                    <div class="text-input">
                                        <input type="password" name="confirmpasswordNew" value={this.state.confirmpasswordNew} onChange={this.handleChange} id="confirmpassword" placeholder="Confirm Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br>                                        <span class="separator"> </span><br></br><br></br>

                                    </div>  
                                    <div class="form-bottom">
                                        <input type="submit" id="submit" value="Create Account" class="ui inverted purple button" style={{width: "250px"}}/><p></p>
                                    </div>
                                </form>  
                            </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div> 
            </div>            
            // </div> 
        );
    };
};
 
export default Login;