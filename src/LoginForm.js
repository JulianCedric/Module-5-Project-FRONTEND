import React from 'react'
import './App.css';

import { Button, Form, Grid, Divider, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
   
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

            <div className="ui centered grid">
            <div className="twelve wide column">
            <div className="login">

    <Segment inverted placeholder className="loginForm">

  <Grid columns={2} relaxed='very' stackable textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
      <Header as='h1' color='teal' textAlign='center'>
      <h2 style={{ color: 'Violet' }}>Login</h2>
      </Header>


      <Form size='large'>
        <Segment stacked>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
        />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
    </Grid.Column>
    <Grid.Column style={{ maxWidth: 450 }}>

    <Header as='h1' color='Violet' textAlign='center'>
      <h2 style={{ color: 'Violet' }}>Sign Up</h2>
      </Header>

      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Create an Account
          </Button>
        </Segment>
      </Form>
      {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
    </Grid.Column>
    </Grid>




    {/* <div class="column"> */}
                            {/* <div class="ui form" onSubmit={this.handleSignUpSubmit}> */}
                            {/* <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column> */}

  </Segment>
  </div>
  </div>
  </div>
)

;
    }
}
 
export default LoginForm;