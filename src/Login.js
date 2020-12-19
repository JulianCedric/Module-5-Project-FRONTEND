import React from 'react';  
import { Form, Grid } from 'semantic-ui-react';

class Login extends React.Component {
    state = {  
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        usernameLogin: '',
        passwordLogin: ''
    }

    handleChangeLogin = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleChangeSignUp = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleSubmitLogin = e => {
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

    handleSubmitSignUp = e => {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
        })
        .then(r => r.json())
        .then(data => {
            if (!data.error) {
                this.props.setLogin(data)
            }
        })
    }

    render() { 
        return (  
            <div>
                <div className="twelve wide column">
                    <Grid columns={2} relaxed='very' stackable textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form inverted onSubmit={this.handleSubmitLogin}>
                                <form action="#">
                                    <h2 style={{ color: 'white' }}>Login</h2>
                                    <div icon='user' iconPosition='left' class="text-input">
                                        <Form.Input icon='user' iconPosition='left' type="text" name="usernameLogin" value={this.state.usernameLogin} onChange={this.handleChangeLogin} id="username" placeholder="Username" style={{width: "250px"}}/>
                                    </div>   
                                    <div class="text-input">
                                        <Form.Input icon='lock' iconPosition='left' type="password" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handleChangeLogin} id="password" placeholder="Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br>
                                    </div>  
                                    <div class="form-bottom">
                                        <input type="submit" id="submit" value="Login" class="ui inverted purple button" style={{width: "250px"}}/><p></p>
                                    </div>
                                </form>  
                            </Form>
                        </Grid.Column>
                        <Grid.Column style={{ maxWidth: 450 }}>                            
                            <div class="ui form" onSubmit={this.handleSubmitSignUp}>
                                <form action="#">
                                    <br/>
                                    <h2 style={{ color: 'white' }}>Sign Up</h2>
                                    <div class="text-input">
                                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeSignUp} id="firstName" placeholder="First Name" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    <div class="text-input">
                                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangeSignUp} id="lastName" placeholder="Last Name" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>                                        
                                    </div>
                                    <div class="text-input">
                                        <input type="text" name="username" value={this.state.username} onChange={this.handleChangeSignUp} id="username" placeholder="Username" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div>   
                                    <div class="text-input">
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChangeSignUp} id="password" placeholder="Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br><br></br>
                                    </div>
                                    <div class="text-input">
                                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangeSignUp} id="confirmPassword" placeholder="Confirm Password" style={{width: "250px"}}/>
                                        <span class="separator"> </span><br></br>                                        <span class="separator"> </span><br></br><br></br>

                                    </div>  
                                    <div class="form-bottom">
                                        <input type="submit" id="submit" value="Create Account" class="ui inverted purple button" style={{width: "250px"}}/><p></p>
                                    </div>
                                </form>  
                            </div>
                        </Grid.Column>
                    </Grid>
                </div> 
            </div>            
        );
    };
};
 
export default Login;