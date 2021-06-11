import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            <div class="Navbar">
                <div class="ui inverted borderless large menu">
                    <a class="item">
                        <Link to="/" class="link"><i class="big home icon"></i></Link>
                    </a>
                    
                    <a class="item">
                        <Link to="/dashboard" class="link">Dashboard</Link>
                    </a>
                    
                    <a class="item">
                        <Link to="/lab" class="link">Lab</Link>
                    </a>

                    <div class="right menu">
                        <a class="item">
                        {
                            this.props.loggedIn
                            ? <Link to="/login" onClick={this.props.setLogin} class="link">Logout</Link>
                            : <Link to="/login" class="link">Login | Sign Up</Link>
                        }
                    </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar;