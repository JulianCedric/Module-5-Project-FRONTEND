import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() { 
        return (  
            <div className="Navbar">
                <div className="ui inverted borderless large menu">
                    <a className="item">
                        <Link to="/" className="link"><i class="big home icon"></i></Link>
                    </a>
                    <a class="item">
                        <Link to="/dashboard" className="link">Dashboard</Link>
                    </a>
                    <div className="right menu">
                        <a className="item">
                        <Link to="/login" onClick={this.handleClick} className="link">{this.props.loggedIn ? "Logout" : "Login | Sign Up"}</Link>
                    </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Navbar; 

// notes = () => {
// ////////// 1ST DRAFT CODE FOR POST-MVP VERSION //////////

// // handleClick = e => {
// //     // this.props.setLogout('false')
// // }

// /////////////////////////////////////////////////////////
// }